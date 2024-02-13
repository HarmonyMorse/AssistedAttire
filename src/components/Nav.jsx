import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav className="navbar">
            <h4>Assisted Attire</h4>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/wardrobe">Wardrobe</NavLink>
                <NavLink to="/Outfits">Outfits</NavLink>
                <NavLink to="/Profile">Profile</NavLink>
            </div>
        </nav>
    )
}

export default Nav