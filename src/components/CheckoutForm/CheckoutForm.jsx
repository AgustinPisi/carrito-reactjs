import { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }
    return (
        <div className='Container estilosFormulario'>
            <form onSubmit={handleConfirm} className='Form'>
                <div className='formElement'>
                <label className='Label'>
                    Nombre 
                </label>
                <input
                        className='Input'
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </div>
                <div className='formElement'>
                <label className='Label'>
                    Telefono
                </label>
                <input
                        className='Input'
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </div>
                <div className='formElement'>
                <label className='Label'>
                    Email
                </label>
                <input
                        className='Input'
                        type='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </div>
                <div className='Label formElement'>
                    <button type='submit' className='Option botonBody botonCrear'>Crear orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;