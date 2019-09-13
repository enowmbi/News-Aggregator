import React from 'react';


const Article =(props)=>{
    return(
        <React.Fragment>
            <hr/>
            <div className="row">
                <div className="col-md-4">
                    <a href={props.url} target="_blank" rel="noopener noreferrer"><img className="media-object" src={props.urlToImage} alt={props.title}/></a>
                </div>
                <div className ="col-md-8">
                    <div className="media-body">
                        <h6 className="media-heading"><a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a></h6>
                        <h6><i>{props.author ? props.author :""}<small>(Published on : {props.publishedAt})</small></i></h6>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Article;
