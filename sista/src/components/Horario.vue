<style>
.hora_dia{
	display: inline-block;
}

</style>
<template>

<div id="horario_root">

<h4>Dias laborales : </h4>

<div id="dias_semana">
	<div v-for="dia in dias">
 		<input type="checkbox" :name="dia.nombre" v-model="dia.laboral" :value="dia.dia"/> {{dia.nombre}}
	</div>
</div>

<h4>Horario: </h4>

<h3>De: </h3>

<select v-model="hora_inicial">
<option v-for="n in range(0,23)">{{ n }}</option>
</select>

<h3>A: </h3>
<select v-model="hora_final">
<option v-for="h in range(hora_inicial,23)">{{ h }}</option>
</select>

inicial : {{hora_inicial}}
final :  {{hora_final}}
<div v-for="dia in dias">
	<div v-if="dia.laboral" >
		DIA : {{dia.nombre}}
		<div class="hora_dia" v-for="hora in dia.horas">
			<div v-if="dia.full">
				{{hora.hora}} <input type="checkbox" v-model="hora.disponible" :value="hora.hora" readonly="true"/> 
					{{habilitarHoras(hora)}}
			</div>
			<div v-else>

				{{hora.hora}} <input type="checkbox" v-if="enArreglo(dia.horas_s,hora.hora)"  v-model="hora.disponible" :value="hora.hora" />
				<input type="checkbox" v-else  v-model="hora.disponible" :value="hora.hora"/>
			</div>
		</div>
		Todo el día <input type="checkbox" v-model="dia.full"> 

 		
	</div>
	
	
</div>

<button class="btn btn-primary" v-on:click="actualizarDiasHabiles">Actualizar días hábiles</button>



</div>



</template>


<script>
export default {
  name: 'horario',
  mounted(){
  	this.fetchDatas();

  },
  data () {
    return {
    		hora_inicial : 7,
    		hora_final : 20,
    		hora_inicial_bind : [],
      		dias : [

      				{
      					nombre : 'Lunes',
      					dia: 1,
      					laboral : false, 
      					full : false,
      					horas : [],
      					horas_s : []
      				},

      				{
      					nombre : 'Martes',
      					dia: 2,
      					laboral : false, 
      					full : false,
      					horas : [],
      					horas_s : []
      				},

      				{
      					nombre : 'Miercoles',
      					dia: 3,
      					laboral : false, 
      					full : false,
      					horas : [],
      					horas_s : []
      				},

      				{
      					nombre : 'Jueves',
      					dia: 4,
      					laboral : false, 
      					full : false,
      					horas : [],
      					horas_s : []
      				},

      				{
      					nombre : 'Viernes',
      					dia: 5,
      					laboral : false, 
      					full : false,
      					horas : [],
      					horas_s : []
      				},

      				{
      					nombre : 'Sábado',
      					dia: 6,
      					laboral : false, 
      					full : false,
      					horas : [],
      					horas_s : []
      				},

      				{
      					nombre : 'Domingo',
      					dia: 7,
      					laboral : false, 
      					full : false,
      					horas : [],
      					horas_s : []
      				},


      				
      			  ]
    }
  },
  methods : {
  	//habilita una hora y se llama desde el template
  	habilitarHoras : function(hora){
  		hora.disponible = true;
  	},
  	enArreglo : function(horas,hora){
  		  return horas.indexOf(hora) > -1 ? true : false;

  	},
  	actualizarDiasHabiles : function(){
  		var data = {'dias':this.dias,'hora_inicio' : this.hora_inicial, 'hora_final' : this.hora_final};
  		this.$http.post('dias_habiles?token='+localStorage.getItem('token'),data).then(
  			function(response){
  				console.log(response.data);
  			},
  			function(response){
  				console.error(response.data);
  			}

  			);
  	},
  	
  	fetchDatas : function(){

  		var objThis = this;
  		this.updateHorasRange();

  		this.$http.get('dias_habiles',{params: {'calendario' : this.$store.state.calendario_id }}).then(
  			//success
  			function(response){
  				var dias_disponibles = response.data;
  				for (var i = 0; i < dias_disponibles.length; i++)
  				{
  					var dia = objThis.buscarPorDia(dias_disponibles[i].dia);
  					this.updateHorasDisponibildad(dia,dias_disponibles[i].horas);
  				}
  			},
  			function(response){}
  			//error
  			);
  	},
  	buscarPorDia : function(dia)
  	{

  		var diaObj = $.grep(this.dias, function(e){ return e.dia == dia; });
  		if (diaObj.length == 0){
  			return null;
  		}
  		else{
  			return diaObj[0];
  		}

  	},
  	range : function(start,end){
  		start = parseInt(start);
  		end = parseInt(end);
  		var range = [];
  		for(start; start <=end; start++) range.push(start);
  		return range;
  	},
  	rangeDisp : function(start,end,horas)
  	{
  		start = parseInt(start);
  		end = parseInt(end);
  		for(start; start <=end; start++) 
  			if(!this.buscarPorHora(start,horas)) horas.push({'hora' : start , 'disponible' : false});
  		return horas;
  	},
  	buscarPorHora: function(hora,horas){
  		for (var i = 0; i < horas.length; i++)
  				if(horas[i].hora == hora ) return true;
  		return false;
  	},
  	updateHorasDisponibildad : function(diaObj,horas_server){
  				var objThis = this;
  				var horasDefault = diaObj.horas;
  				var flag = false;
  				for (var i = 0; i < horas_server.length; i++) 
  				{
  				 	for (var j = 0; j < horasDefault.length; j++)
  						{
  							if(horasDefault[j].hora == horas_server[i] )
  							{
  									horasDefault[i].disponible = true;
  									flag = true;
  									break;
  							}
  						}
  					if(flag) diaObj.laboral = true;
  					flag = false;
  				}
  	},
  	updateHorasRange :function(){
  		var objThis = this;
  		for (var i = 0; i < objThis.dias.length; i++) {

  			objThis.dias[i].horas =  this.rangeDisp(objThis.hora_inicial,objThis.hora_final,objThis.dias[i].horas);

  		};
  	}
  },

  watch : {
  	'hora_inicial'  : function(){
  		this.updateHorasRange();
  	},
  	'hora_final'  : function(){
  		  		this.updateHorasRange();
	
  	}

  }
}
</script>