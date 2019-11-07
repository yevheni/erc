import React, {Component} from "react";

class ExtendedComponent extends Component {
	get isClient() {
		return !!(typeof window !== 'undefined' && window.document);
	}

	get s() {
		return this._erc_state;
	}

	set s(value) {
		const state = value || {};

		this.state = state;
		this._erc_state = this.initCustomState(state);
	}

	initCustomState(state = {}) {
		const newState = {};

		Object.keys(state).map(key => {
			Object.defineProperty(newState, key, {
				get: () => {
					return this.state[key];
				},
				set: (v) => {
					this.setState({
						[key]: v
					});
				},
			});
		});

		return newState;
	}
}

export {ExtendedComponent}
