<template>
<div id="fechas_inhabiles_root">

	<button class="btn btn-primary" data-toggle="modal" data-target="#fecha_inhabil_modal">Agregar Fecha Inhabil</button>

	{{fechas_inhabiles}}


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

  </div>
</div>


</div>


</template>

<script>
export default {
  name: 'fecha_inhabil',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
  }
}
</script>