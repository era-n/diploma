import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import { IconContext } from 'react-icons';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider>
			<IconContext.Provider
				value={{
					color: '#a3b2b5',
					style: { verticalAlign: 'middle' },
				}}>
				<App />
			</IconContext.Provider>
		</ChakraProvider>
	</React.StrictMode>
);
