import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Client from "../assets/services/api"

const ClothingItemDetail = () => {
    const { id } = useParams()
    const [clothingItem, setClothingItem] = useState({})

    useEffect(() => {
        const getClothingItem = async () => {
            let res = await Client.get(`/clothingItems/${id}`)
            setClothingItem(res.data)
        }
        getClothingItem()
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
        </div>
    )
}

export default ClothingItemDetail
