import React, {Component} from "react";

class ExtendedComponent extends Component {
	get isClient() {
		return !!(typeof window !== 'undefined' && window.document);
	}
}

export {ExtendedComponent}
