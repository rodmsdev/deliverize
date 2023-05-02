import React from "react";
import Ingredient from "./Ingredient";
import IngredientLabel from "../IngredientType/IngredientLabel";
import './ingredient.css'
import Checkbox from "../Checkbox/Checkbox";







class Ingredients extends React.Component {
    
    state = {totalIngredientsAdded: 0, check: true}
    
     addingTotalIngredients = () => {
        this.setState({totalIngredientsAdded: this.state.totalIngredientsAdded + 1})
       
    }
    subtractingTotalIngredients = () => {
        this.setState({totalIngredientsAdded: this.state.totalIngredientsAdded - 1})
    }
    
    handlePrecisaTalher = () => {
        this.setState({totalIngredientsAdded: this.state.totalIngredientsAdded, check: true})
    }

    handleNaoPrecisaTalher = () => {
        this.setState({totalIngredientsAdded: this.state.totalIngredientsAdded, check: false})
    }

    render() {
        return (
            <>
                <div className="container__display">
                    <IngredientLabel group={this.props.ingredients[0].group} qtdMax={this.props.ingredients[0].max_itens}/>
                    <Ingredient totalIngredients={this.state.totalIngredientsAdded} addingCallback={this.addingTotalIngredients} product={this.props} subtractCallback={this.subtractingTotalIngredients} item={this.props.ingredients[0].itens[0]}/>
                    <Ingredient totalIngredients={this.state.totalIngredientsAdded} addingCallback={this.addingTotalIngredients} subtractCallback={this.subtractingTotalIngredients} item={this.props.ingredients[0].itens[1]}/>
                    <Ingredient totalIngredients={this.state.totalIngredientsAdded} addingCallback={this.addingTotalIngredients} subtractCallback={this.subtractingTotalIngredients} item={this.props.ingredients[0].itens[2]}/>
                    <Ingredient totalIngredients={this.state.totalIngredientsAdded} addingCallback={this.addingTotalIngredients} subtractCallback={this.subtractingTotalIngredients} item={this.props.ingredients[0].itens[3]}/>
                    <IngredientLabel group={this.props.ingredients[1].group}/>
                    <div className="ingredient__checkbox">
                        <Checkbox label="Sim"
                                  value={this.state.check}
                                  onChange={this.handlePrecisaTalher}>
                        </Checkbox>
                        <Checkbox label="Não"
                                  value={!this.state.check}
                                  onChange={this.handleNaoPrecisaTalher}>
                        </Checkbox>
                    </div>
                </div>
            </>
        )
    }
}




/*
const Ingredients = (props) => {
    let totalIngredientsAdded = 0
    
    function TotalIngredients(totalIngredients){
        totalIngredientsAdded += totalIngredients
        return totalIngredientsAdded
    }
    
    return (
        <>
            <container>
                <IngredientLabel group={props.ingredients[0].group} qtdMax={props.ingredients[0].max_itens}/>
                <Ingredient totalIngredients={totalIngredientsAdded} handleCallback={TotalIngredients} item={props.ingredients[0].itens[0]}/>
                <Ingredient totalIngredients={totalIngredientsAdded} handleCallback={TotalIngredients} item={props.ingredients[0].itens[1]}/>
                <Ingredient totalIngredients={totalIngredientsAdded} handleCallback={TotalIngredients} item={props.ingredients[0].itens[2]}/>
                <Ingredient totalIngredients={totalIngredientsAdded} handleCallback={TotalIngredients} item={props.ingredients[0].itens[3]}/>
                <IngredientLabel group={props.ingredients[1].group}/>
            </container>

        </>
    )
}


*/

export default Ingredients;
