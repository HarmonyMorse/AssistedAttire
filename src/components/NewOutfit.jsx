import { useState } from "react"
import Client from "../assets/services/api"

const NewOutfit = ({ clothingItems }) => {
    const initialFormState = {
        name: '',
        occasion: '',
        weather: '',
        notes: '',
        selectedClothingItems: [],
    }

    const [formState, setFormState] = useState(initialFormState)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const handleClothingItemChange = (e) => {
        let selectedClothingItems = formState.selectedClothingItems
        if (e.target.checked) {
            selectedClothingItems.push(e.target.value)
        } else {
            let index = selectedClothingItems.indexOf(e.target.value)
            selectedClothingItems.splice(index, 1)
        }
        setFormState({ ...formState, selectedClothingItems })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let newOutfit = {
                name: formState.name,
                occasion: formState.occasion,
                weather: formState.weather,
                notes: formState.notes,
                clothingItems: formState.selectedClothingItems,
            }
            Client.post('/outfits', newOutfit)
            setFormState(initialFormState)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>New Outfit</h1>
            <form onSubmit={handleSubmit}>
                <div className='NewOutfitFormDiv FormNameDiv'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Name of new outfit"
                    />
                </div>
                <div className='NewOutfitFormDiv FormOccasionDiv'>
                    <label htmlFor='occasion'>Occasion:</label>
                    <input
                        type='text'
                        id='occasion'
                        name='occasion'
                        value={formState.occasion}
                        onChange={handleChange}
                        placeholder="Casual, formal, business, etc."
                    />
                </div>
                <div className='NewOutfitFormDiv FormWeatherDiv'>
                    <label htmlFor='weather'>Weather:</label>
                    <input
                        type='text'
                        id='weather'
                        name='weather'
                        value={formState.weather}
                        onChange={handleChange}
                        placeholder="Cold, hot, rainy, etc."
                    />
                </div>
                <div className='NewOutfitFormDiv FormNotesDiv'>
                    <label htmlFor='notes'>Notes:</label>
                    <input
                        type='text'
                        id='notes'
                        name='notes'
                        value={formState.notes}
                        onChange={handleChange}
                        placeholder="Add notes about special care, etc."
                    />
                </div>
                <div className='NewOutfitFormDiv FormClothingItemsDiv'>
                    <label htmlFor='clothingItems'>Clothing Items:</label>
                    {clothingItems.map(item => (
                        <div key={item._id}>
                            <input
                                type='checkbox'
                                id={item._id}
                                name={item._id}
                                value={item._id}
                                onChange={handleClothingItemChange}
                            />
                            <label>{item.name}</label>
                        </div>
                    ))}
                </div>
                <div className='NewOutfitFormDiv FormSubmitDiv'>
                    <input type='submit' value='Create New Outfit' />
                </div>
            </form>
        </div>
    )
}

export default NewOutfit