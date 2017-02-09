<style>

img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
  height: 30%;
}
#editor{
	height: 40%;
}
</style>
<template>
<div>
    <br>
<br>
<br>
<div class="panel panel-default container" style="max-width: 800px;">
<form role="form">
 <div class="form-group">
    <label for="email">Titulo</label>
    <input columns="10" type="text" class="form-control" id="titulo" v-model="titulo" placeholder="Ponle un título a tu artículo">
  </div>
  <div class="form-group">
    <label for="email">Resumen</label>
    <textarea type="text" class="form-control" id="resumen" v-model="resumen" placeholder="Redacta brevemente un resumen del artículo que vas a escribir" maxlength="255">
  </div>
  <div class="form-group">
    <label for="email">Imagen de carátula</label>

     <div v-if="!image">
     	<label for="email">Selecciona una imagen</label>
		<input type="file" v-on:change="onFileChange">
  	</div>
  	<div v-else align="center">
    	<img :src="image" />
    	<button  v-on:click="removeImage" class="btn btn-info btn-md">Eliminar imagen</button>
  </div>
  </div>
<!--
<div align="center">
  <button class="btn btn-success subir-articulo" v-on:click="storeArticulo">Crear y subir Articulo <i class="fa fa-cloud-upload" aria-hidden="true"></i>
</button>
</div> -->
<textarea name="editor" id="editor"></textarea>
</form>
</div>
<br>

<div v-if="!articulo_status_neutral">
	<div v-if="articulo_status_creando" class="alert alert-info">
		<h4>
			Guardando cambios ... 
			<i class="fa fa-refresh fa-spin fa-1x fa-fw"></i>
		</h4>
	</div>
	<div v-if="articulo_status_success" class="alert alert-success">
		<h4>
			      			Los cambios se ha guardado de manera exitosa, lo estamos redireccionando al articulo ...
				        	<i class="fa fa-check"></i>
		</h4>
	</div>
	<div v-if="articulo_status_error" class="alert alert-danger">
		<h4>
			      			Error guardando los cambios <i class="fa fa-times"></i>
			      			<ul>
			      				<li v-for="error_articulo in articulo_error_message">
			      					<ul v-for="sub_error in error_articulo">
			      						{{sub_error}}
			      					</ul>
			      				</li>
			      			</ul>
		</h4>
	</div>
</div>

<div></div>
<br>
  <div align="center" class="panel container">
    <button class="btn btn-success subir-articulo" v-on:click="enviarCambios">Guardar cambios 
    <i class="fa fa-cloud-upload" aria-hidden="true"></i>
    </button>
    </div>
</div>
</template>

<!-- DO NOT EDIT -->
<script>

export default {
  name: 'hello',
  mounted(){
  	 this.editor  = CKEDITOR.replace( 'editor');
  	 var client_sizew = $( window ).height();
	this.editor.config.height = client_sizew * 0.5;
  var vm = this;
    this.editor.on( 'instanceReady', function( evt ) {
      vm.fetchDatas();
    } );
  },
  data () {
    return {
    	 titulo : '',
    	 resumen : '',
    	 image: '',
    	 caratula : null,
    	 editor : null,
       id : null,
       caratula_url : '',
    	 articulo_status_neutral : true,
    	 articulo_status_success : false,
    	 articulo_status_error : false,
    	 articulo_status_creando : false,
    	 articulo_error_message : ''

    }
  },
  methods: {
    fetchDatas: function(){
      var vm = this;
      this.$http.get('articulo/'+this.$route.params.id, {progress(e) {
        if (e.lengthComputable) {
            //console.log("porcentaje: "+ (e.loaded / e.total * 100) );
            vm.$store.commit('aumentarPorcentaje', {
                        porcentaje: (e.loaded / e.total * 100)
                    });            
        }
            }}).then(
        //success
        function(response){
          this.titulo = response.data.articulo.titulo;
          this.resumen = response.data.articulo.resumen;
          this.image = response.data.articulo.caratula;
          this.id = response.data.articulo.id;
          CKEDITOR.instances.editor.setData(response.data.articulo.contenido);



        },
        //error
        function(response){
            switch(response.status)
            {
              case 404: this.articulonotfound = true;
              break;

            }
        });
    },
  	onFileChange : function (e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

     this.caratula = files[0];
      this.createImage(files[0]);

    },
    createImage : function(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;


      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    },
    enviarCambios : function(){
    	this.articulo_status_error = false;
    	this.articulo_status_success = false;
    	this.articulo_status_neutral = false;
    	this.articulo_status_creando = true;


    	var datas_send = new FormData();
      var c_url = this.caratula == null ? this.image : null;
      datas_send.append('_method','PUT');
    	datas_send.append('titulo',this.titulo);
    	datas_send.append('resumen',this.resumen);
      if(this.caratula)datas_send.append('caratula',this.caratula);
    	datas_send.append('contenido',CKEDITOR.instances.editor.getData());
      datas_send.append('id',this.id);
      datas_send.append('caratula_url',c_url);

  //let data = { _method : 'PATCH' , form : form}
    	this.$http.post('articulo',datas_send,{
            headers: {
                'Content-Disposition': 'x-www-form-urlencoded'
              },
              emulateJSON: true
        }).then(
    		//success
    		function(response){
          
    			this.articulo_status_creando = false;
    			this.articulo_status_success = true;
          var vm = this;

          setTimeout(function() {
            vm.$router.push('../articulo/'+response.data.id);
          }, 2000);


    		//	console.log(response.status);

    		},
    		//error
    		function(response){
    			this.articulo_status_creando = false;
    			this.articulo_status_error = true;
    			this.articulo_error_message = response.data.errors;
    		}
    		);
    }
  }
}
</script>


