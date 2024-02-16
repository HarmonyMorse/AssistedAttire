import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Client from "../assets/services/api"

const OutfitDetail = () => {
    const { id } = useParams()
    const [outfit, setOutfit] = useState({})

    useEffect(() => {
        const getOutfit = async () => {
            let res = await Client.get(`/outfits/${id}`)
            setOutfit(res.data)
        }
        getOutfit()
    }, [id])

    return (
        <div>
            <h1>{outfit.name}</h1>
            <p>Occasion: {outfit.occasion}</p>
            <p>Weather: {outfit.weather}</p>
            <p>Notes: {outfit.notes}</p>
            <p>Clothing Items:</p>
            <ul>
                {outfit.clothingItems?.map((item) => (
                    <Link to={`/wardrobe/${item._id}`} key={item._id}>
                        <li>{item.name} - {item.status.toLowerCase()}</li>
                    </Link>
                ))}
            </ul>
            {/* <Link to={`/outfits/${id}/edit`}>Edit</Link> */}
        </div>
    )
}

export default OutfitDetail
