<template>

<div id="cupones_root">


<!-- Trigger the modal with a button -->
<button type="button" class="btn btn-info" data-toggle="modal" data-target="#modalCupon">Agregar cupon</button>

<!-- Modal -->
<div id="modalCupon" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Nuevo cupon de descuento</h4>
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
                <label for="fecha_inicial" class="form-control-label">A partir de:</label>
                <input type="text" id="fecha_inicial" class="form-control" :value="fecha_inicial">
        </div>
        <div class="form-group">             
                <label for="fecha_final" class="form-control-label">Hasta el:</label>
                <input type="text" id="fecha_final" class="form-control" :value="fecha_final">
        </div>

      </div>
      <div class="modal-footer">
      	<button class="btn btn-success" v-on:click="enviarCupon">Crear cupón</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
    </div>

  </div>
</div>


{{cupones}}
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
      porcentaje : null
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
  		    this.$http.get('tipo',{params : {'calendario_id' : this.$store.state.calendario_id}}).
  		    then(

  		    	//success
  		    	function(response){
  		    		this.servicios = response.data;

  		    	},
  		    	//error
  		    	function(response){
  		    		console.error("Ocurrio un error :( codigo de estado : "+ response.status);
  		    	}
  		    	);
  	},
  	enviarCupon : function(){
  		var vm = this;
  		var datas = {'servicio_id' : this.servicio_selected, 'porcentaje' : this.porcentaje, 'fecha_inicial' : this.fecha_inicial, 'fecha_final' : this.fecha_final};

  		this.$http.post('cupon',datas).then(
  			//success
  			function(response){
  				console.log("Cupon creado correctamente ! ");
  				vm.fetchDatas();

  			},
  			//error
  			function(response){
  				console.error("Error creando el cupon :( , codigo de estado : " + response.status);
  			}

  			);
  	}
  }
}
</script>