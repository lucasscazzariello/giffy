import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

import { Route } from 'wouter'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>GIFFY</h1>
        <Route
          component={Home}
          path='/'
        />
        <Route
          component={SearchResults}
          path='/search/:keyword'
        />
        <Route
          component={Detail}
          path='/gif/:id'
        />
        {/* <ListOfGifs keyword={keyword} /> */}
      </section>
    </div >
  );
}

export default App;
