import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
    <>
    <div class='Navbar'>
    <img src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243831-stock-photo-letter-s-logo.jpg" alt="" width= "200px"  />
    <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/about'><li>About</li></Link>
    </ul>
    <button>Get Started</button>
    </div>
    </>        
    )
}