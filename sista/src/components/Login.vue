<template>
	<div class="container">
		<div class="card card-container">
			<img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png">
			<p id="profile-name" class="profile-name-card"></p>

			<!-- formulario -->
			<div class="form-signin" :class="errors.has('email') ? 'has-error' : ''">
				<span id="reauth-email" class="reauth-email"></span>
				<input v-validate data-vv-rules="required|email" name="email" type="email" id="inputEmail" class="form-control" placeholder="Correo electronico"  autofocus v-model="email">
				<span v-show="errors.has('email')" class="has-error">
					<strong>{{errors.first('email')}}</strong>
				</span>
			</div>

			<div class="form-signin" :class="errors.has('password') ? 'has-error' :''">
				<input v-validate data-vv-rules="required" :class="{'input' : true}" type="password" name="password" id="inputPassword" class="form-control" placeholder="Contraseña" v-model="password">
				<span v-show="errors.has('password')" class="has-error">
					<strong>{{errors.first('password')}}</strong>
				</span>
			</div>

				<div id="remember" class="checkbox">
					<label>
						<input type="checkbox" value="Recordarme" name="remember" v-model="remember"> Recordarme
					</label>
				</div>

			<div class="form-signin">
				<button class="btn btn.lg btn-primary btn-block btn-signin" type="submit" v-on:click="sendDatos">Iniciar sesión</button>
			</div>
			
			<a href="#" class="forgot-password">¿Olvidaste la contraseña?</a>
		</div>
	</div>

</template>


<script>
import '../assets/css/loginCSS.css'

    export default {
    	data : function(){
    		return	{
    					email: '',
    					password: '',
    					remember: false,
    					isError : false,
    					errorMessage  : ''
    			}
    	},
    	methods: {
    		sendDatos: function(){
    			var information = {
    				"email" : this.email, 
    				"password" : this.password,
    				"remember" : this.remember
    			};
    			var objThis = this;
    			this.$http.post('http://192.168.0.14/Sista/public/api/v1/login', information).then(
						//success
						function(response){
							objThis.servidordatos = response.data;
							console.log(response.data);

							//console.log(dataCollected);
						},
						//error
						function(response){							
							
							if(response.status == 401){

								objThis.isError = true;
								objThis.errorMessage ="Ha ocurrido un error: " + response.status;

							}
							//console.log(response.data);
						});
    		}
    	}
    }

</script>