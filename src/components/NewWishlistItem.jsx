import { useState } from 'react'
import Client from '../assets/services/api'

const NewWishlistItem = () => {
    const initialFormState = {
        name: '',
        price: '',
        description: '',
        brand: '',
        size: '',
        link: '',
        imageUrl: '',
    }

    const [formState, setFormState] = useState(initialFormState)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let newWishlistItem = {
                name: formState.name,
                price: formState.price,
                description: formState.description,
                brand: formState.brand,
                size: formState.size,
                link: formState.link,
                imageUrl: formState.imageUrl,
            }
            Client.post('/wishlist', newWishlistItem)
            setFormState(initialFormState)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='NewOutfitFormDiv FormNameDiv'>
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
                <div className='NewOutfitFormDiv FormPriceDiv'>
                    <label htmlFor='price'>Price:</label>
                    <input
                        type='text'
                        id='price'
                        name='price'
                        value={formState.price}
                        onChange={handleChange}
                        placeholder='"Cheap", $50, etc.'
                    />
                </div>
                <div className='NewOutfitFormDiv FormDescriptionDiv'>
                    <label htmlFor='description'>Description:</label>
                    <input
                        type='text'
                        id='description'
                        name='description'
                        value={formState.description}
                        onChange={handleChange}
                        placeholder="Description"
                    />
                </div>
                <div className='NewOutfitFormDiv FormBrandDiv'>
                    <label htmlFor='brand'>Brand:</label>
                    <input
                        type='text'
                        id='brand'
                        name='brand'
                        value={formState.brand}
                        onChange={handleChange}
                        placeholder="Nike, Adidas, etc."
                    />
                </div>
                <div className='NewOutfitFormDiv FormSizeDiv'>
                    <label htmlFor='size'>Size:</label>
                    <input
                        type='text'
                        id='size'
                        name='size'
                        value={formState.size}
                        onChange={handleChange}
                        placeholder="Small, medium, large, etc."
                    />
                </div>
                <div className='NewOutfitFormDiv FormLinkDiv'>
                    <label htmlFor='link'>Link:</label>
                    <input
                        type='text'
                        id='link'
                        name='link'
                        value={formState.link}
                        onChange={handleChange}
                        placeholder="Link to item online"
                    />
                </div>
                <div className='NewOutfitFormDiv FormImageUrlDiv'>
                    <label htmlFor='imageUrl'>Image URL:</label>
                    <input
                        type='text'
                        id='imageUrl'
                        name='imageUrl'
                        value={formState.imageUrl}
                        onChange={handleChange}
                        placeholder="https://www.eg.com/img.jpg"
                    />
                </div>
                <div className='NewOutfitFormDiv FormSubmitDiv'>
                    <input type='submit' value='Add Item' />
                </div>
            </form>
        </div>
    )
}

export default NewWishlistItem