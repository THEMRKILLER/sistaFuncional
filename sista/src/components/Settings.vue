<template>
<div>
<ul class="nav nav-tabs nav-justified">
  <li class="active"><a data-toggle="tab" href="#servicios">Servicios</a></li>
  <li><a data-toggle="tab" href="#horarios">Horarios</a></li>
</ul>

<div class="tab-content">
  <div id="servicios" class="tab-pane fade in active">
    <h3>Servicios</h3>

    <servicios></servicios>
   
  </div>
  <div id="horarios" class="tab-pane fade">
    <h3>Ajustar Horarios</h3>
    <h1>.|.</h1>
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
  }
}
</script>