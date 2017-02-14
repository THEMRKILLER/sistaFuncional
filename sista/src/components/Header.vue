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
                    notification("Cita nueva creada");
                  });
                  vm.$store.state.socket.on('reagendar_cita', function(data) {
                    vm.notification("Una cita ha sido reagendada correctamente");
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
        notification: function(texto){
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
                        from: 'top',
                        align: 'right',
                    }
                });
                /**/
                $.notify({
                    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Checked.svg/1024px-Checked.svg.png',
                    title: '',
                    message: texto
                });
            },
        }

    }
</script>