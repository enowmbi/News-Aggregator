import React from 'react';
import SourceDetails from '../components/source-details'

const Header=(props)=>{

    return(
        <div className="jumbotron jumbotron">
            <h2><span className="fa fa-list"> </span> News List</h2>
            <h4>Select News Source </h4>
            <select id ="sourceNames" className="form-control" onChange = {(event)=>props.newsSourceSelectionChanged(event.target.value)} >
                <option>Please Select News Source </option>
                {props.sources.map(source =>( 
                    <option value ={source.id} key={source.id}>{source.name}</option>
                ))}
            </select>
            
            <SourceDetails  selectedSource ={props.selectedSource}  />
    
        </div>
    )
}

export default Header
