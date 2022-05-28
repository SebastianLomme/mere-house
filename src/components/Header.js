import React, {useState} from 'react'
import three from "../images/clipart1922827.png"
import hero_bottom from "../images/Vector.svg"
import PopUp from './PopUp'

export default function Header() {
    const [trigger, setTrigger] = useState(false);
    const openPopUp = () => {
        setTrigger(true);
    }
    return (
        <header className="App-header">
            <PopUp trigger={trigger} setTrigger={setTrigger}>
            </PopUp>
            <div className="hero-section">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
                <div className="circle circle-four"></div>
                <div className="hero-content">
                    <h1>Mere House Day Nursery</h1>
                    <h3>children's day nursery for 0-11 years</h3>
                    <p>We provide unique, exiting child care for 0-11 year olds! we comprise of a 0-3 room, Preschool and an Out of School Club.</p>
                    <button onClick={openPopUp} className="btn btn-light">Contant us!</button>
                </div>
            </div>
            <img className="hero-bottom" src={hero_bottom} alt="" />
            <img src={three} alt="" className="hero-image-three" />
        </header>
    )
}

