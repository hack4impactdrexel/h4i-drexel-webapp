import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import logo from './images/h4i-drexel-banner.jpg'

function App() {
  return (
    <header>
      <div>
        <img className="h4i-header-logo" src={logo} alt="logo"/>
        <Header />
        <HomePage />
      </div>
    </header>
  );
}

export default App;
