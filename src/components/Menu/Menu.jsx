import React, {useState, useEffect} from 'react'
import Ingredients from "../Ingredient/Ingredients";
import Adicionar from "../Buttons/Adicionar";
import './menu.css'
import CounterItem from "../Buttons/CounterItem";

const Menu = (props) => {

    const [counter, setCount] = useState(0)
    const [enabled, setEnabled] = useState(false)
    
    const removeProduct = async () => {
        if(counter > 0){
            await setCount(counter-1)
        }
    }
    useEffect(() => {
        if(counter ===0){
            setEnabled(false)
        }
    }, [counter])
    
    const addProduct = () => {
        setCount(counter+1)
        setEnabled(true)
    }
    
    return (
        <div className="menu__container">
            <div className="menu__ingredients">
                <Ingredients ingredients={props.ingredients}/>
            </div>
            <div className="menu__buttons__alignment">
                <CounterItem setProduct={props.setCartProduct} enabled={enabled} count={counter} removeIngredient={removeProduct} addIngredient={addProduct}/>
                <Adicionar/>
            </div>

        </div>
    )
}


export default Menu;