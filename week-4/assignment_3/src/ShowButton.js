import ExtentContent from './ExtentContent.js';
import React, { Component } from 'react';
const extend = document.querySelector('.extend');

class ShowButton extends Component { 
	state ={
		show: false
	};

	showContent = () => {

		this.setState( (props, prevState) => {
			if(prevState.show){
				return{
					show : !prevState.show
				}
			}
			return{
				show : !prevState.show
			}
		})

	}

	render(){
		if(this.state.show){
			return(
				<button className="action" onClick={()=>this.showContent()}>'Hide List'</button>
			)
		}return(
			<button className="action" onClick={()=>this.showContent()}>'Show List'</button>
		)
	}

}


export default ShowButton;