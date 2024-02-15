import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Client from "../assets/services/api"

const ClothingItemDetail = () => {
    const { id } = useParams()
    const [clothingItem, setClothingItem] = useState({})
    const [outfits, setOutfits] = useState([])

    useEffect(() => {
        const getClothingItem = async () => {
            let res = await Client.get(`/clothingItems/${id}`)
            setClothingItem(res.data)
        }

        const getOutfits = async () => {
            let res = await Client.get('/outfits')
            res = res.data.filter((outfit) => outfit.clothingItems.includes(id))
            setOutfits(res)
        }
        getClothingItem()
        getOutfits()
    }, [id])

    return (
        <div>
            <h1>{clothingItem.name}</h1>
            <p>Notes: {clothingItem.notes}</p>
            <p>Occasion: {clothingItem.occasion}</p>
            <p>Category: {clothingItem.category}</p>
            <p>Weather: {clothingItem.weather}</p>
            <p>Colors: {clothingItem.colors}</p>
            <p>Brand: {clothingItem.brand}</p>
            <p>Size: {clothingItem.size}</p>
            <p>Status: {clothingItem.status}</p>
            <div>Outfits:
                <ul>
                    {outfits.map((outfit) => (
                        <Link to={`/outfits/${outfit._id}`} key={outfit._id}>
                            <li>{outfit.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ClothingItemDetail
