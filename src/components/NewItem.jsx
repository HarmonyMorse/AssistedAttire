import { useState } from 'react'
import Client from '../assets/services/api'

const NewItem = () => {
    const initialFormState = {
        name: '',
        notes: '',
        occasion: '',
        category: '',
        weather: '',
        colors: '',
        brand: '',
        size: '',
        status: 'Put Away'
    }

    const [formState, setFormState] = useState(initialFormState)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let newItem = {
                name: formState.name,
                notes: formState.notes,
                occasion: formState.occasion,
                category: formState.category,
                weather: formState.weather,
                colors: formState.colors,
                brand: formState.brand,
                size: formState.size,
                status: formState.status
            }
            await Client.post('/clothingItems', newItem)
            setFormState(initialFormState)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <h1>New Item</h1>
            <form
                onSubmit={handleSubmit}
            >
                <div className="newItemFormDiv formNameDiv">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name of new clothing item"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="newItemFormDiv formNotesDiv">
                    <label>Notes:</label>
                    <input
                        type="text"
                        name="notes"
                        id="notes"
                        placeholder="Add notes about washing instructions, special care, etc."
                        value={formState.notes}
                        onChange={handleChange}
                    />
                </div>
                <div className="newItemFormDiv formOccasionDiv">
                    <label>Occasion:</label>
                    <input
                        type="text"
                        name="occasion"
                        id="occasion"
                        placeholder="Casual, formal, business, etc."
                        value={formState.occasion}
                        onChange={handleChange}
                    />
                </div>
                <div className="newItemFormDiv formCategoryDiv">
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Shirt, pants, dress, etc."
                        value={formState.category}
                        onChange={handleChange}
                    />
                </div>
                <div className="newItemFormDiv formWeatherDiv">
                    <label>Weather:</label>
                    <input
                        type="text"
                        name="weather"
                        id="weather"
                        placeholder="Cold, hot, rainy, etc."
                        value={formState.weather}
                        onChange={handleChange}
                    />
                </div>
                <div className="newItemFormDiv formColorsDiv">
                    <label>Colors:</label>
                    <input
                        type="text"
                        name="colors"
                        id="colors"
                        placeholder="Red, blue, green, etc."
                        value={formState.colors}
                        onChange={handleChange}
                    />
                </div>
                <div className="newItemFormDiv formBrandDiv">
                    <label>Brand:</label>
                    <input
                        type="text"
                        name="brand"
                        id="brand"
                        placeholder="Brand name"
                        value={formState.brand}
                        onChange={handleChange}
                    />
                </div>
                <div className="newItemFormDiv formSizeDiv">
                    <label>Size:</label>
                    <input
                        type="text"
                        name="size"
                        id="size"
                        placeholder="Small, medium, large, etc."
                        value={formState.size}
                        onChange={handleChange}
                    />
                </div>
                <div className="newItemFormDiv formStatusDiv">
                    <label>Status:</label>
                    <select
                        name="status"
                        id="status"
                        className='newItemFormDiv'
                        onChange={handleChange}
                        value={formState.status}
                    >
                        <option value="Put Away">Put Away</option>
                        <option value="Wearing">Wearing</option>
                        <option value="Dirty">Dirty</option>
                        <option value="Washing">Washing</option>
                        <option value="Drying">Drying</option>
                        <option value="Clean">Clean</option>
                        <option value="Folding">Folding</option>
                        <option value="In Storage">In Storage</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="newItemFormDiv formSubmitDiv">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default NewItem