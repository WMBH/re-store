import React from 'react';
import { bookStoreServiceConsumer } from '../bookStoreServiceContext';

const withBookStoreService = (Wrapped) => {
	return (props) => {
		return (
			<bookStoreServiceConsumer>
				{(bookStoreService) => {
					return <Wrapped {...props} bookStoreService={bookStoreService} />;
				}}
			</bookStoreServiceConsumer>
		);
	};
};
