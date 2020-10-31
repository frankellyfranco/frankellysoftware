var contador = new Date("Jan 29, 2021 00:00:00").getTime();

var x = setInterval(function(){

    var now = new Date().getTime();
    var distancia = contador - now;

    var dia = Math.floor(distancia / (1000 * 60 * 60 * 24));
    var hora = Math.floor(distancia % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutos = Math.floor(distancia % (1000 * 60 * 60) / (1000 * 60));
    var segundos = Math.floor(distancia % (1000 * 60) / (1000));
    
    document.getElementById("tiempo").innerHTML = dia + "d " + hora + "h " + minutos + "m " + segundos + "s ";

              if(distancia < 0){
                  clearInterval(x);
                  document.getElementById("tiempo").innerHTML = "Falta poco";
              } 
}, 1000);