import React from 'react';
import { useForm } from 'react-hook-form'

/*Using the hook-form to return an object*/

const FormBasic = () =>{
    /*Desestructuración*/
    const {register,handleSubmit} = useForm();
    return (
        <>
            <h2>CLIENT REGISTER</h2>
            <form className="form-react">
                <div className='form-control'>
                    <label>ID</label>
                    <input type="text" {...register('id')}/>
                </div>
                <div className='form-control'>
                    <label>RFC</label>
                    <input type="text" {...register('rfc')}/>
                </div>
                <div className='form-control'>
                    <label>NOMBRE</label>
                    <input type="text" {...register('nombre')}/>
                </div>
                <div className='form-control'>
                    <label>APELLIDOS</label>
                    <input type="text" {...register('apellidos')}/>
                </div>
                <div className='form-control'>
                    <label>DIRECCIÓN</label>
                    <input type="text" {...register('direccion')}/>
                </div>
                <div className='form-control'>
                    <label>CORREO ELECTRÓNICO</label>
                    <input type="text" {...register('email')}/>
                </div>
                <div className='form-control'>
                    <label>TELÉFONO</label>
                    <input type="number" {...register('telefono')}/>
                </div>
                <div className='form-control'>
                    <label>PIN</label>
                    <input type="number" {...register('pin')}/>
                </div>
                <div className='form-control'>
                    <label>STATUS</label>
                    <input type="text" {...register('status')}/>
                </div>
                <button type='submit'>Send</button>
            </form>
        </>
    )
}

export default FormBasic