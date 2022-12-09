import { useState } from "react"
import './Submit.css'

const Submit = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardDate, setCardDate] = useState('')
    const [errEmpty, setErrEmpty] = useState(false)
    // eslint-disable-next-line
    const [flag, setFlag] = useState(true)
    const [cardCVC, setCardCVC] = useState('')
    const [country, setCountry] = useState('')
    const [success, setSuccess] = useState(false)

    const errEmail = <p className="err">Email is not valid</p>


    const regExEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

    const checkForm = () => {
        if (!name || !email || !cardCVC || !cardDate || !cardNumber || !country) {
            setErrEmpty(true)
            setTimeout(() => {
                setErrEmpty(false)
            }, 4000)

        } else {
            setErrEmpty(false)
        }
    }

    const click = () => {
        if (name.length > 1 && regExEmail.test(email)) {
            setFlag(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        checkForm();
        click();
        setSuccess(true)
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit} className='registerForm'>
                <h1>Form</h1>
                <div className="formBox">

                    <label htmlFor="email">
                        <p>Email</p>
                        <input type="text"
                            placeholder="Your email..."
                            className="formInput"
                            onChange={e => setEmail(e.target.value)} />
                        {!regExEmail.test(email) && email ? errEmail : null}
                    </label>

                    <label htmlFor="card" >
                        <p>Card information</p>
                        <input type="text"
                            placeholder="1234 1234 1234 1234"
                            onChange={e => setCardNumber(e.target.value)}
                            className="card" />
                        <input type="text"
                            placeholder="MM/YY"
                            onChange={e => setCardDate(e.target.value)}
                            className="card" />
                        <input type="text"
                            placeholder="CVC"
                            onChange={e => setCardCVC(e.target.value)} />
                    </label>

                    <label htmlFor="name">
                        <p>Name on card</p>
                        <input type="text"
                            className="formInput"
                            onChange={e => setName(e.target.value)} />

                    </label>

                    <label htmlFor="country">
                        <p>Country or region</p>
                        <select name="" id=""
                            onChange={e => setCountry(e.target.value)}>
                            <option value="Poland">Poland</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Germany">Germany</option>
                            <option value="France">France</option>
                        </select>
                    </label>

                    {errEmpty ? <p>Fill in all fields</p> : null}
                    <button onClick={handleSubmit} className="registerBtn">Pay</button>
                    <p className="info">Free returns and exchanges</p>
                </div>
            </form>
            {success ? <div ><p>{cardNumber}</p><p>{cardDate}</p><p>{cardCVC}</p></div> : null}
        </div>

    );
}

export default Submit;