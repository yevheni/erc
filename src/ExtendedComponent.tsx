import {Component} from "react";

export interface IObject {
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
				this.state = v;
				this._s = this.initCustomState(v);
			},
		});
	}

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
					const state1: any = this.state;

					state1[key] = v;

					this.state = state1;

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
