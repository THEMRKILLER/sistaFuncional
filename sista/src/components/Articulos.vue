<template>

<div id="articulos_root">

  <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><img src="../assets/img/logo2.png" class="img-responsive" style="width: 140px; margin-top: -16px;"></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="#Home">Inicio</a></li>
            <li><a href="#redactar">Crear Articulo</a></li>
            <li class="active"><a href="">Articulos</a></li>            
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

            <!-- Blog Section -->
            <section class="page-section" id="news">
                <div class="container relative">
                    
                    <h2 class="section-title font-alt align-left mb-70 mb-sm-40">
                        Latest News
                        
                        <a href="blog-classic-sidebar-right.html" class="section-more right">All News in our blog <i class="fa fa-angle-right"></i></a>
                        
                    </h2>
                    
                    <div class="row multi-columns-row">
                        
                        <!-- Post Item -->
                        <div v-for="articulo in articulos"  class="col-sm-6 col-md-4 col-lg-4 mb-md-50 wow fadeIn" data-wow-delay="0.1s" data-wow-duration="2s">
                        <div class="panel panel-default">
                          <div class="panel-body">
                            
                            <div class="post-prev-img">
                                <a href="blog-single-sidebar-right.html"><img :src="articulo.caratula" alt="" /></a>
                            </div>
                            
                            <div class="post-prev-title font-alt">
                                <a href="">{{articulo.titulo}}</a>
                            </div>
                            
                            <div class="post-prev-info font-alt">
                                <a href="">John Doe</a> | 10 December
                            </div>
                            
                            <div class="post-prev-text">
                                {{articulo.resumen}}
                            </div>
                            
                            <div class="post-prev-more">
                                <a href="" class="btn btn-mod btn-gray btn-round">Leer màs<i class="fa fa-angle-right"></i></a>
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