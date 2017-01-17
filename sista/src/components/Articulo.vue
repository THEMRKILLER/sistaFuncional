<style>
  
  * {
  margin:0;
  padding:0;
}
  
header {
  /*margin-top:10px;*/
    width: 100%;
    overflow: hidden;
    /*height: 150px;*/
    /*position: relative;*/
}
 
nav {
    top:-20px;
    position: absolute;
    left:0;
    right:0;
  /*margin:20px auto;*/
  /*max-width:1000px;*/
  /*width:90%;*/
}
 
nav ul {
  list-style:none;
}
 
nav > ul {
  display:table;
  /*Quitamos el overflow hidden que estaba aqui*/
  width:100%;
  background:#000;
  position:relative;
}
 
nav > ul li {
  display:table-cell;
}
 
/*Sub-menu*/
nav > ul > li:hover > ul {
  display:block;
  height:100%;
}
 
nav > ul > li > ul {
  display:block;
  position:absolute;
  background:#000;
  left:0;
  right:0;
  overflow:hidden;
  height:0%;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}
 
nav > ul li a {
  color:#fff;
  display:block;
  line-height:20px;
  padding:20px;
  position: relative;
  text-align:center;
  text-decoration:none;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}
 
nav > ul > li > ul > li a:hover {
  background:#5da5a2;
}
 
nav > ul > li > a span {
  background:#174459;
  display:block;
  height:100%;
  width:100%;
  left:0;
  position:absolute;
  top:-55px;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}
 
nav > ul > li > a span .icon {
  display:block;
  line-height:60px;
}
 
nav > ul > li > a:hover > span {
  top:0;
}
 
/*Colores*/
nav ul li a .primero {
  background:#0e5061;
}
 
nav ul li a .segundo {
  background:#5da5a2;
}
 
nav ul li a .tercero {
  background:#f25724;
}
</style>
<template>
	<!-- 
<div v-if="articulo">
        <h1>{{articulo.titulo}}</h1>
        <h3>Por : {{autor.name}}</h3>
        <p>
        {{articulo.resumen}}
        </p>
        <div v-html="articulo.contenido"></div>
      </div>
   -->
  <div id="articulo_root">
    <div v-if="articulonotfound">
      <articulonotfound></articulonotfound>
    </div>
    <div v-else>
    <header>
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
            <li class="active"><a href=""><span class="primero"><li class=""></li></span> Inicio</a></li>
            <li><a href="#redactar"><span class="segundo"><li class=""></li></span> Crear Articulo</a></li>
            <li><a href="#articulos"><span class="segundo"><li class=""></li></span> Articulos</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</header>
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
                                <a href="#" class="blog-item-more left"><i class="fa fa-angle-left"></i>&nbsp;Prev post</a>
                                <a href="#" class="blog-item-more right">Next post&nbsp;<i class="fa fa-angle-right"></i></a>
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
                                            <a href=""><img src="../assets/img/user-avatar.png" alt="" class="widget-posts-img img-circle" /></a>
                                            <div class="widget-posts-descr">
                                                <a href="#" title="">Usuario</a>
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
      articulonotfound : false
    }
  },
  mounted(){
  			this.fetchDatas();
        /*$(window).scroll(function(){
        posicionarMenu();
        });*/
              
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