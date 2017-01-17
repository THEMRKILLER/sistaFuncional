<style>
@import url(https://fonts.googleapis.com/css?family=Oswald);
  #ajHorario, #naviTabs{
  font-family: 'Oswald', sans-serif;
  }
  
</style>

<template>

<div>
  <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><img src="../assets/img/logo2.png" class="img-responsive" style="width: 140px; margin-top: -16px;"></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href=""></a></li>            
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <br><br><br>

<ul class="nav nav-tabs nav-justified">
      <li class="active"><a id="naviTabs" data-toggle="tab" href="#servicios" >Servicios</a></li>
      <li><a id="naviTabs" data-toggle="tab" href="#horarios" >Horarios</a></li>
      <li><a id="naviTabs" data-toggle="tab" href="#fechas_inhabiles" >Fechas Inhabiles</a></li>
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

    <div id="fechas_inhabiles" class="tab-pane fade">
    <div class="panel panel-default container">
    <div class="panel-body">
 <h3>Fechas Inhabiles</h3>
        <fechaInhabil></fechaInhabil>
        </div>
      </div>
    </div>
    <!-- segunda vista -->
    <div id="horarios" class="tab-pane fade">
    <div class="panel panel-default container" style="max-width: 800px;">
      <div class="panel-body">
      <h3 id="ajHorario">Horarios en el sistema</h3>
      <horario></horario>
      </div>
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