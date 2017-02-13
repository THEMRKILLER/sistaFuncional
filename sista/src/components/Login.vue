<template>
	<div class="container">
		<div class="card card-container">
			<img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png">
			<p id="profile-name" class="profile-name-card"></p>

			<div v-if="errorMessage != ''" class="alert alert-danger">
				{{errorMessage}}
			</div>

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
import '../assets/js/loginjs.js';
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
    	
    	mounted(){
 			this.verificar();
    	},
    	methods: {
    		socket : function(){
              var vm = this;

              vm.$store.state.socket.emit('join', {'id_user' : vm.$store.state.calendario_id});
              vm.$store.state.socket.on('nueva_cita', function(data) {
                    alert("Nueva cita! ");
                  });
               vm.$store.state.socket.on('reagendar_cita', function(data) {
                    alert("Una cita se ha reagendado");
                  });

           

            },
            verificar : function(){
            	if(localStorage.getItem('token') != null)
            	{	
            		this.$router.push('dashboard');
            		
            	}
            	

            },
    		sendDatos: function(){
    			this.errorMessage = '';
    			var information = {
    				"email" : this.email, 
    				"password" : this.password,
    				"remember" : this.remember
    			};
    			var objThis = this;
    			this.$http.post('login', information).then(
						//success
						function(response){
							//se recibe el token de manera exitosa
							console.log(response.data);
							localStorage.setItem('token', response.data.token.token);
							localStorage.setItem('user_remember',true);

							this.$store.commit('setuser', {
								  user: response.data.user
								});
							this.$store.commit('setidcalendario', {
                      			calendario_id: response.data.calendario_id
                  			});

							this.socket();
							objThis.$router.push('/dashboard');


						},
						//error
						function(response){							
							
							if(response.status == 401){
								this.errorMessage = "Credenciales inválidas, verifique que el usuario y la contraseña sean correctos";

								

							}
							console.log(response.data);
						});
    		}
    	}
    }

</script>