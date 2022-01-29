import React, { Component } from 'react';
class Header extends Component { 
  state ={
    showNavItem: false
  }

  showNavItem = () => {
    this.setState( prevState => {
        return {showNavItem : !prevState.showNavItem}
      })
  }

  render(){
    if(this.state.showNavItem){
      return(
        <header className="m-header">
          <nav className="header-nav">
            <p className="nav-title">Welcome Title</p>
            <p className="nav-logo">Logo</p>
            <ul className="nav-item" style={{
              display:'flex',
              textAlign:'left',
              width: '200px',
              height:'100vh',
              background:'white',
              position:'fixed',
              right:'0px',
              flexDirection:'column'
              }}>
              <li style={{textAlign:'right'}}>
                <img className="xicon" 
                src="img/x_icon.png" 
                onClick={()=>this.showNavItem()} />
              </li>
              <li style={{
                position:'relative',
                top:'-30px',
                left:'-20px',
                paddingBottom:'30px',
                width:'50px'
                }}>
                <a href="#">home</a>
              </li>
              <li style={{
                position:'relative',
                top:'-30px',
                left:'-20px',
                paddingBottom:'30px',
                width:'50px'
                }}>
                <a href="#">item1</a>
              </li>
              <li style={{
                position:'relative',
                top:'-30px',
                left:'-20px',
                paddingBottom:'30px',
                width:'50px'
                }}>
                <a href="#">item2</a>
              </li>
              <li style={{
                position:'relative',
                top:'-30px',
                left:'-20px',
                paddingBottom:'30px',
                width:'50px'
                }}>
                <a href="#">item3</a>
              </li>
            </ul>
          </nav>
        </header>
      )
    }
    return(
      <header className="m-header">
        <nav className="header-nav">
          <p className="nav-title">Welcome Title</p>
          <p className="nav-logo">Logo</p>
          <ul className="nav-item">
            <li><a href="#">home</a></li>
            <li><a href="#">item1</a></li>
            <li><a href="#">item2</a></li>
            <li><a href="#">item3</a></li>
          </ul>
          <img className="menu-icon" src="img/menu_icon.png" onClick={()=>this.showNavItem()} />
        </nav>
      </header>
    )
  }
}

export default Header;