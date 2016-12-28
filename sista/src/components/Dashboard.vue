<template>	
	<div class="container">
		<div class="jumbotron">
    		<h1 align="CENTER">Bienvenido USUARIO</h1>    
    		<br>
  		</div>
<div class="panel panel-default">
  <div class="panel-heading">Calendario</div>
  <div id="calendar"></div>
</div>		


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
            	<option v-for="option in options" :value="option.id">
            		{{ option.text }}
            	</option>
  					
				</select>
            </div>
<!-- Hora -->
            <div class="form-group">
              <label for="message-text" class="form-control-label">Duración:</label>
				<select class="form-control" v-model="fecha_inicio" name="fecha_inicio">
				<option v-for="hour in hours" :value="hour.value">
					{{ hour.text }}
				</option>
  					
				</select>
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


	</div>
</template>	

<script>
var id_count = 0;
    export default {
    	name:'dashboard',

    	data: function(){
    		return {
    			//id_cita: '',
    			calendario_id: 2,
    			tipo_id: '',
    			fecha_inicio: '',
    			fecha_final: '',
    			cliente_nombre: '',
    			cliente_telefono: '',
    			cliente_email: '',
    			hora_cita: '',
    			date_selected : '',
    			options:[
    				{ text: 'Limpieza dental', duration: 30, id: 0},    		
    				{ text: 'Extracciones', duration: 60, id: 1}
    				//{ text: 'Endodoncia', duration: 80, id: 2},
	    			//{ text: 'Cita medica', duration: 120, id: 3}
    			],
    			hours:[    			
    				{ text: '00:00', value: '2016-12-31 00:00:00', id: 0},
    				{ text: '01:00', value: '2016-12-31 01:00:00', id: 1},
    				{ text: '02:00', value: '2016-12-31 02:00:00', id: 2},
    				{ text: '03:00', value: '2016-12-31 03:00:00', id: 3},
    				{ text: '04:00', value: '2016-12-31 04:00:00', id: 4},
    				{ text: '05:00', value: '2016-12-31 05:00:00', id: 5},
    				{ text: '06:00', value: '2016-12-31 06:00:00', id: 6},
    				{ text: '07:00', value: '2016-12-31 07:00:00', id: 7},
    				{ text: '08:00', value: '2016-12-31 08:00:00', id: 8},
    				{ text: '09:00', value: '2016-12-31 09:00:00', id: 9},
    				{ text: '10:00', value: '2016-12-31 10:00:00', id: 10},
    		
    			]
    		}
    	},
    	mounted(){
            var thisObj = this;
            this.fetchDatas();
    	},
    	methods : {

    		sendCalendarJSON: function(){
    				//guardo en id_selected el valor seleccionado en el option 
    				var id_selected = this.tipo_id;
    				//console.log(this.tipo_id);
    				//mediante la funcion $.greep de JQuery se hace una busqueda en el arreglo de objetos, el parametro de busqueda es id 
    				// ejemplo:  { text: 'Limpieza dental', duration: '00:30:00', id: '0'} devolverà este objeto del arreglo si el id que le pasas en el return es 0 
    				var service = $.grep(this.options, function(e){ return e.id == id_selected; });
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
    			var fecha_final = this.addMinutes(dateformat,servicio.duration);
    			var month = fecha_final.getMonth() < 10 ? '0'+fecha_final.getMonth() : fecha_final.getMonth();
    			var day = fecha_final.getDay() < 10 ? '0'+fecha_final.getDay() : fecha_final.getDay();
    			var year = fecha_final.getFullYear();
    			var minute = fecha_final.getMinutes() < 10 ? '0'+fecha_final.getMinutes() : fecha_final.getMinutes();
    			var hora = fecha_final.getHours() < 10 ? '0'+fecha_final.getHours() : fecha_final.getHours();
    			var segundo = fecha_final.getSeconds() < 10 ? '0'+fecha_final.getSeconds() : fecha_final.getSeconds();

    			fecha_final = year + "-" + month + "-" + day +" " + hora +":"+ minute +":"+ segundo;
    			console.log(fecha_final);
    			//var parse_endDate = 
    			//console.log(fecha_final.toISOString());
    		//	console.log(fecha_final.toString());


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
            	thisObj = date;
            	//console.log(thisObj);

            	//$('#modalTitle').html(event.title);
            	//$('#modalBody').html(event.description);
            	//$('#eventUrl').attr('href',event.url);
            	$('#calendarModal').modal('show');
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
    			this.$http.get('http://192.168.0.14/Sista/public/api/v1/dashboard?token='+localStorage.getItem('token')).then(
    				//success
    				function(response){
    					this.citas = response.data;
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
                            }
                        }    
    				});
    		}
    	}

    }
</script>

