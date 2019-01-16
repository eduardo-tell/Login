window.onload = function(){

   // Declarando as variaveis
   var bemVindo = document.getElementById('bemVindo');
   var msgBemVindo = document.getElementById('msgBemVindo');
   var msgDois = document.getElementById('msgDois');
   msgDois.style.opacity = 0;

   // Primeira mensagem
   fadeIn( msgBemVindo, 3 );
   setTimeout(function(){ fadeOut(msgBemVindo, 1) }, 2000);

   // Segunda mensagem
   setTimeout(function(){
      fadeIn( msgDois, 3 );
      setTimeout(function(){ fadeOut(bemVindo, 2) }, 3000);
   }, 3000);

   // Limpando a casa rsrs
   setTimeout(function(){
      bemVindo.style.display = "none";
   }, 9000);
   
   
}

// Efeitos
function fadeIn(element, time){
   processa(element, time, 0, 100);
}

function fadeOut(element,time){
   processa(element, time, 100, 0);
}

// Processo das opções
function processa(element,time,initial,end){
   if(initial == 0){
      increment = 2;
   }else {
      increment = -2;
   }

   opc = initial;

   intervalo = setInterval(function(){
   if((opc == end)){
      clearInterval(intervalo);
   }else {
      opc += increment;
      element.style.opacity = opc/100;
      element.style.filter = "alpha(opacity="+opc+")";
   } },time * 10);
}
