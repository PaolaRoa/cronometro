import React, {useState}from 'react';
import Contador from './Contador';

const Cronometro = () => {
    //variable que me guarda el tiempo en centesimas
    
    
    const [miliS, setmiliS] = useState(0)
    //estado que me define si el cronometro esta corriendo o esta detenido
    const [isStop, setStatus] = useState("running");
    //estado que me va a guardar el tiempo del cronometro
    const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0});
    //estado que me va a iniciar o terminar el intervalo del cronometro
    const [cronoInt, setCronoInt] = useState();

    let ms = time.ms;
    let s = time.s;
    let m = time.m;
    let h = time.h;

    

    // console.log(isStop)
    const handleStatus = ()=> {
        
        console.log(isStop)
        if (isStop === "running"){
            running();
            setStatus("stopped");
            
        }
        else{
            stopped()
            setStatus("running")           
        }
        console.log(time)

    
    }

    

    const running = () => setCronoInt(setInterval(stopWatch, 10));
    const stopped = () => setCronoInt(clearInterval(cronoInt))
    

   const stopWatch = ()=>{
        // time.ms += 1
        ms += 1;
        if (ms >=100){
            s += 1;
            ms = 0;
           
        }
        if (s > 59){
            m += 1;
            s = 0;
        }
        if (m > 59){
            h += 1;
            m = 0;
        }
    
        setTime({ms:ms, s:s, m:m, h:h})
        // let {mili, s, m, h} = time;
        // mili += 1
        // console.log(mili)
        // mil()
        // console.log(m)
        }
   

    return(
        <>
            <div id="screen">
                <div id="display">
                    <Contador time = {time} />
                </div>
            </div>
            <button onClick = {handleStatus}>{isStop === "stopped" ? 'stop' : 'start'}</button>
            <button onClick = {() => setTime({ms: 0, s: 0, m: 0, h: 0})}>Reset</button>
            <p>{stopWatch}</p>
        </>
    )
}

export default Cronometro;