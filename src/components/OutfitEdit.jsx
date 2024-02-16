import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Client from "../assets/services/api"

const OutfitEdit = ({ clothingItems }) => {
    const { id } = useParams()
    const [formState, setFormState] = useState({})
    const [clothingItemsState, setClothingItemsState] = useState([])

    useEffect(() => {
        const getOutfit = async () => {
            let res = await Client.get(`/outfits/${id}`)
            console.log(res.data)
            setFormState({
                name: res.data.name,
                occasion: res.data.occasion,
                weather: res.data.weather,
                notes: res.data.notes,
            })
            setClothingItemsState(res.data.clothingItems)
        }
        getOutfit()
    }, [id])

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const handleClothingItemChange = (e) => {
        let selectedClothingItems = clothingItemsState
        if (e.target.checked) {
            selectedClothingItems.push(e.target.value)
        } else {
            let index = selectedClothingItems.indexOf(e.target.value)
            selectedClothingItems.splice(index, 1)
        }
        setClothingItemsState([...clothingItemsState, selectedClothingItems])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let updatedOutfit = {
                name: formState.name,
                occasion: formState.occasion,
                weather: formState.weather,
                notes: formState.notes,
                clothingItems: formState.selectedClothingItems,
            }
            Client.put(`/outfits/${id}`, updatedOutfit)
            setFormState({})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>New Outfit</h1>
            <form onSubmit={handleSubmit}>
                <div className='EditOutfitFormDiv FormNameDiv'>
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
                <div className='EditOutfitFormDiv FormOccasionDiv'>
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
                <div className='EditOutfitFormDiv FormWeatherDiv'>
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
                <div className='EditOutfitFormDiv FormNotesDiv'>
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
                <div className='EditOutfitFormDiv FormClothingItemsDiv'>
                    <label htmlFor='clothingItems'>Clothing Items:</label>
                    {clothingItemsState.length && clothingItems.map(item => (
                        <div key={item._id}>
                            <input
                                checked={clothingItemsState?.includes(item)}
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
                <input type='submit' value='Update Outfit!' />
                <div className='EditOutfitFormDiv FormSubmitDiv'>
                </div>
            </form>
        </div>
    )
}

export default OutfitEdit
