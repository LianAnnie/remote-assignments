import React, { Component } from 'react';

class WelcomeMsg extends Component { 
	state ={
		msg: 0
	};

	changeMsg(){
		this.setState( prevState => {
			if( prevState.msg === 1){
				return{
					msg: 0
				};
			}
			return{
				msg: 1
			}

		});
	}

	render(){
		if (this.state.msg%2 === 1){
			return (
				<h1 className="a_h-title" onClick={()=> this.changeMsg()}>Have a Good Time!</h1>
			);
		}
		return(
			<h1 className="a_h-title" onClick= {()=>this.changeMsg()}>Welcome Message</h1>
		);
	}	
};

export default WelcomeMsg;