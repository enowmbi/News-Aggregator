import React from 'react';

const Header=(props)=>{

    return(
        <div className="jumbotron jumbotron">
            <h2><span className="fa fa-list"> </span> News List</h2>
            <h4>Select News Source </h4>
            <select id ="sourceNames" className="form-control" onChange = {(event)=>props.newsSourceSelectionChanged(event)} >
                <option>Please Select News Source </option>
                {/* <option value="enow">My name is Enow</option> */}
                {/* <option value="oben">My name is Oben </option> */}
                {/* <option value="ebai">My name is Ebai </option> */}
            </select>
            <h6 id="sourceDescription">  </h6>
            <div id="sourceUrl">
            </div>
        </div>
    )

}

export default Header
