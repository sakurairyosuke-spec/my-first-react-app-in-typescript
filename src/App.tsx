import React from 'react';
import CounterwithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({message}) => {
  return <div>
    <CounterwithReducer />
  </div>;
};

App.defaultProps = {
  message: 'Hello, defaultprops!',
}

export default App;
