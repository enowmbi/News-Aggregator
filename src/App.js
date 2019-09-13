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
     const url = 'https://newsapi.org/v1/sources?language=en&apiKey=c493e95394d444458f3488052428deab' 
        //connect to the api here
        console.log("About to log data");
        try{
            const { data: newsSources } = await axios.get(url);
            const sources = newsSources.sources;
            this.setState({ newsSources:sources });
        }
        catch(error){
            console.log(error);
            const newsSources = getSources();
            this.setState({newsSources});
        }
    }


    handleNewsSourceSelectionChanged =(selected_source)=>{
        //change the source and update state 
        console.log(selected_source)
        
        const sources  = [...this.state.newsSources];
        const userSelectedSource = sources.find(source =>source.id === selected_source.trim());
        this.setState({selectedSource: userSelectedSource})

        // display articles from the selected source 
        this.handleDisplayArticles(selected_source)
    }

    async handleDisplayArticles(selected_source){
        //get articles from url based on source
        console.log(selected_source);
        const url = `https://newsapi.org/v1/articles?language=en&source=${selected_source}&apiKey=c493e95394d444458f3488052428deab`;

        try{
            const { data: sources } = await axios.get(url);
            //grab data and update state with   
            const articles = sources.articles;
            this.setState({newsArticles: articles});
        }
        catch(ex){
            //get sample data - static from sources.js - due to internet connection issues
            const newsArticles = getArticles(selected_source.value);
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
