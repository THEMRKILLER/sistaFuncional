import {router} from '../main.js'

export default {

    // authentication status
    authenticated: false,

   
    // To log out
    logout: function() {
        localStorage.removeItem('token');
        this.authenticated = false;
        router.push('/admin')
    },
    refreshToken : function(){

    },
    handleError : function(response)
    {
    	

    }
}