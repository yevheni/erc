import { Component } from "react";
interface IObject {
    [key: string]: any;
}
export default class ExtendedComponent<Props = {}, State = {}> extends Component<Props, any> {
    private _s;
    get s(): IObject;
    set s(state: IObject);
    setState(state: IObject, callback?: () => any): void;
    initCustomState(state?: {}): {};
    get isClient(): boolean;
}
export {};
