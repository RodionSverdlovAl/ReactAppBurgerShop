import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';

class App extends React.Component{
    state = {
        burger: {},
        order: {}
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

    render(){
        return(
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title ="Hot Burger" />
                </div>
                <Order />
                <MenuAdmin addBurger = {this.addBurger}/>
            </div>
        );
    }
}

export default App