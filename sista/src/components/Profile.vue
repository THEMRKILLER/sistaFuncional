<style>

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
#perfil_contenedor{
    margin-top: 30px;
}
</style>
<template>
	
<div id="profile_root">
	<br>
    <div id="perfil_contenedor" class="well" v-if="$store.state.user">
        <div class="row">
            <div class="col-md-4">
                <div class="profile-img-container">
                    <img id="profile-img" class="img-thumbnail img-circle img-responsive" :src="$store.state.user.avatar" style="width:250px;">
                        <a type="button" data-toggle="modal" href="#photoEdition">
                            <div id="changeIt" class="btn-lg">
                                <i class="fa fa-camera fa-6" aria-hidden="true"></i>
                            </div>                
                        </a>
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <div class="form-group">
                        <label>Nombre: </label>
                        <p style="color: #A4A4A4">{{$store.state.user.name}}</p>
                    </div>

                    <div class="form-group">
                        <label>Cédula profesional</label>
                        <p style="color: #A4A4A4">{{$store.state.user.cedula_profesional}}</p>
                    </div>

                    <div class="form-group">
                        <label>Correo Electronico</label>
                        <p style="color: #A4A4A4">{{$store.state.user.email}}</p>
                    </div>

                    <div class="form-group">
                        <label>Información profesional resumen : </label>
                        <div>
                          <i>{{$store.state.user.informacion_profesional_resumen}}</i>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Información profesional extendido: </label>
                        <div>
                            <i>{{$store.state.user.informacion_profesional_completo}}</i>
                        </div>
                        
                    </div>

                    <div class="form-group">
                        <button class="btn btn-default" style="margin-left: 0px; margin-top: 50px;" data-toggle="modal" href="#profileEdition">Editar información</button>
                    </div>

                </div>

            </div>
        </div>
    </div>

    <div id="modals">

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
                <div class="modal-header" align="center">
                    <label class="modal-title">Editar Información</label>
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
                                <input class="form-control" type="text" id="newName" v-model="user_nombre">
                                <label>Correo elecrónico</label>
                                <input class="form-control" type="text" id="newEmail" v-model="user_email">
                                
                                <label>Cédula profesional</label>
                                <input class="form-control" type="text" id="newCedula" v-model="user_cedula">
                                <label>Informacion profesional resumen : </label>
                                <textarea class="form-control" type="text"  v-model="user_informacion_profesional_resumen" maxlength="255">
                                </textarea>
                                <label>Información profesional extendido : </label>
                                <textarea class="form-control" type="text"  v-model="user_informacion_profesional_completo"  maxlength="65535">
                                </textarea>
                            </div>                        
                        </div>

                        <div id="password" class="tab-pane fade profileCard">
                            <div style="margin-left: 90px; margin-top: -10px; width:350px;">
                                <label>Contraseña Actual</label>
                                <input class="form-control" type="password" v-model="oldPass" :disabled="password_disabled ? true : false">
                                <label>Nueva Contraseña</label>
                                <input class="form-control" type="password" v-model="newPass1" :disabled="password_disabled ? true : false">
                                <label>Repetir Nueva Contraseña</label>
                                <input class="form-control" type="password" v-model="newPass2" :disabled="password_disabled ? true : false">
                            </div>    
                        </div>


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
                    user_nombre : '',
                    user_email : '',
                    user_cedula : '',
                    user_informacion_profesional_resumen : '',
                    user_informacion_profesional_completo : '',
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

             if(this.$store.state.user != null)
                {
                    this.user_nombre = this.$store.state.user.name;
                    this.user_email = this.$store.state.user.email;
                    this.user_cedula = this.$store.state.user.cedula_profesional;
                    this.user_informacion_profesional_resumen = this.$store.state.user.informacion_profesional_resumen;
                    this.user_informacion_profesional_completo = this.$store.state.user.informacion_profesional_completo;
                }
                
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
            },
            '$store.state.user' : function(){
                if(this.$store.state.user != null)
                {
                    this.user_nombre = this.$store.state.user.name;
                    this.user_email = this.$store.state.user.email;
                    this.user_cedula = this.$store.state.user.cedula_profesional;
                    this.user_informacion_profesional_resumen = this.$store.state.user.informacion_profesional_resumen;
                    this.user_informacion_profesional_completo = this.$store.state.user.informacion_profesional_completo;
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
        actualizarInformacion : function(){
            var vm = this;
            var datas = {'nombre' : vm.user_nombre ,
                        'cedula_profesional' : vm.user_cedula ,
                        'informacion_profesional_resumen' : vm.user_informacion_profesional_resumen,
                        'informacion_profesional_completo' : vm.user_informacion_profesional_completo
                        };
            console.log("Lo que mando : ");
            console.log(datas);

            vm.$http.put('user',datas).then(
                //success
                function(response){
                     this.$store.commit('setuser', {
                    user: response.data.user
                        });
                    $.confirm({
                        title: 'Correcto',
                        content: 'Información actualizada correctamente' ,
                            type: 'green',
                            typeAnimated: true,
                                buttons : {
                                     ok : {text : 'Entendido'}
                                }
          });
                },
                //error
                function(response){
                        console.log(response.data);
                        $.confirm({
                        title: 'Error',
                        content: 'Ocurrio un error al actualizar la información, intente de nuevo más tarde' ,
                            type: 'red',
                            typeAnimated: true,
                                buttons : {
                                     ok : {text : 'Entendido'}
                                }
          });
                }
                );
        },
        actualizarPassword : function(){
            var vm = this;
            vm.password_disabled = true;
            vm.password_actualizando = true;
            vm.password_success = false;
            vm.password_error = false;
            vm.password_error_message = [];
            var datas  = {'current-password' : vm.oldPass , 'newpassword' : vm.newPass1 , 'newpassword_confirmation' : vm.newPass2};

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
                var vm = this;
                 var confirm_loading = $.dialog({
                                    closeIcon: false,
                                    icon: 'fa fa-cog fa-spin  fa-fw',
                                    title: 'Espere',
                                    content: 'Actualizando foto de perfil ...',
                                    type: 'blue',
                                    typeAnimated: true,
                                    buttons: {
                                        
                                    }
                                });   
                  vm.croppie_obj.result('canvas').then(function(canvas){
                    var data = {'avatar' : canvas};
                    console.log(data);
                   vm.$http.put('avatar',data).then(
                        //success
                        function(response){
                            vm.$store.state.user.avatar = response.data.avatar;
                            $("#photoEdition").modal('hide');
                            confirm_loading.close();
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