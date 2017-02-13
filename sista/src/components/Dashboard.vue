<style>
.disponibilidad-baja a{
   background-color : #FF6961 !important;
   background-image :none !important;
   color: White !important;
   font-weight:bold !important;
   font-size: 12pt;
}
.disponibilidad-media a{
   background-color : #FFB347 !important;
   background-image :none !important;
   color: White !important;
   font-weight:bold !important;
   font-size: 12pt;
}
.disponibilidad-alta a{
   background-color : #779ECB !important;
   background-image :none !important;
   color: White !important;
   font-weight:bold !important;
   font-size: 12pt;
}

.jumbotron{
    /*background: url('../assets/img/backgroun.jpg') no-repeat center center;*/
    background-position: 0% 25%;
    background-size: cover;
    background-repeat: no-repeat;
    color: gray;
    background-color: #F5DA81;
}
.IndicadorRojo{
    color: #FF6961;
}
.IndicadorVerde{
    color: #779ECB;
}
.IndicadorAmarillo{
    color: #FFB347;
}

.anounce{
    font-family: Arial Black;
}

body.modal-open {
    overflow: visible;
}
/*
 .modal-open{ position: relative}
*/

#boton_consultar {    
  
  margin-top: 20px;
  margin-right: auto;
}
       
.vertical-align{
    display:table-cell;
    vertical-align:middle;
} 

.grid *{
    display: inline-block;
}

#normal{
    border-radius: 3px;
    padding: 10px;
    height: 90px;
    width: 300px;
}
#info-message{
    font-size: 90%;
    
}
#info-title{
    color: rgb(51, 51, 51);
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}
#info-icon{
    height: 60px;
    width: 60px;
    margin-right: 12px;
}

#normal-minimalist{
    background-color: rgb(241, 242, 240);
    border-color: rgba(149, 149, 149, 0.3);
    border-radius: 3px;
    color: rgb(149, 149, 149);
    padding: 10px;
}
#minimalist-icon{
    height: 60px;
    width: 60px;
    margin-right: 12px;
}
#minimalist-title{
    color: rgb(51, 51, 51);
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}
#minimalist-message{
    font-size: 80%;
}
</style>

<template>	
	<div class="container">
    <br><br><br>
    <button v-on:click="cambiaEstado">Cambiar</button>
    <!--Despliega los servicios y puede consultar la dispobilidad coloreando el calendario-->
    <div id="servicio_disponibilidad">
        <div class="row form-group">
            <div class="col-md-8">
                <div>
                <label>Servicio:</label>
                <select class="form-control" id="servicio_select" v-model="servicio_consulta">
                    <option v-for="servicio in servicios" :value="servicio.id">{{servicio.nombre}}</option>
                </select>
                </div>
            </div>

            <div class="col-md-4 boton-wrapper">
                <button class="btn btn-info" id="boton_consultar" v-on:click="servicioDisponibilidadColoreado(true,null)" >Consultar Disponibilidad</button>
            </div>
        </div>
 
  </div>
  <div v-if="actualizando_coloreado" align="center">
        <i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i> Actualizando calendario ...
   </div>


   
    <div class="panel panel-default">
  <div class="panel-heading">
     <div v-if="servicio_consulta" class="grid" align="center">
    <div><span class="glyphicon glyphicon-stop IndicadorVerde"></span><span class="LabelIndicador">Alta disponibilidad</span></div>
    <div><span class="glyphicon glyphicon-stop IndicadorAmarillo"></span> <span class="LabelIndicador">Poca disponibilidad</span></div>
    <div><span class="glyphicon glyphicon-stop IndicadorRojo"></span> <span class="LabelIndicador">Sin disponibilidad</span></div>

    </div>
    <div v-if="!agendarcita_status_neutral" align="center">
        <div v-if="agendarcita_status_exitoso" class="alert alert-success">
            <i class="fa fa-check"></i>
            <span >Cita correctamente agendada </span>
        </div>
    </div>
  </div>
  
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
          <h4 class="modal-title" id="exampleModalLabel">{{diaClickeado}}</h4>
        </div>
        <div class="modal-body">
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

                <label for="message-text" class="form-control-label">Servicio</label>
            	<select class="form-control" v-model="tipo_id">
                	<option v-for="servicio in servicios" :value="servicio.id">
                		{{ servicio.nombre }}
                	</option>
				</select>
                
            </div>
<!-- Hora -->
            <div class="form-group">
                <label for="message-text" class="form-control-label"><i v-if ="horas_disponibilidad_cargando" class="fa fa-spinner fa-pulse fa-fw"></i>Hora:</label>

                <select class="form-control" v-model="fecha_inicio" name="fecha_inicio" v-if="(hours.length > 0) && (hours_no_disponibilidad == false)">
                <option value=""  disabled>Selecciona una hora</option>
                <option v-for="hour in hours" :value="hour.value">
                        {{ hour.text }}
                </option>
            </select>
            <select v-if="(hours.length == 0) && (hours_no_disponibilidad == false)" class="form-control" name="fecha_inicio" disabled>
            </select>
            <select v-if="hours_no_disponibilidad" class="form-control" name="fecha_inicio" disabled>
                <option><i class="fa fa-calendar-times-o" aria-hidden="true"></i> Sin disponibilidad de horario</option>
            </select>

            </div>            
        </div>
        <div class="modal-footer">
            <div v-if="!agendarcita_status_neutral" align="center">
                <div v-if="agendarcita_status_agendando" class="alert alert-info">
                   <i class="fa fa-cog fa-spin  fa-fw"></i>
                   <span>Agendando cita...</span>
                </div>

                <div v-if="agendarcita_status_exitoso" class="alert alert-success">
                   <i class="fa fa-check"></i>
                   <span >Cita correctamente agendada </span>
                </div>

                <div v-if="agendarcita_status_error" class="alert alert-danger">
                   <i class="fa fa-times"></i>
                   <span >Ocurrió un o más errores agendando la cita:  </span>
                   <ul>
                    <li v-for="error in agendarcita_error_mensaje">
                        {{error}}
                    </li>
                   </ul>
                </div>
            </div>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" v-on:click="sendCalendarJSON">Agendar Cita</button>
        </div>
      </div>
</div>
</div>
<!-- FIN MODAL -->

<!-- reagendar modal -->
	<div id="segundoModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header" id="eventContent" title="Event Details">
                <button type="button" class="close" v-on:click="cerrarModalCita" data-dismiss="modal"><span aria-hidden="true">&times;</span> <span class="sr-only">cerrar</span></button>
                <h4 class="modal-title">
                    {{event_selected_servicio}}

                </h4>
                
            </div>
            <div id="modalBody" class="modal-body">
                Cliente : {{event_selected_cliente_nombre}}
                <br>
                Codigo de Cita : {{event_selected_codigo}}
                <br>
                Telefono : {{event_selected_cliente_telefono}}
                <br>
                Correo Electrónico : {{event_selected_cliente_email}}
                <br>
                Hora de Inicio : {{event_selected_hora_inicio}}
                <br>
                Hora de Finalización : {{event_selected_hora_final}}


                <div v-if="reagendar">
                        <div class="form-group">             
                            <label for="message-text" class="form-control-label">Servicio</label>
                            <select class="form-control" v-model="event_selected_servicio_id">
                            <option v-for="servicio in servicios" :value="servicio.id">
                               Servicio :  {{ servicio.nombre }}  Duracion : {{servicio.duracion}}
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
                    
                     <div class="form-group">             
                            <label for="message-text" class="form-control-label">Fecha</label>
                            <input type="text" id="datepicker" class="form-control" :value="event_selected_fecha">
                    </div>
                </div>
            </div>
            <div class="modal-footer" v-if="!reagendar">

                <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="cerrarModalCita">Cerrar</button>
                <button class="btn btn-warning" v-on:click="activarReagendar">Reagendar</button>
            </div>
            <div class="modal-footer" v-else>
                <button type="button" class="btn btn-default" v-on:click="cerrarModalCita">Cancelar</button>
                <button class="btn btn-danger"  v-on:click="reagendarCita">Realizar cambios</button>


            </div>
        </div>
    </div>
</div> 
<!-- fin segundo modal -->
	</div>
</template>	

<script>
import 'fullcalendar';
import 'fullcalendar/dist/locale/es.js';
/*
Aceddiendo a las variables de VUEX : this.$store.state.nombre_de_tu_variable
ejemplo : this.$store.state.calendario_id 
*/
    export default {
    	name:'dashboard',
    	data: function(){
    		return {

    			citas: [],
                diaClickeado: '',
                muestraCita: false,
                nombreActual: '',
                servicioActual: '',
                finalActual: '',
          		calendario_id: 1,
          		tipo_id: '',
          		fecha_inicio: '',
          		fecha_final: '',
          		cliente_nombre: '',
          		cliente_telefono: '',
          		cliente_email: '',
          		hora_cita: '',
                agendarcita_status_neutral : true,
                agendarcita_status_agendando : false,
                agendarcita_status_exitoso : false,
                agendarcita_status_error : false,
                agendarcita_error_mensaje : [],
    			date_selected : '',
                servicios : [],
                event_selected_id : null,
                event_selected_cliente_nombre : '',
                event_selected_hora_inicio : '',
                event_selected_fecha : new Date(),
                event_selected_hora_final : '',
                event_selected_cliente_email : '', 
                event_selected_cliente_telefono  : '',
                event_selected_servicio : '',
                event_selected_servicio_id : 0,
                event_selected_codigo : null,
    			hours:[],
                hours_no_disponibilidad : false,
                reagendar : false,
                disponibilidad_servicio : [],
                servicio_consulta : '',
                no_laborales : [],
                actualizando_coloreado : false,
                horas_disponibilidad_cargando : false,
    		}
    	},
    	mounted(){
            //var vm = this;
            this.fetchDatas(); 
            this.resetModal();
            this.sockets();
            //alert(this.$store.state.variable_prueba);     
    	},
        watch : {
            'tipo_id' : function(){
                if(this.tipo_id == null) return;
                var tipo_id = this.tipo_id;
                var fecha = this.date_selected;
                this.servicioHorasDisponibles(tipo_id,fecha);
            },
            'event_selected_fecha' : function(){
                var tipo_id = this.event_selected_servicio_id;
                var fecha = this.event_selected_fecha;
                if(tipo_id != "")this.servicioHorasDisponibles(tipo_id,fecha);
            },
            'event_selected_servicio_id' : function(){
                if(this.event_selected_servicio_id == null) return;
                var tipo_id = this.event_selected_servicio_id;
                var fecha = this.event_selected_fecha;
                this.servicioHorasDisponibles(tipo_id,fecha);
                if(this.reagendar) this.servicioDisponibilidadColoreado(false,tipo_id);
            },            
        },
    	methods : {
            cambiaEstado: function(){
                console.log("entrando");
                if(this.muestraCita == true){
                    this.muestraCita = false;
                }
                else{
                    this.muestraCita = true;
                }
            },
            notiTrue: function(paciente, servicio, actual, msFinalizacion){
                console.log("Paciente: "+paciente);
                console.log("Servicio: "+servicio);
                console.log("Final: "+actual);
                $.notifyDefaults({
                    type: 'minimalist',
                    icon_type: 'image',
                    template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert" id="normal-minimalist">' +
                        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                        '<img data-notify="icon" class="img-circle pull-left" id="minimalist-icon">' +
                        '<span data-notify="title" id="#minimalist-title">{1}</span>' +
                        '<span data-notify="message" id="minimalist-message">{2}</span>' +
                    '</div>',
                    allow_dismiss: true,
                    delay: msFinalizacion,
                    placement: {
                        from: 'bottom',
                        align: 'right'
                    }
                });
                $.notify({
                    icon: 'http://icon-icons.com/icons2/567/PNG/512/clock_icon-icons.com_54407.png',
                    title: '',
                    message: '<label>Atendiendo a: '+paciente+'</label><br> <label>Servicio de: '+servicio+'</label><br> <label>Cita termina a las: '+actual+'</label>'
                });
            },
            notiFalse: function(){
                $.notifyDefaults({
                    type: 'info',
                    icon_type: 'image',
                    template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert" id="normal">' +
                        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                        '<img data-notify="icon" class="img-circle pull-left" id="info-icon">' +
                        '<span data-notify="title" id="info-title">{1}</span>' +
                        '<span data-notify="message" id="info-message">{2}</span>' +
                    '</div>',
                    allow_dismiss: true,
                    delay: 0,
                    placement: {
                        from: 'bottom',
                        align: 'right',
                    }
                });
                /**/
                $.notify({
                    icon: 'https://cdn0.iconfinder.com/data/icons/customicondesign-office6-shadow/256/doctor.png',
                    title: '',
                    message: 'El doctor se encuentra disponible en estos momentos'
                });
            },
            sockets : function(){
                var vm = this;
                 vm.$store.state.socket.on('reagendar_cita', function(data) {
                //alert("Nueva cita! ");
                vm.fetchDatas();
              });
            },
            resetModal : function(){
                var vm = this;

                $('#calendarModal').on('hidden.bs.modal', function (e) {
                    vm.event_selected_servicio_id = null;
                    vm.fecha_inicio = null;
                    vm.hours = [];
                    vm.cliente_nombre  = null;
                    vm.cliente_telefono = null;
                    vm.cliente_email = null;
                    vm.tipo_id = null;
                    console.log("Ok " + vm.cliente_nombre);

                    });

            },
            getMethodCalc: function(){
                for(var i=0 ; i < this.citas.length; i++ ){
                //se guarda en una variable cita la cita que se està recorriendo 
                var cita = this.citas[i];
                // si la cita no està registrada en vuex 
                if(!this.$store.state.citas_programadas[cita.id]){
                    this.$store.commit('agregarCitaProgramada', {
                        cita: cita
                    });
                    //settimeout                    
                    this.calcMs(cita);
                    }
                }
            },

            calcMs: function(citasArray){
                var msTotal;
                var vm = this;
                    var fechaActual =  new Date();
                    var fechaCita = new Date(citasArray.start);
                    var fechaFinalCita = new Date(citasArray.end);
                    var msHastaHoy = fechaActual.getTime();
                    var msCitaInicio = fechaCita.getTime();
                    var msFechaFinal =fechaFinalCita.getTime();
                    var msFechaFinalTotal = msFechaFinal - msHastaHoy;                 
                    //milisegundos que faltan para la cita   
                    msTotal = msCitaInicio - msHastaHoy;
                    //si los milisegundos totales son mayores a cero
                if(msTotal>0){
                    this.muestraCita = this.muestraCita;
                //proximo cliente: se programa la proxima cita
                    setTimeout(function() {
                    vm.nombreActual = citasArray.cliente_nombre;
                    vm.servicioActual = citasArray.title;
                    vm.finalActual = moment(citasArray.end).format("HH:mm:ss");
                    vm.muestraCita = true;
                    }, msTotal);

                    setTimeout(function(){
                        vm.muestraCita = false;
                        this.notiTrue(vm.nombreActual, vm.servicioActual, vm.finalActual, msFechaFinalTotal);
                    }, msFechaFinalTotal);
                }
                //cliente actual: se muestran los datos del cliente actual
                else{
                    if(msHastaHoy < msFechaFinal){                           
                        //this.laHoraDehoy = fechaActual;
                        //this.laHoraFinal = fechaFinalCita;
                        /*En caso de que exista una cita ya ejecutandose que se muestre directamente*/
                        setTimeout(function() {
                        vm.nombreActual = citasArray.cliente_nombre;
                        vm.servicioActual = citasArray.title;
                        vm.finalActual = moment(citasArray.end).format("HH:mm:ss");
                        vm.muestraCita = true;            
                    }, 0);

                    console.log("ms: "+msFechaFinal);
                        setTimeout(function() {
                        vm.nombreActual = '';
                        vm.servicioActual = '';
                        vm.finalActual = '';
                        vm.muestraCita = false;
                    }, msFechaFinalTotal);
                    
                }
            }
        },

            closeSesion: function(){
              var vml = this;
              vml.$store.commit('logout', {
                    vm: vml
              });
              

            },
            
            formatoFecha: function(d){
                var ymd = d.getFullYear() +'-';
                        ymd +=  (d.getMonth()<9) ? ("0"+ (d.getMonth()+1)) : (d.getMonth()+1);
                        ymd+= "-"; 
        
                        if(d.getDate()<10) ymd+="0"+ d.getDate();
                        else  ymd+=d.getDate();
                return ymd;
            },
            activarReagendar : function(){
                this.reagendar = true;
                var thisObj  = this;
                thisObj.servicioDisponibilidadColoreado(false,this.event_selected_servicio_id);
            },

            AlertDisplay: function(){
                $.alert({
                title: '¡Éxito!',
                content: 'Los cambios han sido aplicados'
                });                
            },

            reagendarCita : function(){
                var datas  = {'id_cita' : this.event_selected_id,'tipo_id' : this.event_selected_servicio_id,'calendario_id' : this.$store.state.calendario_id,'fecha_inicio' : this.fecha_inicio};
                    this.$http.put('cita-r',datas).then(
                    //success

                    function(response){
                        this.AlertDisplay();
                    },

                    function(response){
                        
                        console.log("Success");

                    },
                    //error
                    function(response){
                      console.error("Error :(");
                    });
            },
            cerrarModalCita : function(){
                this.reagendar = false;
            },
            crearCalendario : function(){
                    var thisObj = this;
                    var availableDates = [];
                for (var i = 0; i < this.disponibilidad_servicio.length; i++) {
                   availableDates.push( this.disponibilidad_servicio[i].fecha);
                };

            $( "#datepicker" ).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date(), 
                    onSelect: function () {
                        thisObj.event_selected_fecha = $.datepicker.formatDate("yy-mm-dd", $(this).datepicker('getDate'));
                    },
                    beforeShowDay: function(d) {
                        var ymd = d.getFullYear() +'-';
                        ymd +=  (d.getMonth()<9) ? ("0"+ (d.getMonth()+1)) : (d.getMonth()+1);
                        ymd+= "-"; 
        
                        if(d.getDate()<10) ymd+="0"+ d.getDate();
                        else  ymd+=d.getDate();

                       
                        var disponibilidad = thisObj.buscarPorDisponibilidad(ymd);
                        
                        if ( disponibilidad != false) {
                                switch(disponibilidad.disponibilidad)
                                {
                                    case 1 : {
                                        return [true, "disponibilidad-alta"]; 
                                    }break;                                
                                    case 2: {
                                        return [true, "disponibilidad-media"]; 
                                    }break;
                                    case 3 : {
                                        return [true, "disponibilidad-baja"]; 
                                    }
                                    default : {
                                        return [true, "disponibilidad-alta"]; 
                                    }

                                }

                            
                        } else{
                                return [true, "disponibilidad-alta"]; 
                        }
                    }
                    });
             

            },
            buscarPorDisponibilidad : function(fecha){
                var disponibilidad = $.grep(this.disponibilidad_servicio, function(e){ return e.fecha == fecha; });
                if(disponibilidad.length > 0 ) return disponibilidad[0];
                else return false;


                    },

            /*
                flag -> es para verificar si el calendario se hara en el principal
                o en el picker cuando se reagenda 
                true = principal 
                false = picker reagendar
            */

            servicioDisponibilidadColoreado : function(flag,datas_foreign){
                    var vm = this;
                    var datas = null;
                    vm.actualizando_coloreado = false;
                    if(flag) {
                        datas = {'tipo_id' : vm.servicio_consulta,'calendario_id' : vm.$store.state.calendario_id};
                        vm.actualizando_coloreado = true;
                    }
                    else{
                        datas = {'tipo_id' : datas_foreign,'calendario_id' : vm.$store.state.calendario_id};

                    }
                    console.log(datas);

                    vm.$http.get('disponibilidad',{params : datas}).then(
                        //success
                        function(response){
                            vm.actualizando_coloreado = false;

                            var disponibilidad = response.data.disponibilidades;
                            var disponibilidad_arr = [];
                            for(var i = 0 ; i < disponibilidad.length ; i++)
                            {
                                disponibilidad_arr[disponibilidad[i].fecha] = disponibilidad[i].disponibilidad;
                            }
                            vm.disponibilidad_servicio = disponibilidad_arr;
                            vm.no_laborales = response.data.no_laborales;

                            if(flag){
                                vm.createCalendar();
                                console.log("Crea calendario BUILDER !");
                            }
                            else vm.crearCalendario();

                        },
                        function(response){
                            vm.actualizando_coloreado = false;
                            console.error(response.status);
                        }
                        );
            },
            servicioHorasDisponibles : function(servicio_id,fecha){
                var vm = this;
                vm.hours_no_disponibilidad = false;
                vm.horas_disponibilidad_cargando = true;
                vm.hours = [];
                var dia;
                if(fecha)  dia = new Date(fecha).toISOString();
                
                this.$http.get('servicio-disponible',{params : {'tipo_id' : servicio_id, 'dia' : dia , 'calendario_id' : vm.$store.state.calendario_id}}).then(
                    //success
                    function(response){
                        if(response.data.length == 0) vm.hours_no_disponibilidad  = true;
                        vm.hours = response.data;
                        console.log(response.data);
                        vm.horas_disponibilidad_cargando = false;
                    },
                    //error
                    function(response){
                        vm.hours = [];
                        vm.horas_disponibilidad_cargando = false;
                    }

                    );
            },

    		sendCalendarJSON: function(event){

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
				  
				}


    			this.errorMessage='';
                var thisObj = this;
    			var dia_seleccionado = this.date_selected;

    			var dateformat = new Date(this.fecha_inicio);       			
    			var fecha_final = this.addMinutes(dateformat,servicio.duracion);
                
                var fecha_final = moment(fecha_final).format("YYYY-MM-DD HH:mm:ss");
                console.log(fecha_final);
                
    			var calendarInformation = {
    				"calendario_id": this.calendario_id,
    				"tipo_id": servicio.id,
    				"fecha_inicio": this.fecha_inicio,
    				"fecha_final": fecha_final,
    				"cliente_nombre": this.cliente_nombre,
    				"cliente_telefono": this.cliente_telefono,
    				"cliente_email": this.cliente_email
    			};    			
    			var objThis = this;
                $(event.target).attr('disabled',true);

                thisObj.agendarcita_status_neutral = false; 
                thisObj.agendarcita_status_agendando = true;
                thisObj.agendarcita_status_exitoso = false; 
                thisObj.agendarcita_status_error = false;
                thisObj.agendarcita_error_mensaje = [];

    			this.$http.post('cita', calendarInformation).then(
						//success
						function(response){

                        thisObj.agendarcita_status_agendando = false;
                        thisObj.agendarcita_status_exitoso = true;

                        $(event.target).attr('disabled',false);
                        thisObj.cliente_nombre = "";
                        thisObj.cliente_telefono = "";
                        thisObj.cliente_email = "";
                        $("#calendarModal").modal('hide');
						  thisObj.fetchDatas();
                          setTimeout(function() {
                            thisObj.agendarcita_status_exitoso = false;
                            thisObj.agendarcita_status_neutral = true;
                          }, 4000);
						},
						//error
						function(response){		
                        $(event.target).attr('disabled',false);	
                        thisObj.agendarcita_status_agendando = false;	
                        thisObj.agendarcita_status_error = true;

						  
                          switch(response.status)
                          {
                            case 500 : 
                            {
                                thisObj.agendarcita_error_mensaje = ["Ocurrió un error en el servidor, intente más tarde o contacte al administrador del sistema"];
                            }break;

                            case 400 : 
                            {
                                var errores_tpm = [];

                                for(var error in response.data.errors)
                                {
                                    console.log("Error "+ response.data.errors[error]);
                                    for(var internal_error in response.data.errors[error])
                                            errores_tpm.push(response.data.errors[error][internal_error]);
                                }
                                thisObj.agendarcita_error_mensaje = errores_tpm;


                            }break;
                            case 404 : 
                            {
                                thisObj.agendarcita_error_mensaje = ["Ya existe una cita para esta hora y fecha, elija otra hora o fecha"];

                            }break;

                            
                            default : {
                                thisObj.agendarcita_error_mensaje = ["Ha ocurrido un error inesperado, intente más tarde"];
                            }
                          }	
						 
						});
    		},
    		addMinutes : function(date,minutes){

    			return new Date(date.getTime() + minutes*60000);

    		},
            createCalendar : function(){

            	var vm = this;
                try{
                    $('#calendar').fullCalendar('destroy');
                    console.log("Calendario destruido! ");
                }
                catch(err){
                    console.log("Error " + err);
                }
            $('#calendar').fullCalendar({                

            dayClick:  function(date, jsEvent, view){
                var date2 = moment(date).format("YYYY-MM-DD");
                var today = moment().format("YYYY-MM-DD");
                
                //moment(fecha_final).format("YYYY-MM-DD HH:mm:ss");
                if(!(date2 >= today)) return;

                vm.diaClickeado = date2;
                vm.date_selected = date;
            	$('#calendarModal').modal('show');
            	$('.modal').on('hidden.bs.modal', function(){ 
					$("label.error").remove();  //lo utilice para borrar la etiqueta de error del jquery validate
	           });
        },
                

        	//FUNCION PARA MOSTRAR LOS DATOS DE UN EVENTO CREADO
        	eventClick: function(event, jsEvent, view, start, end){
                vm.event_selected_id = event.id;
                vm.event_selected_servicio = event.title;
                vm.event_selected_cliente_nombre = event.cliente_nombre;
                vm.event_selected_cliente_telefono = event.cliente_telefono;
                vm.event_selected_cliente_email = event.cliente_email;
                vm.event_selected_hora_inicio = event.start;
                vm.event_selected_hora_final = event.end;
                vm.event_selected_codigo = event.codigo;
                vm.event_selected_servicio_id = vm.buscarPorServicio(event.title);
                var tmpDate = new Date(event.start);
                vm.event_selected_fecha = vm.formatoFecha(tmpDate);


        		$('#modalTitle').html(event.title);
            	$('#idEvento').html(event.id);        		
            	$('#segundoModal').modal();
        	},

            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            
            navLinks: true, // can click day/week names to navigate views
            selectable: true,
            selectHelper: true,
            eventStartEditable: false,
     
            dayRender: function (date, cell) {
                    if(vm.servicio_consulta == '') return;
                        var disponibilidad = vm.disponibilidad_servicio[moment(date).format("YYYY-MM-DD")];
                        if(disponibilidad)
                        {
                            switch(disponibilidad)
                            {
                                case 1: cell.css("background-color", "#A5DBEB");
                                break;
                                case 2: cell.css("background-color", "#FFFF84");
                                break;
                                case 3: cell.css("background-color", "#FF7575"); 
                                break;

                            }
                        }
                        else{
                            
                            var date_d  = moment(date).format("YYYY-MM-DD");
                            var today = moment(new Date()).format("YYYY-MM-DD");
                            if(date_d < today)  cell.css("background-color", "#F5F5F5");
                            else cell.css("background-color", "#A5DBEB");

                        }


                        
                        },
            editable: false,
            eventLimit: true, // allow "more" link when too many events
            events: this.citas
            
        })

            },
            timeFormat: 'H(:mm)',
            buscarPorServicio : function(servicio){
                var servicio = $.grep(this.servicios, function(e){ return e.nombre == servicio; });
                if(servicio.length > 0 ) return servicio[0].id;
                else return 0;
            },
    		fetchDatas : function(){
             
          var thisObj = this;
    			this.$http.get('dashboard', { progress(e) {
        if (e.lengthComputable) {
            //console.log("porcentaje: "+ (e.loaded / e.total * 100) );
            thisObj.$store.commit('aumentarPorcentaje', {
                        porcentaje: (e.loaded / e.total * 100)
                    });            
        }
            }}).then(
    				//success
    				function(response){
    					this.citas = response.data.citas;
              console.log(this.citas);
                      this.servicios = response.data.servicios;
                        thisObj.createCalendar();
                        thisObj.getMethodCalc();
                    },
    				//error
    				function(response){
    					console.log("Error :( "+response.status);
                       
    				});
    		}
    	}

    }
</script>

