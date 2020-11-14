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
                this.state = v;
                this._s = this.initCustomState(v);
            },
        });
    }
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
                    const state1 = this.state;
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
exports.default = ExtendedComponent;
//# sourceMappingURL=ExtendedComponent.js.map