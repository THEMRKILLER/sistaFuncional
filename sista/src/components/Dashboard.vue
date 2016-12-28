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
            	<select class="form-control" v-model="tipo_id" name="tipo_id">
  					<option>Elija un servicio</option>
  					<option value="00:30:00" id="1">Limpieza dental</option>
  					<option value="01:00:00" id="2">Extracciones</option>
  					<option value="00:45:00" id="3">Endodoncia</option>
  					<option value="00:35:00" id="4">Cita médica</option>
				</select>
            </div>
<!-- Hora -->
            <div class="form-group">
              <label for="message-text" class="form-control-label">Duración:</label>
				<select class="form-control" v-model="fecha_inicio" name="fecha_inicio">
  					<option id="0">00:00</option>
  					<option id="1">01:00</option>
  					<option id="2">02:00</option>
  					<option id="3">03:00</option>
  					<option id="4">04:00</option>
  					<option id="5">05:00</option>
  					<option id="6">06:00</option>
  					<option id="7">07:00</option>
  					<option id="8">08:00</option>
  					<option id="9">09:00</option>
  					<option id="10">10:00</option>
  					<option id="11">11:00</option>
  					<option id="12">12:00</option>
  					<option id="13">13:00</option>
  					<option id="14">14:00</option>
  					<option id="15">15:00</option>
  					<option id="16">16:00</option>
  					<option id="17">17:00</option>
  					<option id="18">18:00</option>
  					<option id="19">19:00</option>
  					<option id="20">20:00</option>
  					<option id="21">21:00</option>
  					<option id="22">22:00</option>  				
  					<option id="23">23:00</option>
				</select>
            </div>            
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary">Agendar Cita</button>
        </div>
      </div>
</div>
</div>


	</div>
</template>	

<script>
var id_count = 0;
    export default {
    	datos: function(){
    		return{
    			id_cita: '',
    			calendario_id: '',
    			tipo_id: '',
    			fecha_inicio: '',
    			fecha_final: '',
    			cliente_nombre: '',
    			cliente_telefono: '',
    			cliente_email: ''
    	}
    },

    	name:'dashboard',
    	data(){
    		return {
    			citas : [],
    		}
    	},
    	mounted(){
            var thisObj = this;
            this.fetchDatas();
    	},
    	methods : {

    		sendCalendarJSON: function(){
    			this.errorMessage='';
    			var calendarInformation = {
    				"id_cita": id_count,
    				"calendario_id": this.calendario_id,
    				"tipo_id": this.tipo_id,
    				"fecha_inicio": this.fecha_inicio+$('#calendar').fullCalendar('getDate'),
    				"fecha_final": '',
    				"cliente_nombre": this.cliente_nombre,
    				"cliente_telefono": this.cliente_telefono,
    				"cliente_email": this.cliente_email
    			}
    		},

            createCalendar : function(){
            $('#calendar').fullCalendar({

            dayClick:  function(event, jsEvent, view) {
            	//$('#modalTitle').html(event.title);
            	//$('#modalBody').html(event.description);
            	//$('#eventUrl').attr('href',event.url);
            	$('#calendarModal').modal('show');
        },
/* INICIO ACTUALIZAR AL HACER CLICK
            	eventClick: function(event, element){
            		event.title = "clicked";
            		$('#calendar').fullCalendar('updateEvent', event);
            	},
FIN FUNCION ACTUALIZAR AL HACER CLICK*/
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2016-12-12',
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

