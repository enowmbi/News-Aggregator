import React from 'react'
import Articles from '../components/articles'

const Main = (props) =>{
    return(
        <React.Fragment>
            <Articles articles = {props.articles} />
        </React.Fragment>
    )
}

export default Main
