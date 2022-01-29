import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import React, { Component } from 'react';

class App extends Component { 


  render(){
    return(
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
