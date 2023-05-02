import React from "react";
import style from './buttons.module.css'

const CounterItem = (props) => {

    return (
        <div className={`${style.button__counter__alignment} ${style.button_counterItemContainer}`}>
            <button className={ props.enabled ? style.button__counterLessSign__enabled : style.button__counterLessSign__disabled} onClick={props.removeIngredient}>
                -
            </button>
            <h2>
                {props.count}
            </h2>
            <button className={style.button_counterMoreSign__enabled} onClick={props.addIngredient}>
                +
            </button>
        </div>
    )
}



export default CounterItem