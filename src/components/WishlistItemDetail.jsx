import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Client from "../assets/services/api"

const WishlistItemDetail = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [wishlistItem, setWishlistItem] = useState({})

    useEffect(() => {
        const getWishlistItem = async () => {
            let res = await Client.get(`/wishlist/${id}`)
            setWishlistItem(res.data)
        }
        getWishlistItem()
    }, [id])

    const deleteItem = async (id) => {
        await Client.delete(`/wishlist/${id}`)
        navigate('/wishlist')
    }

    return (
        <div>
            <h1>{wishlistItem.name}</h1>
            <button onClick={() => { deleteItem(wishlistItem._id) }}>Delete</button>
            <Link to={`/wishlist/${wishlistItem._id}/edit`} className="button">Edit</Link>
            <p>Description: {wishlistItem.description}</p>
            <p>Price: {wishlistItem.price}</p>
            <p>Brand: {wishlistItem.brand}</p>
            <p>Size: {wishlistItem.size}</p>
            <a href={wishlistItem.link}>Go to website</a>
            <br />
            <br />
            <img src={wishlistItem.imageUrl} alt={wishlistItem.name} style={{ height: '70vw', width: '70vw' }} />
        </div>
    )
}
export default WishlistItemDetail
