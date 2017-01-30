<template>
	
<div>
	

	<div>


    	
	<router-view></router-view>


    </div>
</div>


</template>



<script>
    export default {
    	name:	'header',
    	data()	{
    			return	{
    					msg: 'ok'
    			}     
    	},
          mounted(){
            var vm = this;
            if(localStorage.getItem('token') !== null)
            {
                vm.$store.state.socket.emit('join', {'id_user' : vm.$store.state.calendario_id});
                vm.$store.state.socket.on('nueva_cita', function(data) {
                    alert("Nueva cita! ");
                });
           

            }

          
            
            

        },

    }
</script>