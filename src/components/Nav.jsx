import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav className="navbar">
            <NavLink to="/">
                <h4>Assisted Attire</h4>
            </NavLink>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/wardrobe">Wardrobe</NavLink>
                <NavLink to="/outfits">Outfits</NavLink>
                <NavLink to="/wishlist">Wishlist</NavLink>
                {/* <NavLink to="/profile">Profile</NavLink> */}
            </div>
        </nav>
    )
}

export default Nav