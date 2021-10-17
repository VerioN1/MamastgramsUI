import './style/App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Messages from './Pages/Messages/Messages';
import Profile from './Pages/Profile/Profile';
import CreatePost from './Pages/CreatePost/CreatePost';

function App() {
  return (
    <Router>
    <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Profile" exact component={Profile} />
        <Route path="/DM" component={Messages}/>
        <Route path="/CreatePost" component={CreatePost}/>
        <Route path="*"> <Redirect to="/"/> </Route>
      </Switch>
  </Router>
  );
}

export default App;
