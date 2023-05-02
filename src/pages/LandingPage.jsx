import React, {useState} from "react";
import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"
import Item from "../components/Item/Item";
import {getMenu} from "../services/menuService";
import useAxios from "../utils/axiosHook";
import style from './landingPage.css'


const LoadingIcon = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 16 16"
            fill="none"
            data-view-component="true"
            className={style.loadingSpinner}
        >
            <circle
                cx="8"
                cy="8"
                r="7"
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
            >
            </circle>
            <path
                d="M15 8a7.002 7.002 0 00-7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
            >
            </path>
        </svg>
    )
}


const LandingPage = () => {

    const response = useAxios(getMenu)
    const [cartProduct, setCartProduct] = useState([]);
    const [seeCartProducts, setSeeCartProducts] = useState(false)
    
    return (
        <>{response?.isLoading ? <LoadingIcon
            width="64"
            height="64"
            color="#0f0f0f"
        /> : 
            <>
                <Header setSeeCartProducts={setSeeCartProducts} seeCartProducts={seeCartProducts} cartProduct={cartProduct} products={response?.result}/>
                <div className="landingPage__body">
                    <Item product={response?.result[0]}/>
                    <Menu setCartProduct={setCartProduct} ingredients={response?.result[0].ingredients}/>
                </div>
                
            </>}
           
        </>
    )
}

export default LandingPage;