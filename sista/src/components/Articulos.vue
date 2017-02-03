<template>

<div id="articulos_root">

  
            <!-- Blog Section -->
            <section class="page-section" id="news">
                <div class="container relative">
                    
                    <h2 class="section-title font-alt align-left mb-70 mb-sm-40">
                        Latest News
                        
                        <a href="blog-classic-sidebar-right.html" class="section-more right">All News in our blog <i class="fa fa-angle-right"></i></a>
                        
                    </h2>
                    
                    <div class="row multi-columns-row">
                        
                        <!-- Post Item -->
                        <div v-for="articulo in articulos"  v-on:click="goArticulo(articulo.id)" class="col-sm-6 col-md-4 col-lg-4 mb-md-50 wow fadeIn" data-wow-delay="0.1s" data-wow-duration="2s">
                        <div class="panel panel-default">
                          <div class="panel-body">
                            
                            <div class="post-prev-img">
                               <img :src="articulo.caratula" alt="" />
                            </div>
                            
                            <div class="post-prev-title font-alt">
                                <a href="">{{articulo.titulo}}</a>
                            </div>
                            
                            <div class="post-prev-info font-alt">
                                <a href="">{{articulo.autor}}</a> | {{convertirFecha(articulo.fecha.date)}}
                            </div>
                            
                            <div class="post-prev-text">
                                {{articulo.resumen}}
                            </div>
                            
                            <div class="post-prev-more">
                                <a  class="btn btn-mod btn-gray btn-round">Leer màs<i class="fa fa-angle-right"></i></a>
                            </div>
                            
                        </div>
                        <!-- End Post Item -->
                        </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            <!-- End Blog Section -->
            
           
</div>

</template>


<script>

import 'assets/css/styleArt.css';

export default {
  name: 'articulos',
  data () {
    return {
    	articulos : [],
      hora: [],
    	error : false
    }
  },
  mounted(){
  	this.fetchDatas();
  },
  methods:{
  	fetchDatas : function(){
  		this.$http.get('articulos').then(
  			//success
  			function(response){
  				this.articulos = response.data;
          this.$store.articulos = response.data.articulos;    
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
  	},
    convertirFecha: function(fecha){
      moment.lang('es');
      return moment(fecha, "YYYYMMDD").fromNow();
    },

    goArticulo : function(id){
      this.$router.push('articulo/'+id);
    }

  }
}
</script>