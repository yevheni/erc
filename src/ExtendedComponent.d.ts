import { Component } from "react";
interface IObject {
    [key: string]: any;
}
export default class ExtendedComponent<Props = {}, State = {}> extends Component<Props, any> {
    s: IObject;
    private _s;
    constructor(props: any);
    setState(state: IObject, callback?: () => any): void;
    initCustomState(state?: {}): {};
    get isClient(): boolean;
}
export {};
