import React, { useState, useRef } from 'react';
import './style.scss';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { auth } from '../../firebase';
import { isLogin } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const Register = () => {
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = () => {
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then(({ user }) => {
                console.log(auth.currentUser);

            })
            .catch((error) => {
                console.log(error.code);
            });
    }

    return (
        <div className="register">
            <div className="register-form">
                <div className="title">Register your account</div>
                <form className="form">
                    <TextField type="email" className="item email" placeholder="Your email" focused inputRef={emailRef} />
                    <TextField type={showPassword ? "password" : "text"} className="item password" placeholder="Your password" focused
                        inputRef={passwordRef}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                    <TextField type={showConfirmPassword ? "password" : "text"} className="item confirm-password" placeholder="Confirm password" focused
                        inputRef={confirmPasswordRef}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                    <Button className="item" variant="contained" onClick={onSubmit}>Submit</Button>
                </form>
                <p>Have an account? <span className="move-action-auth" onClick={() => dispatch(isLogin(true))}>Sign in</span></p>
            </div>
        </div>
    )
}

export default Register
