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
            <li class="nav-item">
              <router-link to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/settings">Configuración</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/redactar">Nuevo artículo</router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/articulos">Artículos</router-link>
            </li>
            <div style="margin-top: 10px; margin-left: 790px;">
              <li class="dropdown">
                <a type="button" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#">
                  <img id="profile-img" class="profile-img-card img-responsive" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" style='width:15%;'>
                </a>
                <ul class="dropdown-menu" style="border: 1px; width: 270px; margin-top: 10px;">
                  <div class="container">                  
                    <img id="profile-img" class="profile-img-card img-responsive" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" style='width:7%; margin-left: 0px; margin-top: 10px;'>
                    <div style="margin-left: 120px; margin-top: -80px;" id="userName">
                      <label style="margin-left: -23px;">
                        Usuario
                      </label><br>
                      <label style="margin-left: -20px; font-size:10px; color: #A4A4A4">
                      usuario@prueba.com
                      </label>
                    </div>                    
                    <label style="margin-top: 20px;"><a style="font-size: 12px; margin-left: 8px;" data-toggle="modal" href="#profileEdition">Editar perfil</a></label>                    
                  </div>
                  <hr style="margin-top:5px;">
                  <div style="margin-left: 170px;">
                    <button class="btn btn-default" style="margin-top: -10px; font-size:10px;height:30px;" role="button">Cerrar sesión</button>
                  </div>
                </ul>
              </li>
            </div>
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
                                <a href="">John Doe</a> | 10 December
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
    goArticulo : function(id){
      this.$router.push('articulo/'+id);
    }

  }
}
</script>