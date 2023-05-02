import React from 'react'
import BurguerSvg from "../../assets/images/burguer.svg";
import "./item.css";

const Item = (props) => {

    return (<div className="item">
        <div className="item__productImage"><img width="100%" height="100%" src={BurguerSvg} alt="Foto do hamburguer picanha cheedar bacon"/></div>
        <div className="item__title">
            {props.product.nm_product}
        </div>
        <div className="item__description">
            {props.product.description}
        </div>
        <div className="item__values__alignment">
            <div className="item__valor__promocao">
                R${props.product.vl_discount} 
            </div>
            <div className="item__valor__normal">
                R${props.product.vl_price}
            </div>
        </div>

    </div>)
}

export default Item;