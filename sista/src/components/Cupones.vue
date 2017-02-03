<template>
<div id="cupones_root">
<!-- Trigger the modal with a button -->
<button type="button" class="btn btn-info" data-toggle="modal" data-target="#modalCupon">Agregar cupón</button>
<hr>
<div class="well">
  <table class="table">
    <thead>      
      <tr>
        <th>Servicio</th>
        <th>Código</th>
        <th>Descuento</th>
        <th>Fecha de vencimiento</th>
        <th>Eliminar</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="cupon in cupones">
      <td>{{cupon.servicio_id}}</td>
      <td>{{cupon.codigo}}</td>
      <td>{{cupon.porcentaje}}%</td>
      <td>{{cupon.fecha_final}}</td>
      <td>
        <button v-on:click="confirmDialog(cupon.id)" type="button" class="btn btn-danger">X</button>
      </td>
    </tr>
    </tbody>
  </table>
</div>

<!-- Modal -->
<div id="modalCupon" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" v-on:click="reset_status">&times;</button>
        <h4 class="modal-title">Nuevo cupón de descuento</h4>
      </div>
      <div class="modal-body">
        <div class="form-group">
        	<label for="s_servicio">Servicio:</label>
    		<select id="s_servicio" class="form-control" v-model="servicio_selected">
    			<option v-for="servicio in servicios" :value="servicio.id">
    				{{servicio.nombre}}
    			</option>
    		</select>
  		</div>
  		<div class="form-group">
  			<label for="porcentaje">Porcentaje de descuento</label>
  			<input type="number" class="form-control" id="porcentaje" v-model="porcentaje" min="1">
  		</div>
      <div class="form-group">
        <div class="alert alert-warning">
          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
          <strong>Instrucciones: </strong>
          <h5>Inserte una palabra clave para que el sistema genere una propuesta de código de cupón . <i>Ejemplo : ingrese : Santa y el sistema generará : Santa123 u otro disponible</i> , puede dejar este espacio en blanco y el sistema generará un cupón aleatorio
          </h5>
        </div>
      </div>
        
        <label for="propuesta_codigo">Palabra clave</label>
        <div v-if="error" class="alert alert-danger"> 
          Ocurrió un error generado el código :(
        </div>
      <div class="form-inline">
      <div class="form-group">
          <input type="text" class="form-control" id="propuesta_codigo" v-model="word_key" placeholder="Ingresa una palabra clave para generar código">
          <input type="text" class="form-control" v-model="codigo" placeholder="Código" readonly>
          <button class="btn btn-info" v-on:click="generar_key" v-if="!generando_codigo">Generar código</button>
          <button v-else class="btn btn-info" disabled><i class="fa fa-spinner fa-pulse fa-fw"></i> Generando código</button>
        </div>
      </div>


  		<div class="form-group">             
                <label for="fecha_inicial" class="form-control-label">A partir de:</label>
                <input type="text" id="fecha_inicial" class="form-control" :value="fecha_inicial">
        </div>
        <div class="form-group">             
                <label for="fecha_final" class="form-control-label">Hasta el:</label>
                <input type="text" id="fecha_final" class="form-control" :value="fecha_final">
        </div>
      </div>
      <div class="modal-footer">
        <div class="status_cupon">
          <div v-if="cupon_status_creating" class="alert alert-info" align="center">
            <h4><i class="fa fa-refresh fa-spin fa-fw"></i> Creando cupon, espere ... </h4>
          </div>
          <div v-if="cupon_status_error" class="alert alert-danger" align="center">
            <h4> 
              <i class="fa fa-times"></i> Ha ocurrido algun error creando el cupón : 
              <small>
                <ul v-for="error in error_messages">
                  <li>
                    {{error_messages}}
                    <ul v-for="suberror in error">
                      <li>{{suberror}}</li>
                    </ul>
                  </li>
                </ul>
              </small>
            </h4>
          </div>
        </div>
      	<button class="btn btn-success" v-on:click="enviarCupon">Crear cupón</button>
        <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="reset_status">Cerrar</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>


<script>
export default {
  name: 'hello',
  data () {
    return {
      cupones : [],
      servicios : [],
      servicio_selected : null,
      fecha_inicial : null,
      fecha_final : null,
      porcentaje : null,
      error_messages : [],
      cupon_status_error : false,
      cupon_status_creating : false,
      word_key : null,
      codigo : null,
      error : false,
      generando_codigo : false,
      deleteNameCupon: '',
      ArregloID: []

    }
  },
  mounted(){
  	this.fetchDatas();
  	var thisobj = this;

  	$( "#fecha_inicial" ).datepicker({
                       dateFormat: 'yy-mm-dd',
                       onSelect: function (date) {
        					thisobj.fecha_inicial = date;
      					}
     });
  	$( "#fecha_final" ).datepicker({
                       dateFormat: 'yy-mm-dd',
                       onSelect: function (date) {
        					thisobj.fecha_final = date;
      					}
     });
  },
  methods : {
  	fetchDatas : function(){
  		    this.$http.get('cupon',{params : {'calendario_id' : this.$store.state.calendario_id}}).
  		    then(
  		    	//success
  		    	function(response){

  		    		this.servicios = response.data.servicios;
              this.cupones = response.data.cupones;

  		    	},
  		    	//error
  		    	function(response){

  		    		console.error("Ocurrio un error :( codigo de estado : "+ response.status);
  		    	}
  		    	);
  	},
    generar_key : function(){

      var vm = this;
      if(vm.word_key == '' || vm.word_key == null || vm.word_key == ' ') vm.word_key = undefined;
      
      vm.generando_codigo =  true;
      vm.$http.get('codigo_cupon/'+vm.word_key).then(

        //success
        function(response){
          vm.generando_codigo = false;
          vm.error  = false;
          vm.codigo = response.data;

        },
        //error
        function(response){
          vm.generando_codigo = false;
          vm.error = true;
        }
        );
    },

    confirmDialog: function(idCupon){
                var idCupon = idCupon;
          $.confirm({
            title: '¿Está seguro de eliminar el cupón?',
            content: '',
            buttons: {              
              Sí: {
              text: 'Sí',
              btnClass: 'btn-warning',
              action: function () {
                /*this.$content*/
                this.ArregloID = idCupon;
                this.deleteNameCupon = this.servicios[this.ArregloID -1].nombre;
                deleteServicio();
                // reference to the content
                $.alert('¡Eliminado!');
              }
            },
              Cancelar: function () {
                
              }              
          }
      });
    },

    deleteServicio : function(event){
                  $(event.target).attr('disabled',true);
                var datas = {'id' : this.ArregloID};

                this.$http.delete('tipo',{params : {'id' : this.ArregloID}}).then(
                    //success
                    function(response){
                        $(event.target).attr('disabled',false);
                        this.updateSuccess = true;
                        var thisObj = this;
                        setTimeout(function() {
                            thisObj.updateSuccess = false;
                        }, 5000);
                        this.fetchDatas();
                    },
                    //error
                    function(response){
                        $(event.target).attr('disabled',false);
                    }
                    );
            },

    reset_status : function(){
      this.cupon_status_creating  = false;
      this.cupon_status_error = false;
      this.error_messages =  [];
    },
  	enviarCupon : function(){
  		var vm = this;
  		var datas = {'servicio_id' : this.servicio_selected, 'porcentaje' : this.porcentaje, 'fecha_inicial' : this.fecha_inicial, 'fecha_final' : this.fecha_final, 'word_key' : vm.codigo};
      vm.cupon_status_creating  = true;
      vm.cupon_status_error = false;
  		this.$http.post('cupon',datas).then(
  			//success
  			function(response){
  				vm.fetchDatas();
          vm.cupon_status_creating = false;
          vm.cupon_status_error = false;
          vm.reset_status();
          $('#modalCupon').modal('hide')
           $.confirm({
            title: 'Correcto',
            content: 'El cupón se ha creado correctamente, código del cupón: ' +response.data.codigo ,
            type: 'green',
            typeAnimated: true,
            buttons : {
              ok : {text : 'Entendido'}
            }
          });
  			},
  			//error
  			function(response){
          vm.cupon_status_creating = false;
          vm.cupon_status_error = true;
          vm.error_messages = response.data.errors;
          console.log(vm.error_messages);
          console.log(response.data);
  				console.error("Error creando el cupon :( , codigo de estado : " + response.status);
  			}

  			);
  	}
  }
}
</script>