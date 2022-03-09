import { useState } from 'react'
import Button from 'react-bootstrap/Button'


const Form = ({ buyOrder }) => {
    
    const  [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '', 
    })

    const handleChange = (event) => {      
        setDataForm({ 
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }
    

  return (
    <div>
        <form onSubmit={buyOrder}>
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='nombre' 
                        onChange={handleChange}
                        value={dataForm.name}
                    />
                    <br />
                    <input 
                        type='number' 
                        name='phone'
                        placeholder='teléfono' 
                        onChange={handleChange}
                        value={dataForm.phone}
                    />
                    <br/>
                    <input 
                        type='email' 
                        name='email'
                        placeholder='email' 
                        onChange={handleChange}
                        value={dataForm.email}
                    />
                    <input 
                        type='email' 
                        name='validateEmail'
                        placeholder='repetir email' 
                        onChange={handleChange}
                        value={dataForm.validateEmail}
                    />
                    <br/>
                    <br/>
                    <Button variant="dark" onClick={buyOrder}>Generar orden de compra</Button>
        </form>

    </div>
  )
}


export default Form