import React from "react";
import {render} from "react-dom";
import {ExtendedComponent} from "../src/extended-component";

class IndexComponent extends ExtendedComponent {

	constructor(props) {
		super(props);

		this.s = {
			test: 1,
		};

		setTimeout(() => {
			this.setState({
				test: 2
			});

			setTimeout(() => {
				this.s.test = 3;
			}, 1000);
		}, 1000);
	}

	render() {
		const {
			test
		} = this.s;

		return (
			<div className="index-page">
				Index: {test}
			</div>
		);
	}
}

const jsx = (
	<IndexComponent/>
);

const container = document.getElementById('app');

render(jsx, container);