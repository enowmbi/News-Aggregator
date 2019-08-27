import React from 'react';

const SourceDetails =(props) => {

    return(
        <React.Fragment>
                <h6 className="my-3" id="sourceDescription"> {props.selectedSource ? props.selectedSource.description :  ""}  </h6>
                <div id="sourceUrl"> <a className="btn btn-primary" target ="_blank" rel="noopener noreferrer" href={props.selectedSource ? props.selectedSource.url : ""}>{props.selectedSource ? props.selectedSource.url : ""}</a></div>
        </React.Fragment>
    )
}

export default SourceDetails
