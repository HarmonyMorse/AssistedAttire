import { Link } from "react-router-dom"

const Outfits = ({ outfits }) => {
    return (
        <div>
            <h1>Outfits</h1>
            {console.log(outfits)}
            <ul>
                {outfits.map((outfit) => (
                    <li key={outfit._id}>
                        <Link to={`/outfits/${outfit._id}`}>
                            <h2>{outfit.name}</h2>
                        </Link>
                        <p>Occasion: {outfit.occasion}</p>
                        <p>Weather: {outfit.weather}</p>
                        <p>Notes: {outfit.notes}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Outfits