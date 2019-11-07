# (ERC) Extended React Component
Set properties in React Components like in Angular

All you need, is define `this.s`

`this.s` equal `this.state`, but now you can set properties like this:
```jsx harmony
this.s = {
    test: 1
};
// console.log(this.s.test);
// -> 1 

this.s.test = 2;
// console.log(this.s.test);
// -> 2

this.setState({
    test: 3
});
// console.log(this.s.test);
// -> 3

this.state = {
    test: 4
};
// console.log(this.s.test);
// -> 4

this.s.test = 5;
// console.log(this.state.test);
// -> 5
```


Example:
```jsx harmony
import React from "react";
import {ExtendedComponent} from "erc2";

class IndexComponent extends ExtendedComponent {
    constructor(props) {
        super(props);

        this.s = {
            test: 1,
        };

        setTimeout(() => {
            this.setState({
                test: 2
            });

            setTimeout(() => {
                this.s.test = 3;
            }, 1000);
        }, 1000);
    }

    render() {
        return (
            <div className="index-page">
                <div>
                    this.s.test: {this.s.test}
                </div>
                <div>
                    this.state.test: {this.state.test}
                </div>
            </div>
        );
    }
}
```