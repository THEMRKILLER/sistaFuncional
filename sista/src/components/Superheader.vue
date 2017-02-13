<template>
<div style="position: relative;" id="superheader_root">

 <nav class="navbar navbar-default navbar-fixed-top" id="header-nav" v-if="$store.state.user">
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
            <li class="nav-item">
              <router-link to="/articulos">Artículos</router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/dashboard">Citas</router-link>
            </li>
            <div style="margin-top: 10px; margin-left: 790px;">
              <li class="dropdown">
                <a type="button" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#">
                  <img id="profile-img" class="profile-img-card img-responsive" :src="$store.state.user.avatar" style='width:15%;'>
                </a>
                <ul class="dropdown-menu" style="border: 1px; width: 270px; margin-top: 10px;">
                  <div class="container">                  
                    <img id="profile-img" class="profile-img-card img-responsive"  style='width:7%; margin-left: 0px; margin-top: 10px;'>
                    <div style="margin-left: 120px; margin-top: -80px;" id="userName">
                      <label style="margin-left: -23px;">
                        {{$store.state.user.name}}
                      </label><br>
                      <label style="margin-left: -20px; font-size:10px; color: #A4A4A4">
                      {{$store.state.user.email}}
                      </label>
                    </div>                    
                    <label style="margin-top: 20px;"> <router-link to="/profile">Editar Perfil</router-link></label>                    
                  </div>
                  <hr style="margin-top:5px;">
                  <div style="margin-left: 170px;">
                    <button class="btn btn-default" style="margin-top: -10px; font-size:10px;height:30px;" role="button" v-on:click="closeSesion">Cerrar sesión</button>
                  </div>
                </ul>
              </li>
            </div>

          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</div>
</template>

<script>
export default {
  name: 'superheader',
  data () {
    return {
    }
  },
  watch: {
    // call again the method if the route changes
    '$store.state.user' : function(){
      var vm = this;
      setTimeout(function() {
        vm.$store.commit('onresize');
      }, 30);
    }

  },
  mounted()
  {



  },

  methods : {
    
  
  	closeSesion: function()
    {
              var vm = this;
              vm.$store.commit('logout', {
                    vm: vm
              });
              
    }
  }
}
</script>

