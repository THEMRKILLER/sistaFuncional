<style>
  .barra{
    /*color: black;*/
    /*background-color: yellow;*/
  }
</style>
<template>
	
<div id="header_root">

  <loading-bar
      :on-error-done="errorDone"
      :on-progress-done="progressDone"
      :progress="this.$store.state.progress"
      :direction="this.$store.state.direction"
      :error="this.$store.state.error" style="position: absolute; z-index: 19999;" 
      customClass = "barra"
      >
    </loading-bar >  
      
    <div id="headers">
      <div v-if="$store.state.header" style="z-index: 1;">
        <superheader></superheader>
      </div>	
    
    </div>

	<div id="viewer">
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
              if(vm.$store.state.user === null)vm.getUserDatas(); 
            vm.onresize();
             
            
        },
        watch : {
 '$store.state.user' : function(){
      var vm = this;
      setTimeout(function() {
        vm.$store.commit('onresize');
      }, 30);
    }
        },

        methods: {
          getUserDatas : function(){
              var vm = this;
              vm.$http.get('user').then(
                //success
                function(response){
                  console.log(response.data.user);
                  vm.$store.commit('setuser', {
                    user: response.data.user
                  });
                   this.$store.commit('setidcalendario', {
                      calendario_id: response.data.calendario_id
                  });
                  vm.$store.state.socket.emit('join', {'id_user' : vm.$store.state.calendario_id});
                  vm.$store.state.socket.on('nueva_cita', function(data) {
                    alert("Nueva cita! ");
                  });
                  vm.$store.state.socket.on('reagendar_cita', function(data) {
                    alert("Una cita se ha reagendado");
                  });
            
                },
            //error
            function(response){}

        );
      },
        onresize : function(){
            var vm = this;
          
            window.addEventListener('resize', function(){
              

            vm.$store.commit('onresize');


          }, true);
        },
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