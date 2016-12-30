<template>
	<div class="articulo_root">
		<div v-if="articulonotfound">
			<articulonotfound></articulonotfound>
		</div>

		<div v-else>
			<div v-if="articulo">
				<h1>{{articulo.titulo}}</h1>
				<h3>Por : {{autor.name}}</h3>
				<p>
				{{articulo.resumen}}
				</p>
				<div v-html="articulo.contenido"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'redactador',
 
  data () {
    return {
      articulo : [],
      autor : [],
      articulonotfound : false
    }
  },
  mounted(){
            console.log("Woooo");
  			this.fetchDatas();
    	},
  methods : {
  	fetchDatas: function(){

  		this.$http.get('articulo/'+this.$route.params.id).then(
  			//success
  			function(response){
  				this.articulo = response.data.articulo;
  				this.autor = response.data.autor;
  			},
  			//error
  			function(response){
  				console.error("Error :(");
  					switch(response.status)
  					{
  						case 404: this.articulonotfound = true;
  						break;

  					}
  			});
  	}
  }
}
</script>