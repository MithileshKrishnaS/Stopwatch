import React,{useState} from 'react'
var stop=false;
var ds=0;
var min=0;
var sec=0;
var hr=0;

const Time = () => {

    const[time,setTime]=useState({
        hr:0,
        min:0,
        sec:0,
        ds:0,
        value:'Start',
        state:false
    })  


    function duration()
    {
        if(stop===false)
        {
            if(min===60)
            {
                hr++;
                min=0;
            }
            if(sec===60)
            {
                min++;
                sec=0;
            }
            if(ds===10)
            {
                sec++;
                ds=0;
            }
            ds++;
            setTime({hr:hr,min:min,sec:sec,ds:ds,value:'Resume',state:true});
            document.getElementById('reset').style.color="grey";
            setTimeout(duration,100)
        }

    }

    function starttime()
    {
        stop=false;
        duration();
    }

    function pausetime()
    {
        stop=true;
        setTime({hr:hr,min:min,sec:sec,ds:ds,value:'Resume',state:false});
        document.getElementById('reset').style.color="red";
    }


    function resettime()
    {
        stop=true;
        hr=0;
        min=0;
        sec=0;
        ds=0;
        setTime({hr:hr,min:min,sec:sec,ds:ds,value:'Start',state:false});
    }

    return (
        <div className="whole">
            <h1>STOPWATCH</h1>
            <div className="time">
                <h2>{time.hr} : {time.min} : {time.sec} : {time.ds} </h2>
                <div className="button">
                    {!time.state && <button onClick={starttime} >{time.value}</button>}
                    {time.state &&<button onClick={pausetime}>Pause</button>}
                    <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <button onClick={resettime} disabled={time.state} id="reset">Reset</button>
                </div>
            </div>
            
        </div>
    )
}

export default Time