import { Route } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar/NavBar'
import SearchBar from './SearchBar/SearchBard'
import Footer from './Footer/Footer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <SearchBar />
      <ResultsTab />
      <Footer />
    </div>

  );
}

export default App;
