import React from 'react'
import { ContactContainer, ContactForm, ContactNotes } from './style'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

export default function index() {

    function handleSubmit() {
        alert('sucess')
    }

    const schema = yup.object().shape({
        name: yup.string()
        .required()
        .min(3)
        .max(35),

        email: yup.string()
        .email()
        .required(),

        message: yup.string()
        .required()
        .min(15)
    })

  return (
    <ContactContainer>
        <div className='flex_container'>

            <h1>Teste</h1>

            <ContactForm>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: ''
                    }}

                    onSubmit={handleSubmit}
                    validationSchema={schema}
                >
                    {({isValid}) => (

                    <Form>
                        <span htmlFor='name'>a</span>
                        <Field type='text' id='name' name='name'/>
                        <div><ErrorMessage name='name'/></div>

                        <span htmlFor='email'>a</span>
                        <Field type='text' id='email' name='email'/>
                        <div><ErrorMessage name='email'/></div>

                        <span htmlFor='message'>a</span>
                        <Field type='text' id='message' name='message'/>
                        <div><ErrorMessage name='message'/></div>

                        <button type='submit' disabled={!isValid}>Enter</button>
                    </Form>

                    )}
                </Formik>
            </ContactForm>

            <ContactNotes>
                <ul>
                    <li>123 Suspendis mattis, Sollicitudin District, Accums Fringilla</li>

                    <li>Email: contact@freetofun.com</li>

                    <li>Phone: 0123456789</li>
                </ul>

                <h3>Note</h3>

                <p>Please note we can't promise to reply to all emails we receive, but we definitely read it all.</p>

            </ContactNotes>
        </div>
    </ContactContainer>
  )
}
