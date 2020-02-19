import React, { Component } from 'react';
import ErrorIndicator from '../errorIndicator   ';

export default class errorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}
	componentDidCatch() {
		this.setState({ hasError: true });
	}
	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}
		return this.props.children;
	}
}
