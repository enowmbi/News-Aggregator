import React,{ Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import './App.css';
import { newsSources } from './sources';
import { getSources }  from './sources';
import axios from 'axios';

class App extends Component{

    state = {
        newsSources: [],
        errors: []
    }

    await componentDidMount(){
        console.log("the component has mounted")

        const url = 'https://newsapi.org/v1/articles?source=' + 154+ '&apiKey=c493e95394d444458f3488052428deab'
        //connect to the api here
        try{
            const { data: sources } = await axios.get(url)
            // const { data: sources } = axios.get(url)
            //grab data and update state with   
            this.setState({newsSources: sources})
        }
        catch(ex){
            const newsSources = getSources()
            this.setState({newsSources: newsSources})
            console.log( ex + ": Can't connect to the api end point") 
            // if there are errors update the state
            this.setState({errors: ex + "Can't connect to the api end point"})

        }
    }



    //componentDidMount(){

    //  console.log("Component did mount")
    //using axios read from newsapi and populate the newsSources in the state
    // this.setState({newsSources: getNewsSources()});
    //  getNewsSources();

    // }

    handleNewsSourceSelectionChanged =(e)=>{
        console.log(`Select has changed for ${e.target.value}`);
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
