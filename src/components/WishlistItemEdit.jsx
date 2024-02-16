import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Client from "../assets/services/api"

const WishlistItemEdit = () => {
    const { id } = useParams()

    const [formState, setFormState] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        const getWishlistItem = async () => {
            let res = await Client.get(`/wishlist/${id}`)
            setFormState({
                name: res.data.name,
                description: res.data.description,
                price: res.data.price,
                brand: res.data.brand,
                size: res.data.size,
                link: res.data.link,
                imageUrl: res.data.imageUrl
            })
        }
        getWishlistItem()
    }, [id])

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let updatedWishlistItem = {
                name: formState.name,
                description: formState.description,
                price: formState.price,
                brand: formState.brand,
                size: formState.size,
                link: formState.link,
                imageUrl: formState.imageUrl
            }
            await Client.put(`/wishlist/${id}`, updatedWishlistItem)
            setFormState({})
            navigate(`/wishlist/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className='NewWishlistItemForm'
            >
                <div className='EditWishlistItemFormDiv FormNameDiv'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Name of new wishlist item"
                    />
                </div>
                <div className='EditWishlistItemFormDiv FormPriceDiv'>
                    <label htmlFor='price'>Price:</label>
                    <input
                        type='text'
                        id='price'
                        name='price'
                        value={formState.price}
                        onChange={handleChange}
                        placeholder="Price of new wishlist item"
                    />
                </div>
                <div className='EditWishlistItemFormDiv FormDescriptionDiv'>
                    <label htmlFor='description'>Description:</label>
                    <input
                        type='text'
                        id='description'
                        name='description'
                        value={formState.description}
                        onChange={handleChange}
                        placeholder="Description of new wishlist item"
                    />
                </div>
                <div className='EditWishlistItemFormDiv FormBrandDiv'>
                    <label htmlFor='brand'>Brand:</label>
                    <input
                        type='text'
                        id='brand'
                        name='brand'
                        value={formState.brand}
                        onChange={handleChange}
                        placeholder="Brand of new wishlist item"
                    />
                </div>
                <div className='EditWishlistItemFormDiv FormSizeDiv'>
                    <label htmlFor='size'>Size:</label>
                    <input
                        type='text'
                        id='size'
                        name='size'
                        value={formState.size}
                        onChange={handleChange}
                        placeholder="Size of new wishlist item"
                    />
                </div>
                <div className='EditWishlistItemFormDiv FormLinkDiv'>
                    <label htmlFor='link'>Link:</label>
                    <input
                        type='text'
                        id='link'
                        name='link'
                        value={formState.link}
                        onChange={handleChange}
                        placeholder="Link to new wishlist item"
                    />
                </div>
                <div className='EditWishlistItemFormDiv FormImageUrlDiv'>
                    <label htmlFor='imageUrl'>Image URL:</label>
                    <input
                        type='text'
                        id='imageUrl'
                        name='imageUrl'
                        value={formState.imageUrl}
                        onChange={handleChange}
                        placeholder="Image URL of new wishlist item"
                    />
                </div>
                <div className='EditWishlistItemFormDiv FormSubmitDiv'>
                    <input type='submit' value='Edit Wishlist Item' />
                </div>
            </form>
        </div>
    )
}

export default WishlistItemEdit
