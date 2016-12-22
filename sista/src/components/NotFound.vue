
<style type="text/css">
#div_404 { 
 background: #7474BF; /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #7474BF , #348AC7); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #7474BF , #348AC7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

 width:100%;

    /* Firefox */
    display:-moz-box;
    -moz-box-pack:center;
    -moz-box-align:center;

    /* Safari and Chrome */
    display:-webkit-box;
    -webkit-box-pack:center;
    -webkit-box-align:center;

    /* W3C */
    display:box;
    box-pack:center;
    box-align:center;
    margin-top: -20px;


}

#error{
	text-align: center;
	
}
#error h1{
	font-family: 'Patua One', cursive;
	font-size: 50px;
}
</style>
<template>

<div id="div_404">
<div class="container">
        <div class="col-md-15">
            <div class="panel panel-default">
                <div class="panel-heading" align="center">
                	<h4>Página no encontrada</h4>
                </div>
                <div class="panel-body" align="center" >

                	<div id="error">
	<h1>Eror 404</h1>
	                	<i class="fa fa-close fa-3x"></i>

	<h1><small>La página que estás tratando de buscar no existe</small></h1>


</div>

               </div>
           </div>
       </div>
  </div>


</div>



</template>

<script>
export default {
  mounted(){
  	var alto = $(window).height();
  	$('#div_404').css('height',alto+20);
  }
}
</script>