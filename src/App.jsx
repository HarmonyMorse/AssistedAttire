import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from './assets/services/api'
import Nav from './components/Nav'
import Home from './components/Home'
import NewItem from './components/NewItem'
import Wardrobe from './components/Wardrobe'
import ClothingItemDetail from './components/ClothingItemDetail'
import Outfits from './components/Outfits'
import NewOutfit from './components/NewOutfit'
import OutfitDetail from './components/OutfitDetail'
import OutfitEdit from './components/OutfitEdit'

const App = () => {
  const [clothingItems, setClothingItems] = useState([])
  const [outfits, setOutfits] = useState([])

  const getClothingItems = async () => {
    let res = await Client.get('/clothingItems')
    setClothingItems(res.data)
  }

  const getOutfits = async () => {
    let res = await Client.get('/outfits')
    setOutfits(res.data)
  }

  useEffect(() => {
    getClothingItems()
    getOutfits()
  }, [])


  return (
    <div className="App">
      <header>
        {<Nav />}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wardrobe" element={<Wardrobe clothingItems={clothingItems} />} />
          <Route path="/wardrobe/new" element={<NewItem />} />
          <Route path="/wardrobe/:id" element={<ClothingItemDetail />} />
          <Route path="/outfits" element={<Outfits outfits={outfits} />} />
          <Route path="/outfits/new" element={<NewOutfit clothingItems={clothingItems} />} />
          <Route path="/outfits/:id" element={<OutfitDetail />} />
          <Route path="/outfits/:id/edit" element={<OutfitEdit clothingItems={clothingItems} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App