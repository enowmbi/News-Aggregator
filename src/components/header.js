import React from 'react';

const Header=(props)=>{

    return(
        <div className="jumbotron jumbotron">
            <h2><span className="fas fa-list-alt"> </span> News List</h2>
            <h4>Select News Source </h4>
            <select id ="sourceNames" className="form-control" onChange="sourceChanged(event)">
                <option>Please Select News Source </option>          
            </select>
            <h6 id="sourceDescription">  </h6>
            <div id="sourceUrl">
            </div>
        </div>
    )

}

export default Header
