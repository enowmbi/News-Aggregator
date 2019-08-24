import React,{ Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import './App.css';

class App extends Component{

    state = {
        newsSources: []
    }

    componentDidMount(){
        console.log("Component did mount")
        //using axios read from newsapi and populate the newsSources in the state
        

    }

    handleNewsSourceSelectionChanged =(e)=>{
        console.log(`Select has changed for ${e.target.value}`)
    }

    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <Header  newsSourceSelectionChanged ={this.handleNewsSourceSelectionChanged}/>
                    <Main />
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}
export default App;
