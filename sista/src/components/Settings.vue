<template>

<div>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">
        <img alt="Medilab" src="../assets/img/logo2.png" class="img-responsive">
      </a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <!-- DATOS DEL NAVBAR -->
          </ul>
        </li>
      </ul>      
    </div>
  </div>
</nav>

<ul class="nav nav-tabs nav-justified" >
      <li class="active"><a data-toggle="tab" href="#servicios" >Servicios</a></li>
      <li><a data-toggle="tab" href="#horarios" >Horarios</a></li>
  </ul>
  <div class="tab-content">
    <div id="servicios" class="tab-pane fade in active">
      <div class="panel panel-default">
      <div id="servicios" class="panel-heading">
        <h3>Servicios</h3>
    
        <servicios></servicios>
   
      </div>
      </div>
    </div>

    <!-- segunda vista -->
    <div id="horarios" class="tab-pane fade">
    <div class="panel panel-default">
      <h3>Ajustar Horarios</h3>
      <h1>.|.</h1>
      </div>
    </div>
  </div>

</div>

</template>
<script>

export default {
  name: 'hello',
  data () {
    return {      
    }
    
    },
}
</script>