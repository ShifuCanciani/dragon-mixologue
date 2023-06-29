import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async({request}) =>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const response = await axios.post(newsletterUrl, data)

  console.log(response)
  toast.success(response.data.msg)
  return redirect('/')
}

const Newsletter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return <Form className='form' method='POST'>
    <h4 style={{textAlign:'center', marginBottom: '2rem'}}>
      our newsletter
    </h4>
    {/* name */}
    <div className='form-row'>
      <label htmlFor='name' className='form_label'>
        name
      </label>
      <input 
        type='text' 
        className='form-input' 
        name='name' 
        id='name'
        defaultValue="Jackie" 
        />
    </div>
    {/* lastname */}
    <div className='form-row'>
      <label htmlFor='lastname' className='form_label'>
        last name
      </label>
      <input 
        type='text' 
        className='form-input'
        name='lastname' 
        id='lastname'
        defaultValue="Chan" 
        />
    </div>
     {/* email */}
     <div className='form-row'>
      <label htmlFor='email' className='form_label'>
        email
      </label>
      <input 
        type='email' 
        className='form-input' 
        name='email' 
        id='email' 
        defaultValue="break@yourlimit.com" 
        />
    </div>
    <button 
      type='submit' 
      className='btn bnt-block'
      style={{marginTop: '0,5rem'}}
      disabled={isSubmitting}
      >
        {isSubmitting ? 'submitting' :' submit'}
      </button>
  </Form>
}

export default Newsletter
