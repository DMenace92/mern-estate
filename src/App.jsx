import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/Abouts';
 function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign_in' element={<SignIn/>}/>
      <Route path='/sign_up' element={<SignUp/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;