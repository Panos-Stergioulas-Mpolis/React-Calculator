import React from 'react'
import "./buttons.css"
import {BsFillBackspaceFill} from "react-icons/bs"

function Buttons(props) {
  return (
    <section className='buttons'>
        <div className='line_ 0'>
            <button className='op' onMouseDown={() =>props.func("C")}>C</button>
            <button className='op' onMouseDown={() =>props.func("back")}><BsFillBackspaceFill size={20}/></button>
        </div>
        <div className='line_ 1'>
            <button onMouseDown={() =>props.func("7")}>7</button>
            <button onMouseDown={() =>props.func("8")}>8</button>
            <button onMouseDown={() =>props.func("9")}>9</button>
            <button className='op' onMouseDown={() =>props.func("+")}>+</button>
        </div>
        <div className='line_ 2'>
            <button onMouseDown={() =>props.func("4")}>4</button>
            <button onMouseDown={() =>props.func("5")}>5</button>
            <button onMouseDown={() =>props.func("6")}>6</button>
            <button className='op' onMouseDown={() =>props.func("-")}>-</button>  
        </div>
        <div className='line_ 3'>
            <button onMouseDown={() =>props.func("1")}>1</button>
            <button onMouseDown={() =>props.func("2")}>2</button>
            <button onMouseDown={() =>props.func("3")}>3</button>
            <button className='op' onMouseDown={() =>props.func("*")}>x</button>
        </div>
        <div className='line_ 4'>
            <button className='op' onMouseDown={() =>props.func(".")}>.</button>
            <button onMouseDown={() =>props.func("0")}>0</button>
            <button className='op' onMouseDown={() =>props.func("/")}>/</button>
            <button className='op' onMouseDown={() =>props.func("=")}>=</button>
        </div>
    </section>
  )
}

export default Buttons