import {useContext, useEffect} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

import { LoginContainer, LoginForm, FormContainer, FormImage } from './style'

import {AuthContext} from '../../../contexts/AuthUserContext'

import RegisterImage from '../../../assets/image/register.jpg'

export default function Index() {

  const {isLogged, Login} = useContext(AuthContext)
  console.log(isLogged)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function handleSubmit({name, email}) {
    if(isLogged) {
      return false
    }
    Login(name, email)

  }

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required()
  })
  return (
    <LoginContainer>
      <LoginForm>

        <FormImage url={RegisterImage}/>

        <FormContainer>

          <h2>Create My Account!</h2>

          <Formik
          initialValues={{
            name: '',
            email: ''
          }}

          onSubmit={handleSubmit}

          validationSchema={schema}
          >
            {({isValid}) =>(
              <Form>

                <span htmlFor='name'>Username:</span>
                <Field type='text' id='name' name='name'/>
                <div className='error_message'><ErrorMessage name='name'/></div>

                <span htmlFor='email'>E-mail Address:</span>
                <Field type='email' id='email' name='email'/>
                <div className='error_message'><ErrorMessage name='email'/></div>

                <button disabled={!isValid} className={isValid  ? 'valid' : ''} type='submit'>Create Account</button>

              </Form>
            )}
          </Formik>

        </FormContainer>

      </LoginForm>
    </LoginContainer>
  )
}
