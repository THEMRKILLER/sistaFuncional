<template>	
	<div class="container">
		<div class="jumbotron">
    		<h1 align="CENTER">Bienvenido USUARIO</h1>    
    		<br>
                <router-link to="/settings">Settings</router-link>

  		</div>
<div class="panel panel-default">
  <div class="panel-heading">Calendario</div>
  <div id="calendar"></div>
</div>		

<!-- INICIO MODAL -->

<div id="calendarModal" class="modal fade">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title" id="exampleModalLabel">Nueva Cita</h4>
        </div>
        <div class="modal-body">
          <form>
<!-- Nombre -->
            <div class="form-group">
              <label for="recipient-name" class="form-control-label">Nombre:</label>
              <input type="text" name="cliente_nombre" class="form-control" id="recipient-name" v-model="cliente_nombre">
            </div>
<!-- TELEFONO -->
            <div class="form-group">
              <label for="message-text" class="form-control-label">Telefono:</label>
              <input type="text" name="cliente_telefono" class="form-control" id="recipient-phone" v-model="cliente_telefono">
            </div>
<!-- EMAIL -->
            <div class="form-group">
              <label for="message-text" class="form-control-label">Correo electrónico:</label>
              <input type="text" name="cliente_email" class="form-control" id="recipient-email" v-model="cliente_email">
            </div>
<!-- SERVICIOS -->
            <div class="form-group">             
            <label for="message-text" class="form-control-label">Escoja un servicio</label>
            	<select class="form-control" v-model="tipo_id">
            	<option v-for="servicio in servicios" :value="servicio.id">
            		{{ servicio.nombre }}
            	</option>
  					
				</select>
            </div>
<!-- Hora -->
            <div class="form-group">
              <label for="message-text" class="form-control-label">Hora:</label>
				<select class="form-control" v-model="fecha_inicio" name="fecha_inicio" v-if="hours != []">
				<option v-for="hour in hours" :value="hour.value">
					{{ hour.text }}
				</option>
  					
				</select>
                <select v-else class="form-control" name="fecha_inicio" disabled></select>
            </div>            
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" v-on:click="sendCalendarJSON">Agendar Cita</button>
        </div>
      </div>
</div>
</div>
<!-- FIN MODAL -->

<!-- segundo modal -->
	<div id="segundoModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header" id="eventContent" title="Event Details">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span> <span class="sr-only">cerrar</span></button>
                <h4 class="modal-title">
                    {{event_selected_servicio}}
                </h4>
                
            </div>
            <div id="modalBody" class="modal-body">
                Cliente : {{event_selected_cliente_nombre}}
                <br>
                Telefono : {{event_selected_cliente_telefono}}
                <br>
                Correo Electrónico : {{event_selected_cliente_email}}
                <br>
                Hora de Inicio : {{event_selected_hora_inicio}}
                <br>
                Hora de Finalización : {{event_selected_hora_final}}

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button class="btn btn-primary">Guardar cambios</button>
            </div>
        </div>
    </div>
</div> 
<!-- fin segundo modal -->
	</div>
</template>	

<script>


    export default {

    	name:'dashboard',

    	data: function(){
    		return {
    			//id_cita: '',
    			calendario_id: 1,
    			tipo_id: '',
    			fecha_inicio: '',
    			fecha_final: '',
    			cliente_nombre: '',
    			cliente_telefono: '',
    			cliente_email: '',
    			hora_cita: '',
    			date_selected : '',
                servicios : [],
                event_selected_cliente_nombre : '',
                event_selected_hora_inicio : '',
                event_selected_hora_final : '',
                event_selected_cliente_email : '', 
                event_selected_cliente_telefono  : '',
                event_selected_servicio : '',
    			hours:[]

    		}
    	},
    	mounted(){
            var thisObj = this;
            this.fetchDatas();
    	},
        watch : {
            'tipo_id' : function(){
                this.servicioHorasDisponibles();
            }
        },
    	methods : {
            servicioHorasDisponibles : function(){
                this.hours = [];
                console.log("dia = " + new Date(this.date_selected));
                var dia = new Date(this.date_selected).toISOString();
                console.log(dia);
                
                this.$http.get('servicio-disponible',{params : {'tipo_id' : this.tipo_id, 'dia' : dia }}).then(
                    //success
                    function(response){
                        this.hours = response.data;
                    },
                    //error
                    function(response){
                        this.hours = []
                    }

                    );
            },

    		sendCalendarJSON: function(){
    				//guardo en id_selected el valor seleccionado en el option 
    				var id_selected = this.tipo_id;
    				//console.log(this.tipo_id);
    				//mediante la funcion $.greep de JQuery se hace una busqueda en el arreglo de objetos, el parametro de busqueda es id 
    				// ejemplo:  { text: 'Limpieza dental', duration: '00:30:00', id: '0'} devolverà este objeto del arreglo si el id que le pasas en el return es 0 
    				var service = $.grep(this.servicios, function(e){ return e.id == id_selected; });
    				// si la cantidad de resultados que te devuelve $.greep es cero quiere decir que no existieron resultados
    				if (service.length == 0) {
    					//si no se encontraron resultados avisale al usuario ... y abortas el mètodo con un return; ò return false; 
 					 // not found
					} else if (service.length == 1) {
				  // access the foo property using result[0].foo
				  // $.greep siempre te va a devolver un array de los resultados obtenidos, obviamente si solo quieres un resultado lo encontraràs en la posiciòn 0 
				  var servicio = service[0];
				 
				  // entonces ese resultado se guardò en servicio 


				} else {
				  // multiple items found
				}

				//console.log(servicio);
				//return;


    			this.errorMessage='';
    			var dia_seleccionado = this.date_selected;

    			var dateformat = new Date(this.fecha_inicio);       			
    			var fecha_final = this.addMinutes(dateformat,servicio.duracion);
                console.log("Final = " + fecha_final);

    			var month = fecha_final.getMonth() < 9 ? '0'+ (fecha_final.getMonth()+1) : (fecha_final.getMonth()+1);
    			var day = fecha_final.getUTCDate() < 10 ? '0'+(fecha_final.getUTCDate()) : (fecha_final.getUTCDate());
    			var year = fecha_final.getFullYear().toString();
    			var minute = fecha_final.getMinutes() < 9 ? '0'+(fecha_final.getMinutes()) : (fecha_final.getMinutes());
    			var hora = fecha_final.getHours() < 10 ? '0'+(fecha_final.getHours()) : ( fecha_final.getHours());
    			var segundo = fecha_final.getSeconds() < 9 ? '0'+(fecha_final.getSeconds()) : (fecha_final.getSeconds());

    			fecha_final = year + "-" + month + "-" + day +" " + hora +":"+ minute +":"+ segundo;
    			console.log(fecha_final);
    		
    			var calendarInformation = {
    				//"id_cita": id_count,
    				"calendario_id": this.calendario_id,
    				"tipo_id": servicio.id,
    				"fecha_inicio": this.fecha_inicio,
    				//valueHoraInicio + valueHoraServicio
    				"fecha_final": fecha_final,
    				"cliente_nombre": this.cliente_nombre,
    				"cliente_telefono": this.cliente_telefono,
    				"cliente_email": this.cliente_email
    			};    			
    			var objThis = this;
    			this.$http.post('cita?token='+localStorage.getItem('token'), calendarInformation).then(
						//success
						function(response){
							console.log("Success");
						},
						//error
						function(response){							
							
							if(response.status == 401){
								this.errorMessage = "Error";
							}
							else{
								//console.log(response.data);
							}
							//console.log(response.data);
						});
    		},
    		addMinutes : function(date,minutes){

    			return new Date(date.getTime() + minutes*60000);

    		},
            createCalendar : function(){
            	var thisObj = this;
            $('#calendar').fullCalendar({

            dayClick:  function(date, jsEvent, view){
                thisObj.date_selected = date;
            	//console.log(thisObj);

            	//$('#modalTitle').html(event.title);
            	//$('#modalBody').html(event.description);
            	//$('#eventUrl').attr('href',event.url);
            	$('#calendarModal').modal('show');
            	$('.modal').on('hidden.bs.modal', function(){ 
					//$(this).find('form')[0].reset(); //para borrar todos los datos que tenga los input, textareas, select.
					$("label.error").remove();  //lo utilice para borrar la etiqueta de error del jquery validate
	});
        },
        	//FUNCION PARA MOSTRAR LOS DATOS DE UN EVENTO CREADO

        	eventClick: function(event, jsEvent, view, start, end){
        		//var formDate = $.fullCalendar.formatDate(event.start, 'MM-dd-yyyy');
                thisObj.event_selected_servicio = event.title;
                thisObj.event_selected_cliente_nombre = event.cliente_nombre;
                thisObj.event_selected_cliente_telefono = event.cliente_telefono;
                thisObj.event_selected_cliente_email = event.cliente_email;
                thisObj.event_selected_hora_inicio = event.start;
                thisObj.event_selected_hora_final = event.end;


        		$('#modalTitle').html(event.title);
        		//$("#startTime").html(formDate);
            	//$("#endTime").html(event.end);
            	$('#idEvento').html(event.id);
        		//$('modalBody').html(event.id);
        		//$('#eventLink').attr('href', event.url);
            	//$("#eventContent").dialog({ modal: true, title: event.title });
            	$('#segundoModal').modal();
        		//alert('Event '+calEvent.title);
        		//console.log(calEvent.title);
        	},

            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            
            navLinks: true, // can click day/week names to navigate views
            selectable: true,
            selectHelper: true,
       /*     select: function(start, end) {
                var title = prompt('Event Title:');
                var eventData;
                if (title) {
                    eventData = {
                        title: title,
                        start: start,
                        end: end
                    };
                    $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
                }
                $('#calendar').fullCalendar('unselect');
            }, */
            dayRender: function (date, cell) {
                    //    cell.css("background-color", "#FF6961");
                        },
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: this.citas
            
        })

            },
            timeFormat: 'H(:mm)',
    		fetchDatas : function(){
    		
                var thisObj = this;
    			this.$http.get('dashboard?token='+localStorage.getItem('token')).then(
    				//success
    				function(response){
    					this.citas = response.data.citas;
                        this.servicios = response.data.servicios;
                        thisObj.createCalendar();
                    },
    				//error
    				function(response){
    					console.log("Error :( "+response.status);
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
    				});
    		}
    	}

    }
</script>

