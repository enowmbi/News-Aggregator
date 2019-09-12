import React,{ Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import './App.css';
import { getSources }  from './sources';
import {getArticles } from './articles';
import axios from 'axios';

class App extends Component{

    state = {
        newsSources: [],
        errors: [],
        selectedSource: { },
        newsArticles:[]
    }

    async componentDidMount(){
        const url = 'https://newsapi.org/v1/sources?language=en';
        //connect to the api here
        console.log("About to log data");
        try{
            const { data:newsSources } = await axios.get(url);
            console.log(newsSources);
            this.setState({ newsSources });
            console.log(this.state.newsSources);
        }
        catch(error){
                console.log(error);
                const newsSources = getSources();
                this.setState({newsSources});
            }
    }


    handleNewsSourceSelectionChanged =(e)=>{
        //change the source and update state 
        const sources  = [...this.state.newsSources];
        const userSelectedSource = sources.find(source =>source.id === e.target.value.trim());
        this.setState({selectedSource: userSelectedSource})

        // display articles from the selected source 
        this.handleDisplayArticles(e.target)
    }

    async handleDisplayArticles(source){
        //get articles from url based on source
        const url = `https://newsapi.org/v1/articles?source=${source}&apiKey=c493e95394d444458f3488052428deab`

        try{
            const { data: sources } = await axios.get(url);
            //grab data and update state with   
            this.setState({newsArticles: sources});
        }
        catch(ex){
            //get sample data - static from sources.js - due to internet connection issues
            const newsArticles = getArticles(source.value);
            this.setState({newsArticles: newsArticles});
            console.log( ex + ": Can't connect to the api end point") 
            // if there are errors update the state
            this.setState({errors: ex + "Can't connect to the api end point"});
        }

    }

    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <Header  
                        newsSourceSelectionChanged ={this.handleNewsSourceSelectionChanged} 
                        sources ={this.state.newsSources} 
                        selectedSource ={this.state.selectedSource}
                    />
                    <Main  articles ={this.state.newsArticles}/>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}
export default App;
