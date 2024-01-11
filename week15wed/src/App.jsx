import { Route, Routes, Link } from "react-router-dom";
import "./App.css"
function About() {
  return (
    <div>
      <Link to="/News">LINK UP</Link>
      <h1>This is the About Component or object</h1>
      <img src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  )
}
function Contact() {
  return (
    <div>
      <Link to="/About">ABOUT THAT</Link>
      <h1>Here's my info</h1>
      <img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  )
}

function News() {
  return (
    <div>
      <Link to="/Contact">CONTACT US</Link>
      <h1>Bird is the Word</h1>
      <img src="https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  )
}

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  )
}

// path take string element takses an component (object)
// <Link> 'to' is the attribute of link, used when connecting routes 