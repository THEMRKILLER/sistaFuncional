<template>

<div id="fechas_inhabiles_root">

	<button class="btn btn-primary" data-toggle="modal" data-target="#fecha_inhabil_modal">Agregar Fecha Inhábil</button>

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
              <button type="button" class="btn btn-danger" id="botonDelete" title="Eliminar servicio" v-on:click="confirmDialog()">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="fechas_inhabiles_root">

    	<button class="btn btn-primary" data-toggle="modal" data-target="#fecha_inhabil_modal">Agregar Fecha Inhábil</button>
    	<!-- {{fechas_inhabiles}} -->
      <br><br>


        <div class="well">
          <table class="table">
            <thead class="thead-inverse">
              <tr>
                <th>Fecha</th>
                <th>Disponibilidad</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="">
                <td></td>
                <td></td>
                <td>
                  <button type="button" class="btn btn-warning glyphicon glyphicon-pencil" title="Editar información" data-target="#myModal"></button>
                </td>
                <td>
                  <button type="button" class="btn btn-danger" id="botonDelete" title="Eliminar servicio" v-on:click="confirmDialog()">X</button>
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
    					<option v-for="n in range(0,23)">{{ n }}</option>
    				</select>

    			<h3>A: </h3>
    				<select v-model="hora_final">
    					<option v-for="h in range(hora_inicial,23)">{{ h }}</option>
    				</select>
          	</div>
          <div class="modal-footer">

          	{{fecha_inhabil}}
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
            <button class="btn btn-success" v-on:click="agregarFecha">Inhabilitar Fecha</button>
          </div>
        </div>


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
      	<div class="checkbox-inline" v-if="!completo">             
            <label style="font-family: 'PT Sans', sans-serif; margin-left:-10px;" for="message-text" class="form-control-label">Horario</label>
            <h3>De: </h3>

				<select v-model="hora_inicial">
					<option v-for="n in range(0,23)">{{ n }}</option>
				</select>
        </div>
        <div class="checkbox-inline center">
        <br>
			<h3 style="margin-top:25px;">A: </h3>
				<select v-model="hora_final">
					<option v-for="h in range(hora_inicial,23)">{{ h }}</option>
				</select>
      	</div>
      <div class="modal-footer">

      	{{fecha_inhabil}}
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
        <button class="btn btn-success" v-on:click="agregarFecha">Inhabilitar Fecha</button>
      </div>
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
      hora_final : 0,
      fechas_inhabiles : []
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
  methods: {
  	agregarFecha : function(){
  		var horas = this.range(this.hora_inicial,this.hora_final);
  	  		var datas = {'fecha' : this.fecha_inhabil, 'completo': this.completo, 'horas' : horas};
  		this.$http.post('fecha_inhabil?token='+localStorage.getItem('token'),datas).then(

  			function(response){
  				console.log("Success");
  				this.fetchDatas();
  			},
  			function(response){
  				console.error("Error :( ");
  			}
  			);

  	},

    confirmDialog: function(){
          $.confirm({
            title: '¿Está seguro de eliminar el elemento?',
            buttons: {              
              Sí: {
              text: 'Sí',
              btnClass: 'btn-warning',              
              action: function () {
                // reference to the content
                $.alert('¡La fecha ha sido cancelada!');
              }
            },
              Cancelar: function () {
                
              }              
          }
      });
    },

  	fetchDatas : function(){
  		this.$http.get('fecha_inhabil',{params : {'calendario_id' : this.$store.state.calendario_id }}).then(

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
  	range : function(start,end){
  		start = parseInt(start);
  		end = parseInt(end);
  		var range = [];
  		for(start; start <=end; start++) range.push(start);
  		return range;
  	},    
    deleteTheEvent: function(id_button) {
                /*this.ArregloID = id_button;
                this.deleteNameEvent = this.servicios[this.ArregloID -1].nombre;
                */
    },
  }
}
</script>