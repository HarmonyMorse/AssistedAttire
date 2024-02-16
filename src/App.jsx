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
import Wishlist from './components/Wishlist'
import NewWishlistItem from './components/NewWishlistItem'
import WishlistItemDetail from './components/WishlistItemDetail'
import WishlistItemEdit from './components/WishlistItemEdit'

const App = () => {
  const [clothingItems, setClothingItems] = useState([])
  const [outfits, setOutfits] = useState([])
  const [wishlist, setWishlist] = useState([])

  const getClothingItems = async () => {
    let res = await Client.get('/clothingItems')
    setClothingItems(res.data)
  }

  const getOutfits = async () => {
    let res = await Client.get('/outfits')
    setOutfits(res.data)
  }

  const getWishlist = async () => {
    let res = await Client.get('/wishlist')
    setWishlist(res.data)
  }

  useEffect(() => {
    getClothingItems()
    getOutfits()
    getWishlist()
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
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
          <Route path="/wishlist/new" element={<NewWishlistItem />} />
          <Route path="/wishlist/:id" element={<WishlistItemDetail />} />
          <Route path="/wishlist/:id/edit" element={<WishlistItemEdit />} />
        </Routes>
      </main>
    </div>
  )
}

export default App