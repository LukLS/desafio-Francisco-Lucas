import React from "react";

export default class Card extends React.Component{

render(){
    return(
        <thead>
            <tr>
            <th scope="col">{this.props.codigo}</th>
            <th scope="col">{this.props.descricao}</th>
            <th scope="col">{this.props.preco}</th>
            </tr>
            </thead>
    )
}

}