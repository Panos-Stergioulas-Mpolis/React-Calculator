import React from 'react'
import Screen from './components/Screen'
import Buttons from './components/Buttons'


function App() {
    const [screen, setScreen] = React.useState("0")
    const [prevOp, setPrevOp] = React.useState("")
    function eventHandle(x){
      setScreen(screen => {
        if((screen === "0" || prevOp === "=") )
        {
            if((x === "*" || x === "+" || x === "/" || x ==="-")){
                setPrevOp(op => op = x)
                return screen + x;
            }
            else{
                if(x === "C")
                {
                    setPrevOp(op => op = "")
                    return "0"
                }
                else{
                    if(x==="="){
                        return screen;
                    }
                    else{
                        setPrevOp(op => op = "")
                        return x;
                    }
                }
                
            }
            
        }
        else if(x === "C")
        {
            setPrevOp(op => op = "")
            return "0";
        }
        else if(x === "=")
        {
            if(prevOp === "*" || prevOp === "+" || prevOp === "/" || prevOp ==="-" ){
                return screen;
            }
            else{
                setPrevOp(op => op = x);
                return eval(screen);
            }
            
        }
        else if(x === "*" || x === "+" || x === "/" || x ==="-"){
            if(prevOp === "*" || prevOp === "+" || prevOp === "/" || prevOp ==="-"){
                return screen;
            }
            else{
                setPrevOp(op => op = x)
                return screen + x;
            }
        }
        else
        {
            setPrevOp(op => op = "")
            return screen + x;
        }
      })
    }


  return (
    <div className='container'>
        <Screen show = {screen}/>
        <Buttons func = {eventHandle}/>
    </div>
  )
}

export default App