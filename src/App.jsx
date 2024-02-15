import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import NewItem from './components/NewItem'

const App = () => {

  return (
    <div className="App">
      <header>
        {<Nav />}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wardrobe/new" element={<NewItem />} />
        </Routes>
      </main>
    </div>
  )
}

export default App