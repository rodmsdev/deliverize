import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './popover.module.css';

export default function PopupGfg(props) {
    
    

    const closeOnClick = () => {
        props.onClose()
    }

    return (
        <div> 
            <Popup className="popup__container popup-content" open={props.trigger} onClose={closeOnClick}
                   modal nested>

                <container>
                    <div className="popup__titleContainer">
                        <div className="popup__titleText">
                            Adicionado com Sucesso
                        </div>
                    </div>

                    <button className="popup__exit" onClick={closeOnClick}>
                        X
                    </button>


                </container>

            </Popup>

        </div>)
};