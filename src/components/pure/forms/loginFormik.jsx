import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginEsquema = Yup.object().shape(
    {
        email: Yup.string()
        .email('Invalid email format ')
        .required('Email is required'),
        password: Yup.string()
        .required('Password is required')
    }
);

const LoginFormik = () => {
    
    const initialCredentials = {
        email: '',
        password: '',
    }

    return (
    <div>
    <h4>Login Formik</h4>
    <Formik 
        // Initial values that the form will take
        initialValues = { initialCredentials }
        // Yup validation Schema
        validationSchema = { loginEsquema }
        // onSubmit Event 
        onSubmit = { async (values) =>{
            await new Promise((r) => setTimeout(r,1000));
            alert(JSON.stringify(values,null,2));
            // We save the data in the localstorage
            localStorage.setItem('credentials', values);
        }}
    >
    {/* We obtain props from Formik */}

    {({values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,}) => (
            <Form>
        <label htmlFor="email">Email</label>
            <Field id="email" type="email" name="email" placeholder="example@email.com" />
            {/* Email Errors */}
            {
                errors.email && touched.email && 
                (
                    <ErrorMessage name='email' component='div'/>
                )
            }
            {/* Password Errors */}
            {
            errors.password && touched.password && 
                (
                    <ErrorMessage name='password' component='div' />
                )
            }
            <label htmlFor="email">password</label>
            <Field
                id="password"
                name="password"
                placeholder="password"
                type = 'password'
            />
            <button type="login">Login</button>
            {isSubmitting ? (<p>Login your credentials...</p>) : null}
        </Form>
            )
    }
    </Formik>
</div>
        );
}

export default LoginFormik;
