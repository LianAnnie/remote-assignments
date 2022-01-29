import ShowButton from './ShowButton.js';
import ContentH from './ContentH.js';
import ContentB from './ContentB.js';
import ExtendContent from './ExtentContent.js';
import React, { Component } from 'react';


class Main extends Component { 
  state ={
    show: false
  };

  showContent = () => {
    this.setState( prevState => {
        return {show : !prevState.show}
      })
  }

  render(){
    if(this.state.show){
      return(
        <main className="main">
          <ContentH />
          <ContentB />
          <button className="action" onClick={()=>this.showContent()}>Hide List</button>
          <ExtendContent />
        </main>
      )
    }
    return(
      <main className="main">
        <ContentH />
        <ContentB />
        <button className="action" onClick={()=>this.showContent()}>Show More</button>
      </main>
    )
  }
}

export default Main;