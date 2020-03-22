"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ExtendedComponent = /** @class */ (function (_super) {
    __extends(ExtendedComponent, _super);
    function ExtendedComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._s = {};
        return _this;
    }
    Object.defineProperty(ExtendedComponent.prototype, "isClient", {
        get: function () {
            return !!(typeof window !== 'undefined' && window.document);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedComponent.prototype, "s", {
        get: function () {
            if (!this._s) {
                this.s = this.state;
            }
            return this._s;
        },
        set: function (state) {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state = state;
            this._s = this.initCustomState(state);
        },
        enumerable: true,
        configurable: true
    });
    ExtendedComponent.prototype.setState = function (state, callback) {
        this._s = this.initCustomState(state);
        _super.prototype.setState.call(this, state, callback);
    };
    ExtendedComponent.prototype.initCustomState = function (state) {
        var _this = this;
        if (state === void 0) { state = {}; }
        state = __assign(__assign({}, this.state), state);
        var newState = {};
        Object.keys(state).forEach(function (key) {
            Object.defineProperty(newState, key, {
                get: function () {
                    return _this.state[key];
                },
                set: function (v) {
                    var _a;
                    _super.prototype.setState.call(_this, (_a = {},
                        _a[key] = v,
                        _a));
                },
            });
        });
        return newState;
    };
    return ExtendedComponent;
}(react_1.Component));
exports.default = ExtendedComponent;
//# sourceMappingURL=ExtendedComponent.js.map