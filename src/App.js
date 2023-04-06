import React from 'react'
import Screen from './components/Screen'
import Buttons from './components/Buttons'
import { renderIntoDocument } from 'react-dom/test-utils'


function App() {
    const [screen, setScreen] = React.useState("0");
    const [prevOp, setPrevOp] = React.useState("");
    const [dot, setDot] = React.useState(false);

    function eventHandle(x){
      setScreen(screen => {
        if((screen === "0" || prevOp === "=") )
        {
            if((x === "*" || x === "+" || x === "/" || x ==="-" || x===".")){
                if(x === '.'){
                    setDot(dot => dot = true)
                }
                else{
                    setDot(dot => dot = false)
                }
                setPrevOp(op => op = x)
                return screen + x;
            }
            else{
                if(x === "C")
                {
                    setPrevOp(op => op = "")
                    setDot(dot => dot = false)
                    return "0"
                }
                else   if(x==="back"){
                    setDot(dot => dot = false)
                    return screen;
                }
                else{
                    if(x==="="){
                        setDot(dot => dot = false)
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
            setDot(dot => dot = false)
            setPrevOp(op => op = "")
            return "0";
        }
        else if(x === "=")
        {
            if(prevOp === "*" || prevOp === "+" || prevOp === "/" || prevOp ==="-" || prevOp ==="."){
                return screen;
            }
            else{
                setDot(dot => dot = false)
                setPrevOp(op => op = x);
                return eval(screen);
            }
            
        }
        else if(x === "*" || x === "+" || x === "/" || x ==="-" ||x ==="."){
            if(prevOp === "*" || prevOp === "+" || prevOp === "/" || prevOp ==="-" || prevOp ==="."){
                return screen;
            }
            else{
                if(x==="." && dot === true){
                    return screen;
                    
                }
                else if(x==="." && dot === false){
                    setDot(dot => dot = true)
                }
                if(x !== "."){
                    setDot(dot => dot = false)
                }
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
                let check = screen[screen.length -1]
                if(check === "."){
                    setDot(dot => dot = false)
                }
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