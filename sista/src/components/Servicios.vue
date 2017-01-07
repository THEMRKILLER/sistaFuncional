<style>

.panel-title{
	text-align: center;
}

</style>
<template>
	<div id="servicios_root">
		<div class="panel panel-default" id="tablaServicios">
		  <div class="panel-heading">
            <div v-if="updateSuccess" class="alert alert-success">
                <h5>Datos actulizados correctamente <i class="fa fa-check"></i></h5>
            </div>
		    <h3 class="panel-title tbserv">                
                Tabla de servicios</h3>                
		  </div>
          <div class="col-md-10 col-md-offset-10">
                    <button class="btn btn-primary btn-md glyphicon glyphicon-plus" data-toggle="modal" data-target="#servicio_modal">Añadir servicio</button>     
                </div>
          <div class="panel-body" align="center">
              <table class="table ui-responsive" data-role="table" data-mode="columntoggle">
                  <thead>
                      <tr>                      
                          <th>Servicio</th>
                          <th>Duración</th>
                          <th>Costo</th>
                          <th>Editar</th>
                          <th>Eliminar</th>
                      </tr>
                  </thead>
                  <tbody>                  
                      <tr class="list-group" v-if="servicios.length>0" v-for="servicio in servicios">
                          <td>{{servicio.nombre}}</td> 
                          <td>{{servicio.duracion}} minutos</td>
                          <td>{{servicio.costo}} {{servicio.denominacion}}</td>

                          <td>
                          <button v-on:click="getElementID(servicio.id)" type="button" class="btn btn-warning glyphicon glyphicon-pencil" title="Editar información" data-toggle="modal" href="#modalToEdit"></button>
                          </td>
                          <td>
                          <button v-on:click="deleteTheEvent(servicio.id)" type="button" class="btn btn-danger" title="Eliminar servicio" data-toggle="modal" href="#confirmOverlay">X</button>
                          </td>
                      </tr>
                      <tr v-else>
                          <li>No hay servicios registrados</li>
                      </tr>
                  </tbody>
              </table>
          </div>
		</div>

            <!-- modal to show -->
        <div id="modalToEdit" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" id="eventContent" title="Event Details">
                        Editar Servicio <b>{{editNameEvent}}</b>
                    </div>
                    <div id="modalBody" class="modal-body">


                      <div class="form-group">
                            <label for="email">Nombre del Servicio:</label>
                            <input type="text" class="form-control" name="nombre" v-model="editNameEvent">
                    </div>
                     <div class="form-group">
                            <label for="costo">Costo del Servicio:</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-dollar"></i></div>
                                 <input type="number" min="1" class="form-control" name="costo" v-model="editCostEvent">
                                <div class="input-group-addon">
                                    <select v-model="editDenominacionEvent">
                                        <option value="MXN">MXN</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                
                    <div class="form-group">
                        <label for="email">Duración del Servicio (minutos) :</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-clock-o"></i></div>
                                 <input type="number" min="1" class="form-control" name="duracion" v-model="editTimeEvent">
                            </div>
                        </div>

                    </div>




                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                            <button class="btn btn-primary" v-on:click="updateServicio">Guardar cambios</button>
                        </div>
                    </div>
                </div>
        </div> 
<!-- modal to show -->

<!-- MODAL DELETE -->

    <div id="confirmOverlay" class="modal fade">
    <div id="confirmBox" class="modal-content">

        <h1>¿Está seguro que desea eliminar el servicio {{deleteNameEvent}}?</h1>
        <p>El servicio será eliminado permanentemente de la tabla</p>

        <div id="confirmButtons">
            <button class="btn btn-danger" v-on:click="deleteServicio" >SI</button>
            <button class="btn btn-default" data-dismiss="modal">No</button>
        </div>
    </div>
</div>
    
<!-- MODAL DELETE -->

			<!--Modal para agregar servicio -->
			<div id="servicio_modal" class="modal fade" role="dialog">
			  <div class="modal-dialog">
			    <!-- Modal content-->
			    <div class="modal-content">
			      <div class="modal-header">
			        <button type="button" class="close" data-dismiss="modal" v-on:click="cancelarRegistro">&times;</button>
			        <h4 class="modal-title">Registar Servicio</h4>
			      </div>
			      <div class="modal-body">			 
			        <div class="form-group">
    						<label for="email">Nombre del Servicio:</label>
    						<input type="text" class="form-control" name="nombre" v-model="nombre">
  					</div>
                     <div class="form-group">
                            <label for="costo">Costo del Servicio:</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-dollar"></i></div>
                                 <input type="number" min="1" class="form-control" name="costo" v-model="costo">
                                <div class="input-group-addon">
                                    <select v-model="denominacion">
                                        <option value="MXN">MXN</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div>
                            </div>
                        </div>
  				
                    <div class="form-group">
                        <label for="email">Duración del Servicio (minutos) :</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-clock-o"></i></div>
                                 <input type="number" min="1" class="form-control" name="duracion" v-model="duracion">
                            </div>
                        </div>

			      </div>
			      <div></div>
			      <div v-show="registro_estado_neutro == false">

			      	<div v-if="registro_estado_encurso" class="alert alert-info">
			      		<h4>
			      			Registrando servicio 
			      			<i class="fa fa-refresh fa-spin fa-1x fa-fw"></i>
						</h4>
			      	</div>

			      	<div v-if="registro_estado_exitoso" class="alert alert-success">
			      		<h4>
			      			El servicio {{registro_estado_exitoso_name}} se ha creado correctamente, puede serguir registrando más servicios o haga clic en salir.
				        	<i class="fa fa-check"></i>
						</h4>
			      	</div>

			      	<div v-if="registro_estado_error" class="alert alert-danger">
			      		<h4>
			      			Error creando el servicio <i class="fa fa-times"></i>
			      			<ul>
			      				<li v-for="error_s in error_servicio">
			      					{{error_s}}
			      				</li>
			      			</ul>
				        	
						</h4>
			      	</div>



			      </div>

			      <div class="modal-footer">
			      	<button type="button" class="btn btn-md btn-success" v-on:click="registrarServicio">Registrar</button>
			        <button v-if="!nombre == ''" type="button" class="btn btn-default" data-dismiss="modal" v-on:click="cancelarRegistro">Cancelar</button>
			        <button v-else type="button" class="btn btn-default" data-dismiss="modal" v-on:click="cancelarRegistro">Salir</button>
			      </div>
			    </div>

			  </div>
			</div>
</div>
</template>
<script>
    export default {

    	mounted(){
    		this.fetchDatas();
    	},

    	data(){            
    		return{   
    			nombre: '',
    			duracion : 1,
                costo : 0,
                denominacion : 'MXN',
    			registro_estado_neutro : true,
    			registro_estado_encurso : false,
    			registro_estado_exitoso : false,
    			registro_estado_error : false,
    			registro_estado_exitoso_name : '',
                editEvent: '',
                editTimeEvent: '',
                editNameEvent: '',
                editCostEvent: '',
                editDenominacionEvent: '',
                deleteNameEvent: '',
    			error_servicio : '',
    			servicios  : [],
                ArregloID: [],
                updateSuccess : false                
    		}
    	},
        methods : {
        	fetchDatas : function(){

        		this.$http.get('tipo?token='+localStorage.getItem('token')).then(
        			//success
        			function(response){

        				this.servicios = response.data;

        			},
        			//error
        			function(response){

        				console.error("Error :( en servicios D: ");
        				switch(response.status)
                        {
                            case 401 : {
                                if(localStorage.getItem('remember_user') == true)
                                {
                                    thisObj.$http.get('refresh_token').then(
                                        //sucess
                                        function(response){

                                            localStorage.setItem('token', response.data.token);
                                            thisObj.fetchDatas();

                                        },
                                        //error
                                        function(response){
                                            localStorage.removeItem('token');
                                            thisObj.$router.push('admin');
                                        });
                                }
                                else{
                                    localStorage.removeItem('token');
                                    thisObj.$router.push('admin');

                                }
                            }break;

                            case 404 : {
                                       localStorage.removeItem('token');
                                        thisObj.$router.push('admin');
                            }break;
                        }    
        			}

        			);

        	},

        	registrarServicio : function(event){

        	$(event.target).attr('disabled',true);
        	this.registro_estado_neutro = false;
        	this.registro_estado_exitoso = false;
        	this.registro_estado_error = false;
        	this.registro_estado_encurso = true;


        	 var datas_to_server = {'nombre' : this.nombre,'duracion' : this.duracion, 'costo' : this.costo,'denominacion' : this.denominacion};
        	 this.$http.post('tipo?token='+localStorage.getItem('token'),datas_to_server).then(
        	 	//success
        	 	function(response){
        	 		this.registro_estado_exitoso = true;
        	 		this.registro_estado_encurso = false;
        	 		$(event.target).attr('disabled',false);
        	 		this.registro_estado_exitoso_name = this.nombre;
        	 		this.nombre = '';
        	 		this.duracion = 0;
                    this.costo = 0;

        	 		this.fetchDatas();


        	 	},
        	 	//error
        	 	function(response){
        	 		this.registro_estado_error = true;
        	 		this.registro_estado_encurso = false;
        	 		this.error_servicio = response.data.error;
        	 		$(event.target).attr('disabled',false);
        	 	}
        	 	);

        	},
        	cancelarRegistro : function(){
        		this.nombre = '';
        		this.duracion = 1;
        		this.registro_estado_neutro = true;

        	},
            updateServicio : function(event){
                $(event.target).attr('disabled',true);

                var datas = {'id' : this.editIdEvent,'nombre' : this.editNameEvent, 'duracion' : this.editTimeEvent , 'costo' : this.editCostEvent, 'denominacion' : this.editDenominacionEvent};

                this.$http.put('tipo?token='+localStorage.getItem('token'),datas).then(
                    //success
                    function(response){
                        $(event.target).attr('disabled',false);
                        this.updateSuccess = true;
                        $('#modalToEdit').modal('hide');
                        var thisObj = this;
                        setTimeout(function() {
                            thisObj.updateSuccess = false;
                        }, 5000);
                        this.fetchDatas();
                    },
                    //error
                    function(response){
                        $(event.target).attr('disabled',false);
                    }
                    );
            },
            deleteServicio : function(event){
                  $(event.target).attr('disabled',true);
                var datas = {'id' : this.ArregloID};

                this.$http.delete('tipo?token='+localStorage.getItem('token'),{params : {'id' : this.ArregloID}}).then(
                    //success
                    function(response){
                        $(event.target).attr('disabled',false);
                        this.updateSuccess = true;
                        $('#confirmOverlay').modal('hide');
                        var thisObj = this;
                        setTimeout(function() {
                            thisObj.updateSuccess = false;
                        }, 5000);
                        this.fetchDatas();
                    },
                    //error
                    function(response){
                        $(event.target).attr('disabled',false);
                    }
                    );
            },
            getElementID: function(id){
                this.ArregloID = id;
                //imprimo los ids seleccionados
                this.editIdEvent = id;
                this.editNameEvent = this.servicios[this.ArregloID -1].nombre;
                this.editTimeEvent = this.servicios[this.ArregloID -1].duracion;
                this.editCostEvent = this.servicios[this.ArregloID -1].costo;
                this.editDenominacionEvent = this.servicios[this.ArregloID -1].denominacion;
            },
            deleteTheEvent: function(id_button) {
                this.ArregloID = id_button;
                this.deleteNameEvent = this.servicios[this.ArregloID -1].nombre;
    },
        }
    }
</script>