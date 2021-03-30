import Header from './components/Header';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Songs from './pages/Songs';
import Song from './pages/Song';
import Update from './pages/Update';

const appStyle = {
  "paddingBottom": "20px"
}

function App() {
  return (
      <BrowserRouter>
        <div style={appStyle}>
          <Header />
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/songs/edit/:slug">
              <Update />
            </Route>
            <Route path="/songs/:slug">
              <Song />
            </Route>
            <Route path="/songs">
              <Songs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
