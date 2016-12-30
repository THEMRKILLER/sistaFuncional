<template>

<div id="horario_root">

<h4>Dias laborales : </h4>

<div id="dias_semana">

<div v-if="dias">
	<div v-for="dia in dias">
 		<input type="checkbox" :name="dia.nombre" v-model="dia.laboral"/> {{dia.nombre}}
	</div>
</div>

</div>




</div>



</template>


<script>
export default {
  name: 'hoario',
  data () {
    return {
      		dias : [

      				{
      					nombre : 'Lunes',
      					laboral : false, 
      					horas : []
      				},

      				{
      					nombre : 'Martes',
      					laboral : false, 
      					horas : []
      				},

      				{
      					nombre : 'Miercoles',
      					laboral : false, 
      					horas : []
      				},

      				{
      					nombre : 'Jueves',
      					laboral : false, 
      					horas : []
      				},

      				{
      					nombre : 'Viernes',
      					laboral : false, 
      					horas : []
      				},

      				{
      					nombre : 'Sábado',
      					laboral : false, 
      					horas : []
      				},

      				{
      					nombre : 'Domingo',
      					laboral : false, 
      					horas : []
      				},


      				
      			  ]
    }
  },
  methods : {
  	fetchDatas : function(){

  	}
  }
}
</script>