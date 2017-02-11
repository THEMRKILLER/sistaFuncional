<style>
    @import url('http://t4t5.github.io/sweetalert/dist/sweetalert.css');
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
    <div class="container" style="margin-top: 10px; margin-left: 250px; width: 800px;">
    <br>

    <div class="card" style="height:370px;">
        <div class="profile-img-container">
            <img id="profile-img" class="img-thumbnail img-circle img-responsive" :src="profileImage" style="width:250px;">
            <a type="button" data-toggle="modal" href="#photoEdition">
            <div id="changeIt" class="btn-lg">
                <i class="fa fa-camera fa-6" aria-hidden="true"></i>
            </div>                
            </a>
        </div>

    <div>
        <div class="" style="margin-left: 300px; margin-top: -220px; width:500px;">
            <label>{{editName}}</label>
            <br>            
            <label style="color: #A4A4A4">{{editEmail}}</label>
            <br>
            <label>Cédula profesional</label>
            <br>
            <label style="color: #A4A4A4">{{editCedula}}</label>
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
                    editName: '',
                    editPassword: '',
                    editPassword2: '',
                    editCedula: '',
                    editEmail: '',
                    profileImage: '//ssl.gstatic.com/accounts/ui/avatar_2x.png'
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
                url: this.profileImage,
                orientation: 1
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
                 
            },
                fetchDatas : function(){
                    var thisObj = this;
                    this.$http.get('user_info',{params : {'user_id' : this.$store.state.calendario_id}, progress(e) {
        if (e.lengthComputable) {
            //console.log("porcentaje: "+ (e.loaded / e.total * 100) );
            thisObj.$store.commit('aumentarPorcentaje', {
                        porcentaje: (e.loaded / e.total * 100)
                    });            
        }
            }}).then(
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