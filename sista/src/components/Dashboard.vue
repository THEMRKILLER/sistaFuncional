
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
		

	</div>
</template>	



<script>


    export default {
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
            createCalendar : function(){
            $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2016-12-12',
            navLinks: true, // can click day/week names to navigate views
            selectable: true,
            selectHelper: true,
            select: function(start, end) {
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
            },
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
    			this.$http.get('http://localhost/Sista/public/api/v1/dashboard?token='+localStorage.getItem('token')).then(
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

