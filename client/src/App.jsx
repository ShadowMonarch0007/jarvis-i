import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { jarvis } from './assets';
import { Home, CreatePost } from './page';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img className="h-16 w-16" src={jarvis} />
            <p className="font-bold text-3xl font-code">JARVIS</p>
          </div>
        </Link>

        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App