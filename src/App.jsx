import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {

  return (
    <div className="App">
      <header>
        {/* Import Nav here */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App