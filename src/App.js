import React,{ Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import './App.css';

class App extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}
export default App;
