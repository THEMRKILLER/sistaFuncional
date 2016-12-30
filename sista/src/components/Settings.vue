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
        <li class="active"><a data-toggle="tab" href="#servicios" v-on:click="ClickHorario = !ClickHorario">Servicios</a></li>
        <li><a data-toggle="tab" href="#horarios" v-on:click="ClickHorario = !ClickHorario">Horarios</a></li>
          </ul>
        </li>
      </ul>      
    </div>
  </div>
</nav>

<div class="panel panel-default" id="hide_s">
  <div id="servicios" class="panel-heading" v-if="ClickHorario">
    <transition name="slide-fade">
      <h3>Servicios</h3>
    </transition>
    <servicios></servicios>
   
  </div>
  <!-- VISTA DE LOS HORARIOS -->
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
      el: '#hide_s',
      ClickHorario: true,
      //showServicio: true
    }
    
    },
    /*Ext.define('Override.tab.Bar',{
      override: 'Ext.tab.Panel',
      initialize: function(){
        var me = this;

        me.callParent();
        me.on({
          scope: me,
          delegate : '> component',
          disabledchange : 'onItemDisabledChange'
        });
      },
      onItemDisabledChange : function(component, newValue){
        var tab = component.tab;
        tab.setDisabled(newValue);  
      }
    });
    */
}
</script>