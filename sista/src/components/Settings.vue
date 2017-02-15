<style>
@import url(https://fonts.googleapis.com/css?family=Oswald);
  #ajHorario, #naviTabs{
  font-family: 'Oswald', sans-serif;
  }
  
  #tabla3{ 
   border: 1px solid #80A93E; 
   width: 200px; 
} 
#cabtab3{ 
   background-color: #B7F259; 
   font-weight: bold; 
   font-size: 8pt; 
   padding: 2 2 2 2px; 
} 
#cuerpotab3{ 
   font-size: 8pt; 
   padding: 4 4 4 4px; 
   background-color: #F5ECB9; 
} 
#cuerpotab3 ul{ 
   margin: 0 2 0 20px; 
   padding: 0 0 0 0px; 
} 
#cuerpotab3 li{ 
   margin: 0 2 0 2px; 
   padding: 0 0 0 0px; 
}

  
</style>

<template>

<div>
    <br><br><br>
    
<ul class="nav nav-tabs nav-justified">
      <li class="active"><a id="naviTabs" data-toggle="tab" href="#horarios" >Horarios</a></li>
      <li><a id="naviTabs" data-toggle="tab" href="#fechas_inhabiles" >Fechas Inhabiles</a></li>
  </ul>
  <div class="tab-content">
    <div id="horarios" class="tab-pane fade in active">
      <div class="panel panel-default">
      <div id="horarios" class="panel-heading">
        <h3>Horarios</h3>
    
        <horario></horario>
   
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
    mounted(){
      this.$store.commit('onresize');

    },

    methods: {
      
    }
}
</script>