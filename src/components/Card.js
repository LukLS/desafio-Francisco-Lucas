import React from "react";

export default class Card extends React.Component{

render(){
    return(
        <div className="card md-3">
            <h2 className="card-header">{this.props.title}</h2>
            <div className="card-body">
            {this.props.children}
            </div>
        </div>
    )
}

}