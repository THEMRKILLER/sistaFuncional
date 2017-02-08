<style>
  .barra{
    /*color: black;*/
    /*background-color: yellow;*/
  }
</style>
<template>
	
<div>



    <div v-if="$store.state.header" style="z-index: 1;">
    <loading-bar
      :on-error-done="errorDone"
      :on-progress-done="progressDone"
      :progress="this.$store.state.progress"
      :direction="this.$store.state.direction"
      :error="this.$store.state.error" style="position: absolute; z-index: 19999;" 
      customClass = "barra"
      >
    </loading-bar >    
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

        methods: {
        progressTo: function (val) {
          this.$store.state.progress = val;
        },
        setToError: function (bol) {
          this.$store.state.error = bol;
        },
        changeDirection: function (direction) {
          if(this.$store.state.progress >= 0){
            this.$store.state.progress = 100;
          }
          this.$store.state.direction = this.$store.state.direction === 'right' ? 'left' : 'right';
        },
        // Callback
        errorDone(){
          this.$store.state.error = false
        },
        progressDone() {
          this.$store.state.progress = 0;
        },
        }

    }
</script>