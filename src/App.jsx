import React from 'react'
import Home from './Pages/Home/Home'
import Contact from './Pages/contact/Contact'
import Gallery from './Pages/gallery/Gallery'
import NotFound from './Pages/notFound/Notfound'
import Plans from './Pages/plans/Plans'
import Trainers from './Pages/trainers/Trainers'
import About from './Pages/about/About'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element= {<Home/>}/>
          <Route path='about' element= {<About/>}/>
          <Route path='contact' element= {<Contact/>}/>
          <Route path='gallery' element= {<Gallery/>}/>
          <Route path='plans' element= {<Plans/>}/>
          <Route path='trainers' element= {<Trainers/>}/>
          <Route path='*' element= {<NotFound/>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
