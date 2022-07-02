import React, { useState } from 'react'
import Select from 'react-select'
import { Controller, useForm } from "react-hook-form";

import './registeration.css'
function Registeration() {
    const { register, handleSubmit, watch, formState: { errors }, control } = useForm();
    const [confirm, setConfirm] = useState({
        password: '',
        confirmed: ''
    })
    console.log('errors',errors)
    const submitForm = (data) => {
        console.log('formSubmitted')
        console.log(data);
        let obConf = { ...confirm }
        obConf['password'] = data.password;
        obConf['confirmed'] = data.confirmPassword;
        setConfirm(obConf);

    }
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className='register d-flex align-items-center justify-content-center'>
            <div className=""
                style={
                    {
                        background: '#2C2B69',
                        width: '500px',
                        maxWidth: '500px',
                        minHeight: '600px',
                        borderRadius: '6px'

                    }
                }>
                <h2 style={
                    {
                        background: '#262157',
                        textAlign: 'center',
                        color: 'white',
                        padding: '10px',
                        borderRadius: '6px'
                    }
                }>Registeration Form</h2>

                <form className="form p-4" onSubmit={handleSubmit(submitForm)}>


                    <div className="form-group my-2" >

                        <label htmlFor='userName'
                            style={
                                {
                                    margin: '10px 0',
                                    color: 'white',
                                    fontSize: '18px'
                                }
                            }>
                            userName:
                            <br />
                            {errors.user_name?.type === 'required' && "First name is required" && <p className='text-danger mt-2 mb-0'>this is required</p>}
                        </label>
                        <input type="text" className="form-control"
                            style={
                                {
                                    fontWeight: 'bold',
                                    fontSize: '20px',
                                    color: '#777',
                                    padding: '7px 15px'
                                }
                            } {...register("user_name", { required: true })} />
                    </div>
                    <div className="form-group my-2" >
                        <label htmlFor='email'
                            style={
                                {
                                    margin: '10px 0',
                                    color: 'white',
                                    fontSize: '18px'
                                }
                            } >
                            email:
                            <br />
                            {confirm.password !=confirm.confirmed && <span className='mt-2 text-danger'>*Invlide email</span>}
                        </label>
                        <input type="email" className="form-control"
                            style={
                                {
                                    fontWeight: 'bold',
                                    fontSize: '20px',
                                    color: '#777',
                                    padding: '7px 15px'
                                }
                            } {...register('email', { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} />
                    </div>

                            <br />
                    <Controller className=' controller' style={{margin:'40px 0'}}
                        name="gender"
                        control={control}
                        render={({ field }) => <Select placeholder='Gender'
                            {...field}
                            options={[
                                { value: "Male", label: "Male" },
                                { value: "FeMale", label: "FeMale" },
                                
                            ]}
                        />} />

<br />
<Controller className=' controller' style={{margin:'40px 0'}}
                        name="Hobbies"
                        control={control}
                        render={({ field }) => <Select isMulti name='hoppies' placeholder='Hoppies'
                            {...field}
                            options={[
                                { value: "Reading", label: "Reading" },
                                { value: "Walking", label: "Walking" },
                                { value: "Watching Movies", label: "Watching Movies" }
                            ]}
                        />} />


                    <div className="form-group my-2" >
                        <label htmlFor='password'
                            style={
                                {
                                    margin: '10px 0',
                                    color: 'white',
                                    fontSize: '18px'
                                }
                            }>
                            password:
                            <br />
                            {errors.password?.type == 'required' && <span className='text-danger mb-2'>* This Field is Required</span>}
                            {errors.password?.type == 'maxLength' && <span className='text-danger mb-2'>* You Should not Exceed The Maximum Length</span>}
                        </label>
                        <input type="password" className="form-control"
                            style={
                                {
                                    fontWeight: 'bold',
                                    fontSize: '20px',
                                    color: '#777',
                                    padding: '7px 15px'
                                }
                            } {...register('password', { required: true, maxLength: 20 })} />
                    </div>
                    <div className="form-group my-2" >
                        <label htmlFor='confirmPassword'

                            style={
                                {
                                    margin: '10px 0',
                                    color: 'white',
                                    fontSize: '18px'
                                }
                            }>
                            confirmPassword:
                            <br />
                            {confirm.password != confirm.confirmed && <p className='text-danger'>* The Password Doesn't Match</p>}

                        </label>
                        <input type="password" className="form-control"
                            style={
                                {
                                    fontWeight: 'bold',
                                    fontSize: '20px',
                                    color: '#777',
                                    padding: '7px 15px'
                                }
                            } {...register('confirmPassword', { required: true })} />
                    </div>

                    <div className="button-wrapper my-4 d-flex justify-content-end">
                        <button className="btn btn-lg btn-success w-25 " style={{

                        }} >SignUp</button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default Registeration
