import React from 'react';


const Buttons = (props)=> {
    let timeS = '';
    
    const time = (vuelta)=>{
            let ms = vuelta.time.ms > 9 ? vuelta.time.ms : `0${vuelta.time.ms}`;
            let s = vuelta.time.s > 9 ? vuelta.time.s : `0${vuelta.time.s}`;
            let m = vuelta.time.m > 9 ? vuelta.time.m : `0${vuelta.time.m}`;
            let h = vuelta.time.h > 9 ? vuelta.time.h : `0${vuelta.time.h}`;
            timeS = `${h}:${m}:${s}:${ms}`;
           
        return timeS}          
        
    // console.log(timeS)

    
    
    return(
        <>
            {props.isStop === "stopped" ? <div className="buttonsContainer"><button className = "stop" onClick = {props.handleStatus}><img className= "buttonIcon"alt= "Stop" src= "https://www.flaticon.com/svg/vstatic/svg/786/786479.svg?token=exp=1612804712~hmac=3a87f017f3b9ea32b43cdf7bfae59506"></img></button>
                                            <button className = "auxButton" onClick= {props.vuelta} >Vuelta</button>
                                          </div> :
             <div className="buttonsContainer">
                 <button className = "start" onClick = {props.handleStatus}><img className= "buttonIcon"alt ="Start" src = "https://www.flaticon.com/svg/vstatic/svg/1182/1182705.svg?token=exp=1612804775~hmac=2bf1eda7f7715fa9519d22d0853291be"></img></button>
                 <button className = "auxButton" onClick = {() => props.reset()}>Reset</button>
            </div>};
            {/* <button className = "Vuelta" onClick= {props.vuelta} >Vuelta</button> */}
            <ul>
                {props.vueltas.length > 0 ?  <li><h2>Vueltas</h2></li>: <li></li>}
               
                {
                    props.vueltas.map(vuelta =>

                        (<li key = {vuelta.id}>{vuelta.id +1}<img className= "clockIcon" alt = "clock-icon"src= "https://www.flaticon.com/svg/vstatic/svg/2055/2055568.svg?token=exp=1612803801~hmac=dc22371bdb97577fba00bfad1536fda9"></img>{time(vuelta)}</li>)
                    )
                }
            </ul>
            
             
        </>
    )
}

export default Buttons;