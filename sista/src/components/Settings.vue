<style>
@import url(https://fonts.googleapis.com/css?family=Oswald);
  #ajHorario, #naviTabs{
  font-family: 'Oswald', sans-serif;
  }
  
  #tabla3{ 
   border: 1px solid #80A93E; 
   width: 200px; 
} 
#cabtab3{ 
   background-color: #B7F259; 
   font-weight: bold; 
   font-size: 8pt; 
   padding: 2 2 2 2px; 
} 
#cuerpotab3{ 
   font-size: 8pt; 
   padding: 4 4 4 4px; 
   background-color: #F5ECB9; 
} 
#cuerpotab3 ul{ 
   margin: 0 2 0 20px; 
   padding: 0 0 0 0px; 
} 
#cuerpotab3 li{ 
   margin: 0 2 0 2px; 
   padding: 0 0 0 0px; 
}

  
</style>

<template>

<div>
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
          <ul class="nav navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/">Inicio</router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/settings">Configuración</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/redactar">Nuevo artículo</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/articulos">Artículos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dashboard">Citas</router-link>
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
                    <label style="margin-top: 20px;"><a style="font-size: 12px; margin-left: 8px;" href="/profile">Editar perfil</a></label>                    
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
    <br><br><br>
    
<ul class="nav nav-tabs nav-justified">
      <li class="active"><a id="naviTabs" data-toggle="tab" href="#servicios" >Servicios</a></li>
      <li><a id="naviTabs" data-toggle="tab" href="#horarios" >Horarios</a></li>
      <li><a id="naviTabs" data-toggle="tab" href="#fechas_inhabiles" >Fechas Inhabiles</a></li>
  </ul>
  <div class="tab-content">
    <div id="servicios" class="tab-pane fade in active">
      <div class="panel panel-default">
      <div id="servicios" class="panel-heading">
        <h3>Servicios</h3>
    
        <servicios></servicios>
   
      </div>

      </div>
    </div>

    <div id="fechas_inhabiles" class="tab-pane fade">
      <div class="panel panel-default container">
        <div class="panel-body">
          <h3>Fechas Inhabiles</h3>
            <fechaInhabil></fechaInhabil>
        </div>
      </div>
    </div>
    <!-- segunda vista -->
    <div id="horarios" class="tab-pane fade">
      <div class="panel panel-default container" style="max-width: 800px;">
        <div class="panel-body">
          <h3 id="ajHorario">Horarios en el sistema</h3>
            <horario></horario>
        </div>
      </div>
    </div>
  </div>

</div>

</template>
<script>

export default {
  name: 'hello',
  data () {
    return {
    }
    
    },
    mounted(){
    },

    methods: {
      
    }
}
</script>