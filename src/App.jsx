import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from './assets/services/api'
import Nav from './components/Nav'
import Home from './components/Home'
import NewItem from './components/NewItem'
import Wardrobe from './components/Wardrobe'
import ClothingItemDetail from './components/ClothingItemDetail'

const App = () => {
  const [clothingItems, setClothingItems] = useState([])

  useEffect(() => {
    const getClothingItems = async () => {
      let res = await Client.get('/clothingItems')
      setClothingItems(res.data)
    }
    getClothingItems()
  }, [])


  return (
    <div className="App">
      <header>
        {<Nav />}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wardrobe" element={<Wardrobe clothingItems={ clothingItems } />} />
          <Route path="/wardrobe/new" element={<NewItem />} />
          <Route path="/wardrobe/:id" element={<ClothingItemDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App