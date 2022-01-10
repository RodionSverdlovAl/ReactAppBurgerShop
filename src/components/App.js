import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';

class App extends React.Component{
    render(){
        return(
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title ="Hot Burger" />
                </div>
                <Order />
                <MenuAdmin />
            </div>
        );
    }
}

export default App