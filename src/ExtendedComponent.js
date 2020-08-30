"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class ExtendedComponent extends react_1.Component {
    constructor(props) {
        super(props);
        this.s = {};
        this._s = {};
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
    setState(state, callback) {
        this._s = this.initCustomState(state);
        super.setState(state, callback);
    }
    initCustomState(state = {}) {
        state = Object.assign(Object.assign({}, this.state), state);
        const newState = {};
        Object.keys(state).forEach((key) => {
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
exports.default = ExtendedComponent;
//# sourceMappingURL=ExtendedComponent.js.map