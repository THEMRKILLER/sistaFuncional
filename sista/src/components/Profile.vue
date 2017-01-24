<style>
    @import url('http://t4t5.github.io/sweetalert/dist/sweetalert.css');
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
        <a type="button" data-toggle="modal" href="#photoEdition">
            <img id="profile-img" class="profile-img-card" :src="profileImage" style="margin-left:1px; width: 250px;">
        </a>
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
    <div id="photoEdition" class="modal fade">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <label class="modal-title vanilla-result">Selecciona tu foto de perfil</label>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="profileCard">
                    <div class="croppie-container" id="result">
                    <div id="vanilla-demo"></div>
                    </div>
                        <input type="file" id="files" v-on:change="onFileChange" style="margin-left:-20px; margin-top: 10px;" accept="image/*">
                    </div>                    
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-primary sendDta">Guardar cambios</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>  

    <!-- MODAL EDICION DATOS USUARIOS -->
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
                        <div class="" style="margin-left: 90px; margin-top: -10px; width:350px;">
                            <label>Nombre</label>
                            <input class="form-control" type="text" id="newName" v-model="editName">
                            <label>Correo elecrónico</label>
                            <input class="form-control" type="text" id="newEmail" v-model="editEmail">
                            <label>Contraseña</label>
                            <input class="form-control" type="text" id="newPass">
                            <label>Escribe otra vez tu contraseña</label>
                            <input class="form-control" type="text" id="newPassValidation">
                            <label>Cédula profesional</label>
                            <input class="form-control" type="text" id="newCedula" v-model="editCedula">
                        </div>                        
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


<script src="http://t4t5.github.io/sweetalert/dist/sweetalert-dev.js"></script>
<script>
import '../assets/css/croppie.css';
import '../assets/js/croppie.js';
import '../assets/js/jquery.min.js';
    export default {    	
    	data(){
    		return	{
    				msg: 'ok',
                    user : null,
                    img_selected : '',
                    croppie_obj : null,
                    editName: '',
                    editPassword: '',
                    editPassword2: '',
                    editCedula: '',
                    editEmail: '',
                    profileImage: ''
    			}         
    	   },
           mounted(){
            this.fetchDatas();            
            this.demoVanilla();
           },
           methods: {

            onFileChange : function (e) {
              var thisObj = this;
              var files = e.target.files || e.dataTransfer.files;
              if (!files.length)
                return;

              this.createImage(files[0]);

            },
            createImage : function(file) {
              
              var image = new Image();
              var reader = new FileReader();

              var vm = this;


              reader.onload = (e) => {
                vm.img_selected = e.target.result;
                 vm.croppie_obj.bind({
                url: vm.img_selected,
                orientation: 1
            });

              };
              reader.readAsDataURL(file);
    },
         
            demoVanilla: function() {
                var thisObj = this;

                var vanillaResult = document.querySelector('.vanilla-result');
                var vanillaSend = document.querySelector('.sendDta');
                this.croppie_obj = new Croppie(document.getElementById('vanilla-demo'), {
                viewport: {
                width: 100,
                height: 100,
                type: 'circle'
            },
                boundary: {
                    width: 300,
                    height: 300
                },
                enableOrientation: true
            });

            this.croppie_obj.bind({
                url: '',
                orientation: 1
            });
            vanillaResult.addEventListener('click', function() {
                thisObj.croppie_obj.result('canvas').then(resultVanilla);
            });
            vanillaSend.addEventListener('click', function(){
                thisObj.croppie_obj.result('blob').then(function(blob){
                    console.log(blob);
                });
            });
        },

            resultVanilla: function(result) {
                swal({
                    title: '',
                    html: true,
                    text: '<img src="' + result + '" />',
                    allowOutsideClick: true
                });
            },
            sendImage: function(){

            },
                fetchDatas : function(){
                    var thisObj = this;
                    this.$http.get('user_info',{params : {'user_id' : this.$store.state.calendario_id}}).then(
                        //success
                        function(response){
                            thisObj.user = response.data;
                            //console.log("Success ! ");
                            console.log(thisObj.user);
                            this.editName = thisObj.user.nombre;
                            this.editCedula = thisObj.user.cedula_profesional;
                            this.editEmail = thisObj.user.correo_electronico;
                            if(thisObj.user.avatar == null){
                                this.profileImage = "//ssl.gstatic.com/accounts/ui/avatar_2x.png";
                            }
                            else{
                                this.profileImage = thisObj.user.avatar;
                            }
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