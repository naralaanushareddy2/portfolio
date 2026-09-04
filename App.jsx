import React from 'react'
import Nav from './src/component/Nav'
import About from './src/pages/About'
import Contact from './src/pages/Contact'
import Education from './src/pages/Education'
import Project from './src/pages/Project'
import Skills from './src/pages/Skills'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './src/pages/Home'
import ChatbotProject from './src/pages/project-details/ChatbotProject'
import TIEOProject from './src/pages/project-details/TIEOProject'
import PortfolioProject from './src/pages/project-details/PortfolioProject'
import TempleProject from './src/pages/project-details/TempleProject'



const App = () => {
  return (
    // <h1>Anusha</h1>
    // <div>
    // <Nav />
    // <About/>
    // <Contact/>
    // <Education/>
    // <Hero/>
    // <Project/>
    // <Skills/>
    // </div>
    // <Home/>
    // <ChatbotProject/>
    // <PortfolioProject/>
    // <TempleProject/>
    // <TIEOProject/>

  

    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
            <Route path='/skills' element={<Skills/>}></Route>
              <Route path='/project' element={<Project/>}></Route>
              <Route
  path="/project/tieo"
  element={<TIEOProject />}
/>

<Route
  path="/project/chatbot"
  element={<ChatbotProject />}
/>

<Route
  path="/project/temple"
  element={<TempleProject />}
/>

<Route
  path="/project/portfolio"
  element={<PortfolioProject />}
/>
                <Route path='/education' element={<Education/>}></Route>
                  <Route path='/contact' element={<Contact/>}></Route>

        
    </Routes>
    </BrowserRouter>
  )
}

export default App
