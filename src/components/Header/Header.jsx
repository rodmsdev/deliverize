import React, {useState, useEffect} from 'react';
import LogoSvg from "../../assets/images/logo.svg"
import CartSvg from "../../assets/images/cart.svg"
import BoxSvg from "../../assets/images/box.svg"
import LoginSvg from "../../assets/images/login.svg"
import ArrowDown from "../../assets/images/arrow_down.svg"
import ArrowLeft from "../../assets/images/arrow.svg"
import './header.css';
import {Popup} from "@progress/kendo-react-popup";


const Header = (props) => {

    const [search, inputSearch] = useState("")
    const anchor = React.useRef();

    const handleSearch = (e) => {
        e.preventDefault();
        inputSearch(e.target.value);
    };
    
    const seeCartProducts = () => {
        let seeCartProd = props.seeCartProducts;
        props.setSeeCartProducts(!seeCartProd)
    }

    let products = [];
    products = props.products;

    if (search.length > 0) {
        products.filter((product) => {
            return product.nm_product.match(search);
        });
    }

    return (
        <div className="flexbox__container__horizontal">
        <button className="header__arrowleft" type="button">
            <img  src={ArrowLeft}/>
        </button>
        <div className="header__boxLogo">
            <img className="header__box" src={BoxSvg} alt="Logo do deliverize"/>
            <img className="header__logo" src={LogoSvg} alt="Deliverize"/>
        </div>
        <div className="header__address">
            <div className="header__addressLabel">
                Entrega:
            </div>
            <div>
                <img src={ArrowDown} align="right" alt="Selecionar endereços"/>
            </div>
            <div className="header__addressText">
                R.Antonio Braune,222
            </div>
        </div>
        <div className="header__searchInputs">
            <input className="header__searchBar"
                   type="text"
                   placeholder="Busque por estabelecimento ou produtos"
                   onChange={handleSearch}
                   value={search}/>
            {search.length !== 0 && (<div className="header__searchResult">
                {products.map((product) => {
                    return (<a className="header__searchDataResult">
                        {product.nm_product}
                    </a>)
                })}
            </div>)} 
        </div>
        <div className="header__logintext">
        <img className="header__login" src={LoginSvg} alt="React Logo"/> Entrar
        </div>
        <div className="header__carttext">
            <img ref={anchor} className="header__cartImg" onClick={seeCartProducts} src={CartSvg} alt="Carrinho de compras"/>
            <Popup anchor={anchor.current} show={props.seeCartProducts} popupClass="offer__popover">
                 <div className="header__textpopup1"><p>Adicionado com Sucesso</p></div> 
                 <div className="header__textpopup2"><p>Oferta Cheddar Bacon</p></div>
                 <p>Ingredientes:</p> <p>° 1 Carne 250gr</p> <p>° 2 Queijo Cheddar</p>
                 <p>° 1 Bacon</p> <p>° Molho Especial</p></Popup> Carrinho
        </div>
    </div>);

   /* const [menuIsVisible, setMenuIsVisible] = useState(true);

    return (
        <>
        <MenuMobile />
        <header__searchBar />
        <div className="header__address" />
        </>
    )
    */
}

export default Header;
