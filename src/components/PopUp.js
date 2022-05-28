import React, {useState} from 'react'

function PopUp(props) {
    const CloseButton = () => {
        props.setTrigger(false);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
        console.log(email)
        console.log(phone)
        setName("")
        setPhone("")
        setEmail("")
    }
    const [ name, setName ] = useState("")
    const [ phone, setPhone ] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return (
        props.trigger ?
            <div className="pop-up">
                <div className="pop-up-inner">
                    <div className="row">
                        <div className="col">
                            <h4>Get in Touch!</h4>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Name: </label>
                                <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="email">Email: </label>
                                <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="message">Message</label>
                                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                                <button onClick={handleSubmit}>Send</button>
                            </form>
                        </div>
                        <div className="col">
                            <h4>
                                Are you ready to get started?
                            </h4>
                            <p>If you have questions about what we have to offer, feel free to send us a message. We will get back to you as soon as possible.</p>
                            <h4>
                                Mere House Day Nursery
                            </h4>
                            <p>
                                WN4 8DF, Wigan, Greater Manchester, England, United Kingdom
                            </p>
                        </div>
                    </div>
                    {props.children}
                    <button className="close-btn" onClick={CloseButton}>Close</button>
                </div>
            </div>
            : null
    )
}

export default PopUp