<style>
.caratula{
	width: 40%;
	height: 40%;
}
</style>
<template>

<div id="articulos_root">
	<div v-for="articulo in articulos">
		<strong>{{articulo.titulo}}</strong>	
		<br>
		<small>{{articulo.resumen}}</small>
		<br>
		<img :src="articulo.caratula" class="caratula">	
	</div>


</div>

</template>

<script>
export default {
  name: 'articulos',
  data () {
    return {
    	articulos : [],
    	error : false
    }
  },
  mounted(){
  	this.fetchDatas();
  },
  methods:{
  	fetchDatas : function(){
  		this.$http.get('articulos?token='+localStorage.getItem('token')).then(
  			//success
  			function(response){
  				this.articulos = response.data;
  			},
  			//error
  			function(response){
  				console.error("Error :( ");
  				switch(response.status){
  					case 500 : {
  						this.error = true;
  					}break;
  				}
  			}

  			);
  	}
  }
}
</script>