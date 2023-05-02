import './ingredientLabel.css'

const IngredientLabel = (props) => {
    return (
        <>
            <div className="ingredientLabel__container">
                <div className="ingredientLabel__text">
                    {props.group}
                </div>
                <div className="ingredientLabel__subText">
                    {props.qtdMax != null ? `Até ${props.qtdMax} ingredientes` : ''}
                </div>
            </div>

        </>
    )
}

export default IngredientLabel;