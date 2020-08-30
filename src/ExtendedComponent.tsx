import {Component} from "react";

interface IObject {
	[key: string]: any
}
export default class ExtendedComponent<Props = {}, State = {}> extends Component<Props, any> {
	s: IObject = {};
	private _s: IObject = {};

	constructor(props: any) {
		super(props);

		Object.defineProperty(this, "s", {
			get: () => {
				return this._s;
			},
			set: (v) => {
				// eslint-disable-next-line react/no-direct-mutation-state
				this.state = v;
				this._s = this.initCustomState(v);
			},
		});
	}

	// private _s: IObject = {};
	//
	// get s() {
	// 	if (!this._s) {
	// 		this._s = this.initCustomState(this.state);
	// 	}
	//
	// 	return this._s;
	// }
	//
	// set s(state: IObject) {
	// 	// eslint-disable-next-line react/no-direct-mutation-state
	// 	this.state = state;
	// 	this._s = this.initCustomState(state);
	// }

	setState(state: IObject, callback?: () => any) {
		this._s = this.initCustomState(state);
		super.setState(state, callback);
	}

	initCustomState(state = {}) {
		state = {
			...this.state,
			...state
		};

		const newState = {};

		Object.keys(state).forEach((key: string) => {
			Object.defineProperty(newState, key, {
				get: () => {
					return this.state[key];
				},
				set: (v) => {
					// @ts-ignore
					this.state[key] = v;

					super.setState({
						[key]: v
					});
				},
			});
		});

		return newState;
	}

	get isClient() {
		return !!(typeof window !== 'undefined' && window.document);
	}
}
