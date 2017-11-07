import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



	
	const place = document.getElementById('root');

	

	//========= getInitialState,setState =============

	// var Check = React.createClass ({
	// 	getInitialState: function() {
	// 		return {checked: true}
	// 	},
	// 	handleCheck: function () {
	// 		this.setState ({checked: !this.state.checked})
	// 	},
	// 	render: function () {
	// 		var message;
	// 		if (this.state.checked) {
	// 			message = "Checked";
	// 		} else {
	// 			message = "Unchecked";
	// 		}
	// 		return (
	// 				<div>
	// 					<input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} />
	// 					<p>Checkbox {message}</p>
	// 				</div>
	// 			);
	// 	}
	// });

	// ReactDOM.render(<Check />, place);

	//========== EventListeners ==============

	var Task = React.createClass({
		getInitialState: function () {  // creating default State of element
			return {edit: false}
		},
		edit: function () {
			this.setState ({edit: true}) //entering the default State
		},
		delete: function () {
			this.props.deleteBlock (this.props.index);
		},
		save: function () {
			var value = this.refs.newTxt.value; //using ref property from textarea
			this.props.update (this.refs.newTxt.value, this.props.index);
			this.setState ({edit: false})
		},
		renderNorm: function () { // render Defaul window
			return (
					<div className="box">
						<div className="text">{this.props.children}</div>
						<button onClick={this.edit} className="btn light">Edit</button>
						<button onClick={this.delete} className="btn red">Delete</button>
					</div>
			);
		},
		renderEdit: function () { //render Editable window
			return (
					<div className="box">
						<textarea ref="newTxt" defaultValue={this.props.children}></textarea>
						<button onClick={this.save} className="btn success">Save</button>
					</div>
			);
		},

		render: function() {
			if (this.state.edit) {
				return this.renderEdit();
			} else {
				return this.renderNorm();
			}
		}
	});

	var Field = React.createClass({

		getInitialState: function() {
			return {
				tasks: []

			}
		},
		add: function (text) {
			var arr = this.state.tasks;
			arr.push (text);
			this.setState ({tasks: arr});
		},
		deleteBlock: function (i) {
			var arr = this.state.tasks;
			arr.splice (i, 1);
			this.setState ({tasks: arr});
		},
		updateText: function (text, i) {
			var arr = this.state.tasks;
			arr[i] = text;
			this.setState ({tasks: arr});
		},
		eachTask: function (item, i){
							return (<Task key={i} index={i} update={this.updateText} deleteBlock={this.deleteBlock}>
								{item}
							</Task>);
		},
		render: function() {
			return (
				<div className="field">
					
						<button onClick={this.add.bind (null, 'Some task')} className="btn new">Create task</button>
						{this.state.tasks.map (this.eachTask)}
				
				</div>
			);
		}


	});

	ReactDOM.render(<Field />, place);


	//=============Props====================

	// var Game = React.createClass ({
	// 	render: function () {
	// 		return (
	// 			<div>
	// 				<h1>{this.props.name}</h1>
	// 				<h2>{this.props.age}</h2>
	// 			</div>
				
	// 			);
	// 	}

	// });

	

	// ReactDOM.render(
	// 	<div>
	// 		<Game name="Forza" age="18+" />,
	// 		<Game name="Linage" age="18+" />,
	// 	  	<Game name="Dirt" age="18+" />,
	//   	</div>,
	// 	place
	// 	);

	
	

