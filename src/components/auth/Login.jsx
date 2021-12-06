import React, { useState, useRef } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { TextField, Button, InputAdornment, IconButton, Checkbox } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { browserLocalPersistence, browserSessionPersistence, setPersistence } from "firebase/auth";
import { auth } from '../../firebase';
import { authUser } from '../../redux/actions/authActions';
import { isLogin } from '../../redux/actions/authActions';
import { useSnackbar } from 'notistack';

const Login = () => {
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const onSubmit = () => {
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then((res) => {
                setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
                dispatch(authUser(res.user));
            })
            .catch((error) => {
                enqueueSnackbar(error.code, {
                    variant: 'error'
                });
            });
    }

    return (
        <div className="register">
            <div className="register-form">
                <div className="title">Sign in your account</div>
                <form className="form">
                    <TextField type="email" className="item email" placeholder="Your email" focused inputRef={emailRef} />
                    <TextField type={showPassword ? "password" : "text"} className="item password" placeholder="Your password" focused
                        inputRef={passwordRef}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                    <div className="remember-me">
                        <Checkbox className="check" onChange={(e) => setRememberMe(e.target.checked)} /> Remember me
                    </div>
                    <Button className="item" variant="contained" onClick={onSubmit}>Submit</Button>
                </form>
                <p>You don't an account? <span className="move-action-auth" onClick={() => dispatch(isLogin(false))}>Sign up</span></p>
            </div>
        </div>
    )
}

export default Login
