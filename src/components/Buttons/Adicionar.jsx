import PopupGfg from "../Popup/Popover";
import React, {useState} from "react";
import style from './buttons.module.css'

const Adicionar = () => {
    const [buttonPopup, setButtonPopup] = useState(false)
    
    const closePopUp = () => {
        setButtonPopup(false)
    }
    
    return (
        <>
            <button className={style.button__addition} onClick={() => setButtonPopup(true)}>
            Adicionar
        </button>
            <PopupGfg trigger={buttonPopup} onClose={closePopUp}></PopupGfg>
        </>
        
    )
}

export default Adicionar;