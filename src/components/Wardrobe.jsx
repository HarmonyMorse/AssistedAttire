import { Link } from "react-router-dom"

const Wardrobe = ({ clothingItems }) => {
    return (
        <div>
            <h1>Wardrobe</h1>
            <ul>
                {clothingItems.map((item) => (
                    <li key={item._id}>
                        <Link to={`/wardrobe/${item._id}`}>
                            <h2>{item.name}</h2>
                        </Link>
                        <p>Notes: {item.notes}</p>
                        <p>Occasion: {item.occasion}</p>
                        <p>Category: {item.category}</p>
                        <p>Weather: {item.weather}</p>
                        <p>Colors: {item.colors}</p>
                        <p>Brand: {item.brand}</p>
                        <p>Size: {item.size}</p>
                        <p>Status: {item.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Wardrobe