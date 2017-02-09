<style>
.articulo_botones{
  float: right;
}

</style>
<template>

<div id="articulos_root">

  
            <!-- Blog Section -->
            <section class="page-section" id="news">
                <div class="container relative">
                    
                    <h2 class="section-title font-alt align-left mb-70 mb-sm-40">
                        Artículos publicados
                        
                    </h2>
                    
                    <div class="row multi-columns-row">
                        
                        <!-- Post Item -->
                        <div v-for="articulo in articulos" class="col-sm-6 col-md-4 col-lg-4 mb-md-50 wow fadeIn" data-wow-delay="0.1s" data-wow-duration="2s">
                        <div class="panel panel-default">
                          <div class="panel-body">

                            <div v-on:click="goArticulo(articulo.id)">
                               <div class="post-prev-img">
                               <img :src="articulo.caratula" alt="" />
                            </div>
                            
                            <div class="post-prev-title font-alt">
                                <a href="">{{articulo.titulo}}</a>
                            </div>
                            
                            <div class="post-prev-info font-alt">
                                <a href="">{{articulo.autor}}</a> | {{convertirFecha(articulo.fecha.date)}}
                            </div>
                            
                            <div class="post-prev-text">
                                {{articulo.resumen}}
                            </div>
                            
                            <div class="post-prev-more">
                                <a  class="btn btn-mod btn-gray btn-round">Leer màs<i class="fa fa-angle-right"></i></a>
                            </div>
                           
                            </div>
                            
                            <div class="articulo_botones">
                              <button class="btn btn-sm btn-danger" v-on:click="eliminarArticulo(articulo.id)" title="Borrar este articulo"><i class="fa fa-trash"></i></button>
                              <button class="btn btn-sm btn-info" v-on:click="editarArticulo(articulo.id)"><i class="fa fa-pencil" title="Editar este articulo"></i></button>
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
      hora: [],
    	error : false
    }
  },
  mounted(){
  	this.fetchDatas();
  },
  methods:{
  	fetchDatas : function(){
      var vm = this;
  		this.$http.get('articulos', {progress(e) {
        if (e.lengthComputable) {
            //console.log("porcentaje: "+ (e.loaded / e.total * 100) );
            vm.$store.commit('aumentarPorcentaje', {
                        porcentaje: (e.loaded / e.total * 100)
                    });            
        }
            }}).then(
  			//success
  			function(response){
  				this.articulos = response.data;
          this.$store.articulos = response.data.articulos;    
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
    editarArticulo : function(id){
            this.$router.push('articuloedit/'+id);


    },
    eliminarArticulo : function(id){
      var vm = this;
      var data = {params : {'id' : id}};
      $.confirm({
            title: '¿Esta seguro de eliminar este articulo?',
            content: 'No podrás recuperarlo más adelante',
            buttons: {
                Borrar: {
                   action : function() {



                      vm.$http.delete('articulo',data).then(

                        //success
                          function(response){
                            vm.fetchDatas();
                             $.confirm({
                                  title: 'Completado',
                                  content: 'Articulo borrado correctamente',
                                  type: 'green',
                                  typeAnimated: true,
                                  buttons: {
                                      ok: {
                                          text: 'Ok',
                                          btnClass: 'btn-green'
                                      }
                                  }
                              });
                          },
                        //error

                        function(response){

                          if(response.status == 404)
                          {
                              vm.fetchDatas();

                            $.confirm({
                                  title: 'Error :(',
                                  content: 'El articulo que tratas de eliminar ya no existía',
                                  type: 'red',
                                  typeAnimated: true,
                                  buttons: {
                                      ok: {
                                          text: 'Ok',
                                          btnClass: 'btn-red'
                                      }
                                      
                                  }
                                });
                          }
                          else 
                          {
                               $.confirm({
                                  title: 'Error :(',
                                  content: 'ha ocurrido un error al tratar de eliminar el articulo, intente más adelante',
                                  type: 'red',
                                  typeAnimated: true,
                                  buttons: {
                                      ok: {
                                          text: 'Ok',
                                          btnClass: 'btn-red'
                                      }
                                      
                                  }
                                });
                         }
                        }

                        );
                  },
                  btnClass: 'btn-red'
                },
                Cancelar: function () {
                   
                }
                
            }
    });
    },
    convertirFecha: function(fecha){
      moment.lang('es');
      return moment(fecha, "YYYYMMDD").fromNow();
    },

    goArticulo : function(id){
      this.$router.push('articulo/'+id);
    }

  }
}
</script>