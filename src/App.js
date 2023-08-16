import React from 'react';
import './App.css';
import Caixa from './Caixa/Caixa';
import 'bootswatch/dist/sketchy/bootstrap.css'

export default class App extends React.Component {


  render(){
    return(
      <div>
        <Caixa/>
      </div>
    )
  }
}