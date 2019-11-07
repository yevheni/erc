import {ExtendedComponent} from "../src/extended-component";

class IndexComponent extends ExtendedComponent {

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="index-page">
			<Helmet>
			<title>
			User Index
		</title>
		</Helmet>

		<div className="container py-5">
			User Index
		</div>
		</div>
	);
	}
}

const jsx = <Provider store={store}>
	<BrowserRouter>
		<AppComponent/>
	</BrowserRouter>
</Provider>;

const container = document.getElementById('app');

if (container.innerHTML) {
	hydrate(jsx, container);
} else {
	render(jsx, container);
}