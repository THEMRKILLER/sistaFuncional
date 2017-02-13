<style>
/*
    background: rgba(78,144,254,.7);
    bottom: 0;
    color: #fff;
    font-size: 9px;
    font-weight: bold;
    left: 0;
    line-height: 9px;
    position: absolute;
    padding: 7px 0;
    text-align: center;
    width: 96px;
*/
    #changeIt{
        position: absolute;
        padding: 7px 0px;
        opacity: 0.5;        
        width: 176px;
        height: 35px;
        left: 375px;
        bottom: 260px;
    }

    .profile-img-container {
    position: relative;
    display: inline-block; /* added */
    overflow: hidden; /* added */
}

.profile-img-container:hover a {
    opacity: 1; /* added */
    top: 0; /* added */
    z-index: 500;


}

.profile-img-container:hover img{
  opacity: 0.5;
}


/* added */
.profile-img-container a {
    display: block;
    position: absolute;
    top: -100%;
    opacity: 0;
    left: -335px;
    bottom: -145px;
    right: 0;
    text-align: center;
    color: inherit;
}
</style>
<template>
	
<div>
	<br>
    <div class="container" style="margin-top: 10px; margin-left: 250px; width: 800px;" v-if="$store.state.user">
    <br>

    <div class="card" style="height:370px;">
        <div class="profile-img-container">
            <img id="profile-img" class="img-thumbnail img-circle img-responsive" :src="$store.state.user.avatar" style="width:250px;">
            <a type="button" data-toggle="modal" href="#photoEdition">
            <div id="changeIt" class="btn-lg">
                <i class="fa fa-camera fa-6" aria-hidden="true"></i>
            </div>                
            </a>
        </div>

    <div>
        <div class="" style="margin-left: 300px; margin-top: -220px; width:500px;">
            <label>{{$store.state.user.name}}</label>
            <br>            
            <label style="color: #A4A4A4">{{$store.state.user.email}}</label>
            <br>
            <label>Cédula profesional</label>
            <br>
            <label style="color: #A4A4A4">{{$store.state.user.cedula_profesional}}</label>
            <br>            
            <button class="btn btn-default" style="margin-left: 0px; margin-top: 50px;" data-toggle="modal" href="#profileEdition">Editar perfil</button>
        </div>            
    </div>
<!--  
<span>
    <div class="avatar-overlay velocity-animating" style="opacity: 0.45649;">
        <span class="icon icon-camera-light"></span>
            <div class="avatar-overlay-text">Cambiar foto de perfil</div>
    </div>
        </span>
-->    
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
                    <button type="button" class="btn btn-primary sendDta" v-on:click="sendImage">Guardar cambios</button>
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
                    <label class="modal-title" align="center">Editar Información</label>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ul class="nav nav-tabs">
                        <li class="active" v-on:click="tabCambioOpcion(1)"><a data-toggle="tab" href="#basica">Información Básica</a></li>
                        <li v-on:click="tabCambioOpcion(2)"><a data-toggle="tab" href="#password">Contraseña</a></li>
                    </ul>
                    <div class="tab-content">
                        <!--Información básica como nombre,email, etc-->
                        <div id="basica" class="tab-pane fade in active profileCard">
                            <div style="margin-left: 90px; margin-top: -10px; width:350px;">
                                <label>Nombre</label>
                                <input class="form-control" type="text" id="newName" v-model="$store.state.user.name">
                                <label>Correo elecrónico</label>
                                <input class="form-control" type="text" id="newEmail" v-model="$store.state.user.email">
                                
                                <label>Cédula profesional</label>
                                <input class="form-control" type="text" id="newCedula" v-model="$store.state.user.cedula_profesional">
                            </div>                        
                        </div >

                        <div id="password" class="tab-pane fade profileCard">
                            <div style="margin-left: 90px; margin-top: -10px; width:350px;">
                                <label>Contraseña Actual</label>
                                <input class="form-control" type="password" v-model="oldPass" :disabled="password_disabled ? true : false">
                                <label>Nueva Contraseña</label>
                                <input class="form-control" type="password" v-model="newPass1" :disabled="password_disabled ? true : false">
                                <label>Repetir Nueva Contraseña</label>
                                <input class="form-control" type="password" v-model="newPass2" :disabled="password_disabled ? true : false">

                            </div>                        
                        </div >



                    </div>
                                      
                </div>
                <div class="modal-footer">
                    <div v-if="taboptions == 1">
                        <button type="button" class="btn btn-primary" v-if="taboptions == 1" v-on:click="actualizarInformacion">Guardar cambios</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                    <div v-if="taboptions == 2">
                        <div v-if="password_actualizando" class="alert alert-info">
                        <h4>
                            Cambio en curso ... 
                            <i class="fa fa-refresh fa-spin fa-1x fa-fw"></i>
                        </h4>
                    </div>

                    <div v-if="password_success" class="alert alert-success">
                        <h4>
                            Contraseña correctamente cambiada
                            <i class="fa fa-check"></i>
                        </h4>
                    </div>

                    <div v-if="password_error" class="alert alert-danger" align="center">
                        <h4>
                            Ocurrio uno o más errores creando la contraseña <i class="fa fa-times"></i>
                            <ul>
                                <li v-for="error_s in password_error_message">
                                    <p v-for="suberror in error_s">{{suberror}}</p>
                                </li>
                            </ul>
                            
                        </h4>
                    </div>

                    <button type="button" class="btn btn-primary" v-if="taboptions == 2" v-on:click="actualizarPassword">Actualizar Contraseña</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                  </div>

                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
    </div>
</div>
</div>

</template>


<script>
import '../assets/css/croppie.css';
import '../assets/js/croppie.js';
import '../assets/js/jquery.min.js';
    export default {    	
    	data(){
    		return	{
    				msg: 'ok',
                    user : [],
                    img_selected : '',
                    croppie_obj : null,
                    oldPass : '',
                    newPass1: '',
                    newPass2: '',
                    password_disabled : false,
                    taboptions : 1,
                    password_actualizando : false, 
                    password_success : false,
                    password_error : false,
                    password_error_message : []
                   
    			}         
    	   },
           mounted(){
            if(this.$store.state.calendario_id != null) this.demoVanilla();
           },
            watch : {
                '$store.state.calendario_id': function()
            {
                var vm = this;
                if(this.$store.state.calendario_id != null) {
                    setTimeout(function() {
                        vm.demoVanilla();
                    }, 10);
                }
            }
            },
           methods: {

            onFileChange : function (e) {
              var thisObj = this;
              var files = e.target.files || e.dataTransfer.files;
              if (!files.length)
                return;

              this.createImage(files[0]);

            },
            tabCambioOpcion : function(opcion){
                this.taboptions = opcion;
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
                 if(this.$store.state.calendario_id === null)return; 
                var vm = this;

                var vanillaResult = document.querySelector('.vanilla-result');
                var vanillaSend = document.querySelector('.sendDta');
                vm.croppie_obj = new Croppie(document.getElementById('vanilla-demo'), {
                viewport: {
                width: 200,
                height: 200,
                type: 'circle'
            },
                boundary: {
                    width: 300,
                    height: 300
                },
                enableOrientation: true
            });

            vm.croppie_obj.bind({
                orientation: 1
            });
       

          
        },
        actualizarInformacion : function(){},
        actualizarPassword : function(){
            var vm = this;
            vm.password_disabled = true;
            vm.password_actualizando = true;
            vm.password_success = false;
            vm.password_error = false;
            vm.password_error_message = [];
            var datas  = {'current-password' : vm.oldPass , 'password' : vm.newPass2 , 'password_confirmation' : vm.newPass2};

            vm.$http.put('password',datas).then(
                //success
                function(response){
                    vm.password_actualizando = false;
                    vm.password_success = true;
                    vm.password_disabled = false;


                },
                //success
                function(response){
                    console.log(response.data);
                    vm.password_actualizando = false;
                    vm.password_error = true;
                    if(response.status == 400)vm.password_error_message = response.data.errors;
                    vm.password_disabled = false;

                }

                );


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
                var thisObj = this;
                  this.croppie_obj.result('canvas').then(function(canvas){
                    var data = {'avatar' : canvas};
                    console.log(data);
                   thisObj.$http.put('avatar',data).then(
                        //success
                        function(response){
                            thisObj.user.avatar = response.data.avatar;
                            $("#photoEdition").modal('hide');
                            $.confirm({
                                  icon: 'fa fa-check',
                                    title: 'Correcto',
                                    content: 'Foto de perfil cambiado correctamente',
                                    type: 'green',
                                    typeAnimated: true,
                                    buttons: {
                                        ok : {
                                            text : 'Ok'
                                        }
                                    }
                                });                      


      },
                        //error
                        function(response){
                            console.error("Error avatar :(");
                        }

                        );
                });
                 
            }


            }
    }
</script>