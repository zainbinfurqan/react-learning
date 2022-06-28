import logo from './logo.svg';
import './App.css';
// import DynamicComponentExample from './dynamic-component';
import Index from './react-optiization//react-memo/index';
import WithUseMemo from './react-optiization/use-memo/withUseMemo';
import WithOutUseMemo from './react-optiization/use-memo/withoutUseMemo';
import HomePage from './infinitscroll';
// import Index from './react-optiization/useCallbacks';
// import Routing from './react-optiization/lazy-loading/routing';

function App() {
  return (
    // <Index />
    // <WithUseMemo/>
    <HomePage />
    // <WithOutUseMemo />
    // <Routing />
  );
}

export default App;
