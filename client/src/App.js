
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';
import NotFound from './Components/Others/NotFound';
import MainPage from './Components/MainPage';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Posts from './Components/Profile/Posts';
import Friends from './Components/Profile/Friends';
import About from './Components/Profile/About';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import { Footer } from './Components/NavigationBar/Footer';


function App() {

  return (
    <div className="App d-flex flex-column">
      <NavigationBar />

      <Router>

        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/profile/:id' element={<Profile />}>
            <Route path='/profile/:id/posts' element={<Posts />}></Route>
            <Route path='/profile/:id/friends' element={<Friends />}></Route>
            <Route path='/profile/:id/about' element={<About />}></Route>
          </Route>
        </Routes>

      </Router>

      <Footer />
    </div>
  );
}

export default App;
