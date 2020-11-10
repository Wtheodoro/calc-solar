import Rect from 'react'
import Logo from './logo.jpg'
import './header.css'

function Header () {

    return (
        <>
            <section>
                <header>
                    <a href="#" className="logo"><img src={Logo}/></a>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Novidades</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </header>
            </section>
        </>
    )
}

export default Header