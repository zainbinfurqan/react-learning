import logo from './logo.svg';
import './App.css';
import DynamicComponentExample from './dynamic-component';
// import Index from './react-optiization/use-memo';
import Index from './react-optiization/useCallbacks';
import Routing from './react-optiization/lazy-loading/routing';

function App() {
  return (
    // <Index />
    <Routing />
  );
}

export default App;
