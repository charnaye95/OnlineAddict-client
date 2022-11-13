import './App.css';
import { Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import PCGames from './pages/PCGames';

function App() {
  return (
    <div className="App">
        <Routes >

            <Route path="/" element={<Home />}></Route>
            <Route path="/pcgames" element={<PCGames />}></Route>

        </Routes>
    </div>
  );
}

export default App;
