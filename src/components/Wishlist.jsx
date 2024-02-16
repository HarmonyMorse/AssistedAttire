import { Link } from "react-router-dom"

const Wishlist = ({ wishlist }) => {
    return (
        <div>
            <h1>Wishlist</h1>
            <Link to="/wishlist/new" className="button">Add Item</Link>
            <ul>
                {wishlist.map((item) => (
                    <li key={item._id}>
                        <Link to={`/wishlist/${item._id}`}>
                            <h2>{item.name}</h2>
                        </Link>
                        {/* <p>Price: {item.price}</p> */}
                        <p>{item.description}</p>
                        {/* <p>Brand: {item.brand}</p> */}
                        {/* <p>Size: {item.size}</p> */}
                        {/* <a href={item.link}>Go to website</a> */}
                        {/* <br /> */}
                        {/* <img src={item.imageUrl} alt={item.name} style={{height: '200px',width: '00px'}}/> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Wishlist