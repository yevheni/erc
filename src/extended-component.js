import React, {Component} from "react";

class ExtendedComponent extends Component {
	get isClient() {
		return !!(typeof window !== 'undefined' && window.document);
	}

	get s() {
		if (!this._erc_state) {
			this.s = this.state;
		}

		return this._erc_state;
	}

	set s(value) {
		const state = value || {};

		this.state = state;
		this._erc_state = this.initCustomState(state);
	}

	setState(state, callback) {
		this._erc_state = this.initCustomState(state);
		super.setState(state, callback);
	}

	initCustomState(state = {}) {
		state = Object.assign({}, this.state, state);

		const newState = {};

		Object.keys(state).map(key => {
			Object.defineProperty(newState, key, {
				get: () => {
					return this.state[key];
				},
				set: (v) => {
					super.setState({
						[key]: v
					});
				},
			});
		});

		return newState;
	}
}

export {ExtendedComponent}
