import React from "react";
import style from './buttons.module.css'

const Counter = (props) => {
    
    return (
        <div className={`${style.button__counter__alignment} ${style.button_counterContainer}`}>
            <button className={props.isLessSignEnabled ? style.button__counterLessSign__enabled : style.button__counterLessSign__disabled} onClick={props.removeIngredient}>
                -
            </button>
            <h2>
                {props.count}
            </h2>
            <button className={ props.isMoreSignEnabled ? style.button_counterMoreSign__enabled : style.button__counterMoreSign__disabled} onClick={props.addIngredient}>
                +
            </button>
        </div>
    )
}



export default Counter