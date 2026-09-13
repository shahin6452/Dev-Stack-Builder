
import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const dataPromise = async() => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data.countries
}

function App() {
  

  return (
    <>
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      
    </div>
    </>
  )
}

export default App
