<template>
	
<div>

    <div v-if="$store.state.header">
        <superheader></superheader>
    </div>	
    <div v-else><h1>NONONO</h1></div>

	<div>
<transition name="fade" mode="out-in">
     <router-view></router-view>
</transition>


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