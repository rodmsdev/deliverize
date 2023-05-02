import React, {useEffect} from 'react'
import Counter from "../Buttons/Counter";
import './ingredient.css'


class Ingredient extends React.Component {
    state = {count: 0, isLessSignEnabled: false, isMoreSignEnabled: true}

    addIngredient = async () => {
        if (this.props.totalIngredients < 8) {
            await this.setState({count: this.state.count + 1})
            this.props.addingCallback()
        }
    }

    removeIngredient = async () => {
        if (this.props.totalIngredients > 0 && this.state.count >0) {
            await this.setState({count: this.state.count - 1})
            this.props.subtractCallback()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.count !== prevState.count) {
            if (this.state.count === 0) {
                this.setState({isLessSignEnabled: false})
            } else {
                this.setState({isLessSignEnabled: true})
            }
        }

        if(this.props.totalIngredients !== prevProps.totalIngredients){
            if(this.props.totalIngredients ===8){
                this.setState({isMoreSignEnabled: false})
            }else {
                this.setState({isMoreSignEnabled: true})
            }
        }
    }

    render() {
        return (<div className="ingredient">
            <div className="ingredient__name">
                {this.props.item.nm_item}
            </div>
            <div className="ingredient__counter" align="right">
                <Counter isLessSignEnabled={this.state.isLessSignEnabled}
                         isMoreSignEnabled={this.state.isMoreSignEnabled} removeIngredient={this.removeIngredient}
                         addIngredient={this.addIngredient} count={this.state.count}/>
            </div>
            <div className="ingredient__value">
                {'R$ ' + this.props.item.vl_item}
            </div>
            <div className="ingredient__separator"></div>
        </div>)
    }
}


/*
const Ingredient = (props) => {
    const [count, setCount] = useState(0)
    
    const addIngredient =() => {
        console.log(props.totalIngredients)
        if(props.totalIngredients < 8){
            setCount(count + 1)
            props.handleCallback(count)
        }
    }
    
    const removeIngredient = () => {
        console.log(props.totalIngredients)
        if(props.totalIngredients > 0){
            setCount(count -1)
            props.handleCallback(count)
        }
    }
    
    return(
        <>
            <div>
                {props.item.nm_item}    
            </div>
            <Contador removeIngredient={removeIngredient} addIngredient={addIngredient} count={count}/>
            <div>
                {'R$ ' + props.item.vl_item}
            </div>            
        </>
        
    )
    
}

*/
export default Ingredient;
