import React, { useState } from 'react'
import { Grid,Paper,Avatar, TextField, Button, Typography,Link } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";

export const Login = ({auth,setAuth}) => {
    const [alert, setalert] = useState(false);
    const paperStyle={padding :20,height:'65vh',width:280, margin:"auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    // const history = useNavigate();
    let navigate = useNavigate();
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    const onSubmit = async (values, props) => {
        fetch('https://api-staging-v2.sploot.space/api/v2/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            username: `${values.username}`,
            password:  `${values.password}`
        })
        })
        .then(response => response.json())
        .then(data => {

            const authtoken = data.data.data.authToken;
            localStorage.setItem('token', authtoken);
            setAuth(authtoken);
            if (authtoken) {
                navigate("/blogs");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
            setalert(true);
        }, 500)

    }
  return (
    <div style={{height: '100vh',paddingTop:'15vh'}}>
        <Paper elevation={10} style={paperStyle}>
        <div align='center'>
                     <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2>Log In</h2>
                </div>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Username' name="username"
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="username" />}
                                style={{ 
                                    marginBottom: '15px' 
                                  }}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} 
                                style={{ 
                                    marginBottom: '15px' 
                                  }}/>
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign in"}</Button>

                        </Form>
                    )}
                </Formik>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                {alert && <Typography style={{color:'red', textAlign:'center',marginTop:'15px'}}> Invalid Sign In!</Typography>}
        </Paper>
    </div>
  )
}
