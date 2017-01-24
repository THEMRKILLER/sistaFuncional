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
          <a class="navbar-brand"><img src="../assets/img/logo2.png" class="img-responsive" style="width: 140px; margin-top: -16px;"></a>
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
          </ul>          
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <br>
    <div class="container" style="margin-top: 10px; margin-left: 250px; width: 800px;">
    <br>
    <div class="card">            
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" style="margin-left:1px; width: 250px;">
            <div class="" style="margin-left: 300px; margin-top: -220px; width:500px;">
            <label>Usuario</label>
            <br>            
            <label style="color: #A4A4A4">usuario@gmail.com</label>
            <br>
            <label>0123456789ABCDE</label>
            <br>
            <label>Cédula profesional</label>
            <br>
            <button class="btn btn-default" style="margin-left: 0px; margin-top: 50px;" data-toggle="modal" href="#profileEdition">Editar perfil</button>
            </div>            
    </div>

    <!-- MODAL EDICION PERFIL -->
    <div id="profileEdition" class="modal fade">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <label class="modal-title">Edita tu perfil</label>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="profileCard">
                    <div class="croppie-container" id="upload-demo">
                    <!--
                        <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" style="margin-left:1px; width: 100px;">
                        -->
                    </div>
                        <!--
                        <div class="" style="margin-left: 130px; margin-top: -120px; width:350px;">
                            <label>Nombre</label>
                            <input class="form-control" type="text" id="newName">
                            <label>Contraseña</label>
                            <input class="form-control" type="text" id="newPass">
                            <label>Escribe otra vez tu contraseña</label>
                            <input class="form-control" type="text" id="newPassValidation">
                            <label>Cédula profesional</label>
                            <input class="form-control" type="text" id="newCedula">
                        </div> -->
                        <input type="file" id="upload" value="" style="margin-left:-20px; margin-top: 10px;" accept="image/*">
                    </div>                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Guardar cambios</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>  
</div>


</template>



<script>
import '../assets/js/croppie.js';
import '../assets/css/croppie.css'
    export default {    	
    	data(){
    		return	{
    				msg: 'ok',
                    user : null,

    			}         
    	   },
           mounted(){
            this.cropImage();
            this.fetchDatas();
           },
           methods: {
                cropImage: function(){
                    var uploadCrop = $('#upload-demo').croppie({
                    enableExif: true,
                    viewport: {
                        width: 200,
                        height: 200,
                        type: 'circle'
                    },
                    boundary: {
                        width: 300,
                        height: 300
                    }
                });
                },
                fetchDatas : function(){
                    var thisObj = this;
                    this.$http.get('user_info',{params : {'user_id' : this.$store.state.calendario_id}}).then(
                        //success
                        function(response){
                            thisObj.user = response.data;
                            console.log("Success ! ");
                        },
                        //error
                        function(response){

                            switch(response.status)
                            {
                                case 404 : {
                                    //este error se produce cuando el usuario que se está 
                                    //solicitando no existe
                                }break;
                                case 500 : {
                                    //esto se produce cuando se produjo un error de servidor
                                }break;
                                default : {
                                    //otro error inesperado
                                } break;
                            }

                        }
                        );
                }
            }
    }
</script>