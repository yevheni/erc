import { Component } from "react";
export default class ExtendedComponent<Props = {}, State = {}> extends Component<Props, any> {
    private _s;
    get isClient(): boolean;
    get s(): object;
    set s(state: object);
    setState(state: object, callback: () => any): void;
    initCustomState(state?: {}): {};
}
