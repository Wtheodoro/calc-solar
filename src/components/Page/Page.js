import Rect from 'react'
import Calculator from '../calculator/Calculator'
import Logo from './logo.jpg'
import Facebook from './facebook.png'
import Instagram from './instagram.png'
import Twitter from './twitter.png'
import './page.css'

function Page () {

    return (
        <>
            <section>
                <div className="circle"></div>
                <header>
                    <div className="container">
                        <a href="#" className="logo"><img src={Logo}/></a>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Novidades</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </header>
                <div className="content">
                    <div className="textBox">
                        <h2>Não é apenas energia<br></br>É <span>Energia Solar</span></h2>
                        <p>Já se perguntou quantas placas fotovoltaicas são necessarias para abastecer seu lar? Esta é uma calculadora solar, onde você pode ter essa resposta.</p>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                        <a href="#">Saiba mais</a>
                    </div>
                    <div className="calculator">
                        <Calculator />
                    </div>
                </div>
                <ul className="sci">
                    <li><a href="#"><img src={Instagram}/></a></li>
                    <li><a href="#"><img src={Facebook}/></a></li>
                    <li><a href="#"><img src={Twitter}/></a></li>
                </ul>
            </section>
        </>
    )
}

export default Page