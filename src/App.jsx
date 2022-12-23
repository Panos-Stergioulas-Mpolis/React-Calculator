import React from 'react'
import Screen from './components/Screen'
import Buttons from './components/Buttons'
import { renderIntoDocument } from 'react-dom/test-utils'


function App() {
    const [screen, setScreen] = React.useState("0")
    const [prevOp, setPrevOp] = React.useState("")
    function eventHandle(x){
      setScreen(screen => {
        if((screen === "0" || prevOp === "=") )
        {
            if((x === "*" || x === "+" || x === "/" || x ==="-" || x===".")){
                setPrevOp(op => op = x)
                return screen + x;
            }
            else{
                if(x === "C")
                {
                    setPrevOp(op => op = "")
                    return "0"
                }
                else   if(x==="back"){
                    return screen;
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
            if(prevOp === "*" || prevOp === "+" || prevOp === "/" || prevOp ==="-" || prevOp ==="."){
                return screen;
            }
            else{
                setPrevOp(op => op = x);
                return eval(screen);
            }
            
        }
        else if(x === "*" || x === "+" || x === "/" || x ==="-" ||x ==="."){
            if(prevOp === "*" || prevOp === "+" || prevOp === "/" || prevOp ==="-" || prevOp ==="."){
                return screen;
            }
            else{
                setPrevOp(op => op = x)
                return screen + x;
            }
        }
        else if(x === "back"){
            if(screen.length === 1){
                setScreen(prev => prev = "0")
                return screen;
            }
            else{
                return screen.slice(0,-1);
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