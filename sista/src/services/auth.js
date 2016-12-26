import {router} from '../main.js'

export default {

    // authentication status
    authenticated: false,

   check : function(){

    
   },
    // To log out
    logout: function() {
        localStorage.removeItem('token');
        this.authenticated = false;
        router.push('/admin')
    }
}