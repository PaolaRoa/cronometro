//Definir las variables para mantener valores de tiempo

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

//Definir las variables para mantener valores (00)

let displayMilliSeconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Definir variable que mantiene la funcion setInterval()
let interval = null;

//Define variable que guarda el estado del boton detener
let status = "stopped";

//Funcion que contiene la logica que determina cuando incrementar el valor)

function stopWatch() {
    milliseconds++; //Incremento de segundo

    if (milliseconds / 100 === 1) {
        milliseconds = 0;
        seconds++;

        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;
        }
    }

    //Si segundos/minutos/horas son solamente un digito, agregue un cero inicial a las unidades
    if (milliseconds < 10) {
        displayMilliSeconds = "0" + milliseconds.toString(); //Metodo que convierte en string
    } else {
        displayMilliSeconds = milliseconds;
    }

    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString(); //Metodo que convierte en string
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString(); //Metodo que convierte en string
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString(); //Metodo que convierte en string
    } else {
        displayHours = hours;
    }


    //Mostrar tiempo actualizado al usuario

    document.getElementById("display").innerHTML = displayHours + ':' + displayMinutes + ':' + displaySeconds + ':' + displayMilliSeconds;
    //Mostrar en la pagina principal
}


//Funcion para boton Start/Stop
function startStop() {
    if (status === "stopped") {

        
        //Comenzar el cronometro (llamando la funcion setInterval())
        interval = window.setInterval(stopWatch, 10); //Temporizador (cada milisegundos que deseemos 
        //vamos a llamar a la funcion stopWatch que luego actualizará la hora)
        document.getElementById("startStop").innerHTML = '<i class="fa fa-stop" style="color: red;"></i>';
        status = "started";
    } else {

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = '<i class="fa fa-play" style="color: green;"></i>';
        status = "stopped";
    }
}

//Funcion para boton iniciar
function reset() {
    window.clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    //hours = 0;
    document.getElementById("display").innerHTML = "00:00:00:00";
    document.getElementById("startStop").innerHTML = '<i class="fas fa-play"></i>';
}