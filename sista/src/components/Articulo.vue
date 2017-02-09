
<template>

  <div id="articulo_root" v-if="articulo" :key="articulo.id">
    <div v-if="articulonotfound">
      <articulonotfound></articulonotfound>
    </div>
    <div v-else>
      <section class="page-section">
                <div class="container relative" v-if="articulo">
                    
                    <div class="row">
                        
                        <!-- Content -->
                        <div class="col-sm-8">
                            
                            <!-- Post -->
                            <div class="blog-item mb-80 mb-xs-40">
                                
                                <!-- Text -->
                  <div class="blog-item-body">
                      
                                    <h1 class="mt-0 font-alt">{{articulo.titulo}}</h1>
                                
                      <div class="lead">
                                        <p>
                                            {{articulo.resumen}}
                                        </p>
                                    </div>
                                    <!-- End Text -->   
                                    
                                    <!-- Media Gallery -->
                                    <div class="blog-media mt-40 mb-40 mb-xs-30">
                                        <ul class="clearlist content-slider">                                          
                                        </ul>
                                    </div>
                                    <div v-html="articulo.contenido"></div>
                  </div>
                                <!-- End Text -->
                  
                </div>
                <!-- End Post -->
            
                            <!-- Prev/Next Post -->
                <div class="clearfix mt-40">
                  <a class="blog-item-more left" v-if="mostrarBotonAnt" v-on:click="irArticulo(articulo_id_ant)">
                    <i class="fa fa-angle-left"></i>&nbsp;Anterior
                  </a>
                  <a class="blog-item-more right" v-if="mostrarBotonNxt" v-on:click="irArticulo(articulo_id_nxt)"> Siguiente&nbsp;<i class="fa fa-angle-right"></i>
                  </a>
                </div>
                            <!-- End Prev/Next Post -->
                            
                        </div>
                        <!-- End Content -->
                        
                        <!-- Sidebar -->
                        <div class="col-sm-4 col-md-3 col-md-offset-1 sidebar">
                            <!-- Widget -->
                            <div class="widget articles">
                             <div class="panel panel-default" style="position: fixed; margin-right: 10px; margin-top: -100px;">
                             <div class="panel-body">
                                
                                <h5 class="widget-title font-alt">Acerca del autor</h5>
                                
                                <div class="widget-body">
                                    <ul class="clearlist widget-posts">
                                        <li class="clearfix">
                                            <a href=""><img :src="autor.avatar" alt="" class="widget-posts-img img-circle" /></a>
                                            <div class="widget-posts-descr">
                                                <a href="#" title="">{{autor.name}}</a>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. 
                                            </div>
                                        </li>
                                        
                                        
                                    </ul>
                                </div>
                                
                            </div>
                            <!-- End Widget -->                            
                        </div>
                        <!-- End Sidebar -->
                        </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            <!-- End Section -->
            
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
      articulo_id_nxt: '',
      articulosID: [],
      articulo_id_ant: '',
      mostrarBotonAnt: true,
      mostrarBotonNxt: true,
      articulonotfound : false
    }
  },
  mounted(){
  			this.fetchDatas();
        /*$(window).scroll(function(){
        posicionarMenu();
        });*/
              
    	},
      watch: {
    // call again the method if the route changes
    '$route': 'fetchDatas'
  },
  methods : {
    
  	fetchDatas: function(){
      var vm = this;
  		this.$http.get('articulo/'+this.$route.params.id, {progress(e) {
        if (e.lengthComputable) {
            //console.log("porcentaje: "+ (e.loaded / e.total * 100) );
            vm.$store.commit('aumentarPorcentaje', {
                        porcentaje: (e.loaded / e.total * 100)
                    });            
        }
            }}).then(
  			//success
  			function(response){
  				this.articulo = response.data.articulo;
          this.articulosID = response.data.articulos;
  				this.autor = response.data.autor;
          this.nextPrev();
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
  	},

    irArticulo: function(id){
      this.$router.push('./'+id);
    },

    nextPrev: function(){
                //ID DEL ARTICULO ACTUAL
                var idArticulo = this.articulo.id;
                //posición de ese articulo en el arreglo de articulos
                //articulo 1 se encuentra en posicion 0
                var posicion_arrayID = this.articulosID.indexOf(idArticulo, 0);
                //posicion anterior y siguiente
                this.articulo_id_nxt = this.articulosID[posicion_arrayID] + 1;
                this.articulo_id_ant = this.articulosID[posicion_arrayID] -1;
                this.mostrarBotonNxt = true;
                this.mostrarBotonAnt = true;
                if(this.articulo_id_ant < 1){
                  this.mostrarBotonAnt =false;
                  this.mostrarBotonNxt = true;
                }
                if(this.articulo_id_nxt > this.articulosID.length){
                  this.mostrarBotonNxt = false;
                  this.mostrarBotonAnt = true;
                }                
              }
            }
          }
</script>