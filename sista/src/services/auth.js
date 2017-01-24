import {router} from '../main.js'

export default {

    // authentication status
    authenticated: false,

   check : function(status,vm){
     switch(status)
                        {
                            case 401 : {
                                if(localStorage.getItem('remember_user') == true)
                                {
                                    vm.http.get('refresh_token').then(
                                        //sucess
                                        function(response){

                                            this.clearToken();

                                        },
                                        //error
                                        function(response){
                                            this.clearToken();
                                        });
                                }
                                else{
                                    this.clearToken();

                                }
                            }break;

                           
                        }    
    
   },
    // To log out
    clearToken : function(){
        localStorage.removeItem('token');
        this.authenticated = false;
        router.push('/admin')
    },
    logout: function(vm) {
        var thisObj = this;
        vm.http.post('logout').then(
            //success
            function(response){
                console.log("Logout success !");
                localStorage.removeItem('token');
                thisObj.authenticated = false;
                router.push('/admin')
            },
            //error
            function(response){
                console.log("Logout failed! ");
            }
            );
        
    }
}