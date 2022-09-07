//import logo from './logo.svg';
import './App.css';
import './app2.css';
import Heading1 from './components/Heading';
import Picture from './components/logo';
import Heading2 from './components/heading2';
import Para from './components/paragraph';
import Para2 from './components/paragraph2';
import Link from './components/link';

function App() {
  return (
    <div className="App">
      <Heading1 />
      <Picture />
      <Para />
      <Para2 />
      <Link />
      <br />
      <Heading2 />
      
    </div>
  );
}

export default App;
