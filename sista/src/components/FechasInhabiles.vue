<template>

<div id="fechas_inhabiles_root">

	<button class="btn btn-primary" v-on:click="mostrarModal">Agregar Fecha Inhábil</button>

  <br><br>
    <div class="well">
      <table class="table">
        <thead class="thead-inverse">
          <tr>
            <th>Fecha</th>
            <th>Disponibilidad</th>
            <th>Cancelar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in fechas_inhabiles">
            <td>{{data.dia}}</td>
            <td v-if="data.completo===1">
              <label>Día no laboral</label>
            </td>
            <td v-else>
            <span v-for="hora in data.horas">
              <td>
                {{hora.hora}}
              </td>
            </span>
            </td>
            <td>
              <button type="button" class="btn btn-danger" id="botonDelete" title="Eliminar servicio" v-on:click="confirmDialog($event,data.id)">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--Modal fecha inhabil-->
    <div id="fecha_inhabil_modal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Agregar una fecha inhabil</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">             
                <label for="message-text" class="form-control-label">Seleccione Fecha</label>
                <input type="text" id="datepicker" class="form-control" :value="fecha_inhabil">
            </div>
            <div class="form-group">
              <label for="completo-text" class="form-control-label">Todo el día</label>
              <input type="checkbox" name="completo-text" v-model="completo">
            </div>
            <div class="form-group" v-if="!completo">             
                <label for="message-text" class="form-control-label">Horario</label>
                <h3>De: </h3>

            <select v-model="hora_inicial">
              <option v-for="n in range(0,23,true)">{{ n }}</option>
            </select>

          <h3>A: </h3>
            <select v-model="hora_final">
              <option v-for="h in range(hora_inicial,23,false)">{{ h }}</option>
            </select>
            </div>
          <div class="modal-footer">

              <div class="status" align="center">
                <div v-if="fecha_inhabil_success" class="alert alert-success">
                  <h4><i class="fa fa-check"></i>¡Fecha inhabil creada!</h4>
                </div>
                <div v-if="fecha_inhabil_error" class="alert alert-danger">
                  <h4> <i class="fa fa-warning"></i>Se produjo el siguiente error: {{fecha_inhabil_error_message}}</h4>
                </div>
                <div v-if="fecha_inhabil_creando" class="alert alert-info">
                  <h4><i class="fa fa-spinner fa-spin fa-fw"></i> Creando fecha inhabil ...</h4>
                </div>
              </div>

            <button type="button" class="btn btn-default" id="cancelar" data-dismiss="modal">Cancelar</button>
            <button class="btn btn-success" id="agregar_fecha" v-on:click="agregarFecha">Inhabilitar Fecha</button>
          </div>
        </div>


    






    
  </div>


</template>

<script>
import "jquery-confirm/css/jquery-confirm.css";

export default {
  name: 'fecha_inhabil',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      editFecha: '',
      editDisponibilidad: '',
      ArregloID: [],
      fecha_inhabil : moment(new Date()).format("YYYY-MM-DD"),
      completo : false,
      hora_inicial : 0,
      hora_final : 1,
      fechas_inhabiles : [],
      fecha_inhabil_success : false,
      fecha_inhabil_error : false,
      fecha_inhabil_creando : false,
      fecha_inhabil_error_message : '',
    }
  },
  mounted(){
    
  	var thisobj = this;
  	 $( "#datepicker" ).datepicker({
                       dateFormat: 'yy-mm-dd',
                       onSelect: function (date) {
        					thisobj.fecha_inhabil = date;
      					}
                   });

  	 this.fetchDatas();
  },
  watch :{
            '$store.state.calendario_id': function()
            {
                if(this.$store.state.calendario_id != null) this.fetchDatas();
            }
        },
  methods: {
    mostrarModal : function(){
      this.fecha_inhabil =  moment(new Date()).format("YYYY-MM-DD");
      this.completo   =  false;
      this.hora_inicial  =  0;
      this.hora_final  =  1;
      $('#fecha_inhabil_modal').modal('show');
      this.neutralizarEstados(false);



    },
  	agregarFecha : function(event){
      
      var thisobj = this;
      thisobj.neutralizarEstados(true);
      thisobj.fecha_inhabil_creando = true;
  		var horas = this.range(this.hora_inicial,this.hora_final);
  	  		var datas = {'fecha' : this.fecha_inhabil, 'completo': this.completo, 'horas' : horas};
  		this.$http.post('fecha_inhabil',datas).then(

  			function(response){
          thisobj.neutralizarEstados(false);
          thisobj.fecha_inhabil_success = true;
  				console.log("Success");
          setTimeout(function() {
            thisobj.neutralizarEstados();
            $('#fecha_inhabil_modal').modal('hide');
          }, 1500);
  				thisobj.fetchDatas();
  			},
  			function(response){
          thisobj.neutralizarEstados(false);
          this.fecha_inhabil_error  = true; 
          switch(response.status)
          {
            case 400 : {
              thisobj.fecha_inhabil_error_message = 'Ya existe una fecha inhabil para este día'
            }break;

            case 500 : {
              thisobj.fecha_inhabil_error_message = "Se produjo un error en el servidor, contacte al administrador del servicio o intente más tarde";
            }
            case 401 : {
              if(localStorage.getItem('remember_user') == true)
                                {
                                    thisObj.$http.get('refresh_token').then(
                                        //sucess
                                        function(response){

                                            localStorage.setItem('token', response.data.token);
                                            thisobj.sendCalendarJSON(event);

                                        },
                                        //error
                                        function(response){
                                           $('#fecha_inhabil_modal').modal('hide');
                                            localStorage.removeItem('token');
                                            thisobj.$router.push('admin');
                                        });
                                }
                                else{
                                    $('#fecha_inhabil_modal').modal('hide');
                                    localStorage.removeItem('token');
                                    thisobj.$router.push('admin');
                                }
                              }break;
            case 404 : {
                                        $('#fecha_inhabil_modal').modal('hide');
                                       localStorage.removeItem('token');
                                        thisobj.$router.push('admin');
                            }break;
            default : {
                      thisobj.fecha_inhabil_error_message = "Ha ocurrido un error inesperado, intente de nuevo";
            }
          }

  				console.error("Error :( ");
  			}
  			);

  	},
    neutralizarEstados : function(withButtons){
      if(withButtons)
      {
        $("#agregar_fecha").attr('disabled',true);
        $('#cancelar').attr('disabled',true)
      }
      else {
        $("#agregar_fecha").attr('disabled',false);
        $('#cancelar').attr('disabled',false)
      }
      this.fecha_inhabil_creando = false;
      this.fecha_inhabil_error = false;
      this.fecha_inhabil_success  = false;
      this.fecha_inhabil_error_message = '';
    },

    confirmDialog: function(event,fecha_inhabil_id){
          var thisobj = this;
          $.confirm({
            title: '¿Está seguro de eliminar el elemento?',
            buttons: {              
              Sí: {
              text: 'Sí',
              btnClass: 'btn-warning',              
              action: function () {
                thisobj.borrarFechaInhabil(fecha_inhabil_id);
               
              }
            },
              Cancelar: function () {
                
              }              
          }
      });
    },

  	fetchDatas : function(){
       if(this.$store.state.calendario_id === null)return; 
      var vm = this;
  		this.$http.get('fecha_inhabil',{params : {'calendario_id' : this.$store.state.calendario_id }, progress(e) {
        if (e.lengthComputable) {
            //console.log("porcentaje: "+ (e.loaded / e.total * 100) );
            vm.$store.commit('aumentarPorcentaje', {
                        porcentaje: (e.loaded / e.total * 100)
                    });            
        }
            }}).then(

  			//success

  				function(response){
  					this.fechas_inhabiles = response.data;
  				},
  			//error

  				function(response){
  					console.error("Ocurrio un error ! ");
  				}
  			);
  	},
  	range : function(start,end,isStart){
  		start = isStart ? parseInt(start) : parseInt(start)+1 ;
  		end = parseInt(end);
  		var range = [];
  		for(start; start <=end; start++) range.push(start);
  		return range;
  	},    
    borrarFechaInhabil: function(fecha_inhabil_id) {
        var thisObj = this;
        this.$http.delete('fecha_inhabil',{params : {'fecha_inhabil_id' : fecha_inhabil_id}}).then(
          //success
          function(response){
            console.log("Fecha cancelada con exito ! ");
            thisObj.fetchDatas();
          },
          function(response){
                      //error
          console.error("Ha ocurrido un error");

          }

          );
              
    },
  }
}
</script>