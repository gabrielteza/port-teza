import React from 'react'
import './contact-form.css'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Enviar Mensagem')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container">
      <h2 className='title-contact'>Entre em Contato Comigo</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3" id='form-texts'>
          <label className="form-label" htmlFor="name">
            Nome: 
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email: 
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Mensagem: 
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm