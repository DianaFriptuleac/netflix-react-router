import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import CustomNavbar from './components/CustomNavbar'
import MyFooter from './components/MyFooter'
import TvHome from './components/TvHome';
import SettingsPage from './components/SettingsPage'; //SettingsPage component (statico!!)
import ProfilePage from './components/ProfilePage';  //Prodile component
//!!!!!!!!!!!per vedere sia SettingsPage che ProfilePage commentare sia MovieSection (galleria) che MainMovieSection (la parte sopra la galleria dei film)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import MovieDetails from './components/MovieDetails';


function App() {
  return (
    <BrowserRouter>
      <header>
      <CustomNavbar />
      </header>
     <main>
      <Routes>
  <Route path='/' element={<TvHome/>}/>
  <Route path='/settings' element={<SettingsPage/>}/>
  <Route path='/profile' element={<ProfilePage/>}/>
  <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
  <Route path="*" element={<NotFound/>} />
   </Routes>
   </main>
      <footer>
        <MyFooter/>
      </footer>
    </BrowserRouter>
  );
}

export default App;
