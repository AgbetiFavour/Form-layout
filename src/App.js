
import './App.css';
import { Box } from '@chakra-ui/react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
		<>
			<Box width="100%" maxWidth="100%" padding={["5px", "10px", "20px"]}>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/" exact component={Home} />
					<Route path="/" exact component={Home} />
					<Route path="/" exact component={Home} />
				</Switch>
			</Box>
		</>
	)
}

export default App;
