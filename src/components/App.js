import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from '../sample-burgers';
import Burger from './Burger';
import base from '../base';

class App extends React.Component{
    state = {
        burgers: {},
        order: {}
    }

    componentDidMount(){
        const {params} = this.props.match;

        const localStorageRef = localStorage.getItem(params.restaurantId)
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)})
        }
 

        this.ref = base.syncState(`${params.restaurantId}/burgers`,{
            context: this,
            state: 'burgers'
        })
    }

    componentDidUpdate(){
        const {params} = this.props.match;
        localStorage.setItem(params.restaurantId,JSON.stringify(this.state.order))
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addBurger = (burger) =>{
        console.log("addBurger", burger);

        // делаем копию стейта
        const burgers = {...this.state.burgers}
        // добавить бургер в переменную обект burgers
        burgers[`burger${Date.now()}`] = burger;
        // записать наш новый объект бургерс в стэйт
        this.setState({burgers})
    }

    updateBurger = (key, updatedBurger) =>{
        // делаем копию стейта
        const burgers = {...this.state.burgers}
        // обновляем нужный бургер
        burgers[key] = updatedBurger;
        // записать наш новый объект бургерс в стэйт
        this.setState({burgers})
    }

    loadSampleBurgers = () =>{
        this.setState({burgers:sampleBurgers})
    }

    addToOrder = (key) =>{
        // копия обекта стэйт
        const order = {...this.state.order}
        // добавляем ключ к заказу со значением 1 или обновляем текущее значение
        order[key] = order[key] + 1 || 1;
        // записывае обновленное значение ордер в стэйт
        this.setState({order}) 
    }

    render(){
        return(
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title ="Hot Burger" />
                    <ul className='burgers'>
                        {Object.keys(this.state.burgers).map(key =>{
                            return <Burger 
                            key={key}
                            index= {key}
                            addToOrder = {this.addToOrder}
                            details ={this.state.burgers[key]}
                            />
                        })}
                    </ul>
                </div>
                <Order burgers = {this.state.burgers} order ={this.state.order} />
                <MenuAdmin loadSampleBurgers = {this.loadSampleBurgers} addBurger = {this.addBurger}
                burgers = {this.state.burgers}
                updateBurger = {this.updateBurger}/>
            </div>
        );
    }
}

export default App