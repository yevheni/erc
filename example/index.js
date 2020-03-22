import React from "react";
import {render} from "react-dom";
import ExtendedComponent from "../src/ExtendedComponent";

class IndexComponent extends ExtendedComponent {

	constructor(props) {
		super(props);

		this.s = {
			test: 1,
		};

		setTimeout(() => {
			this.setState({
				test: 2,
				test2: 1
			});

			setTimeout(() => {
				this.s.test = 3;
			}, 1000);
		}, 1000);
	}

	render() {
		return (
			<div className="index-page">
				<div>
					this.s.test: {this.s.test}
				</div>
				<div>
					this.state.test: {this.state.test}
				</div>
				<div>
					this.s.test2: {this.s.test2}
				</div>
			</div>
		);
	}
}

const jsx = (
	<IndexComponent/>
);

const container = document.getElementById('app');

render(jsx, container);