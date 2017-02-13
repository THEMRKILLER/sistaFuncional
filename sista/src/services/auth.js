import {router} from '../main.js'

export default {

    // authentication status
    authenticated: false,

   check : function(response,vm){

     switch(response.status)
                        {
                            case 401 : {
                                if(localStorage.getItem('remember_user') == true)
                                {
                                    vm.http.get('refresh_token').then(
                                        //sucess
                                        function(response){

                                            this.clearToken(vm);

                                        },
                                        //error
                                        function(response){
                                            this.clearToken(vm);
                                        });
                                }
                                else{
                                    this.clearToken(vm);

                                }
                            }break;

                            case 400 : {
                                if(response.data.error == 'token_not_provided')
                                {
                                    this.clearToken(vm);
                                }
                            }

                           
                        }    
    
   },
    // To log out
    clearToken : function(vm){
       
        localStorage.removeItem('token');
        this.authenticated = false;
        vm.state.socket.emit('leave', {'id_user' : vm.state.calendario_id});
        
        router.push('/admin');
    },
    logout: function(vm) {
        var vmauth = this;
        vm.$http.post('logout').then(
            //success
            function(response){
                vm.$store.commit('resetuser');
                vmauth.clearToken(vm.$store);
            },
            //error
            function(response){
                console.log("Logout failed! ");
            }
            );
        
    }
}