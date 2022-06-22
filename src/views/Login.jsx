import React, { useRef } from 'react'
import Hero from "../assets/img/Hero image.png"
import HeroVector from '../assets/img/VectorSign.png'
import ShowPass from '../assets/img/showPass.png'
import EyeSlash from '../assets/img/eye-slash-solid.svg'
import { useState } from "react"

function Login() {

    const [user, setUser] = useState({ name: "", password: "" })
    // const [password, setPassword] = useState("")
    const [required, setRequired] = useState('hide')
    const [disabled, setDisabled] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [snackbarShow, setSnackbarShow] = useState("")

    const email = useRef()
    const password = useRef()

    const handleActivation = () => {
        // Submission button disabled
        if (email.current.value.length > 0 && password.current.value.length > 4) {
            setDisabled(false)
        }
        // Fields value errors
        if ((email.current.value !== 'murad@ze-tronics.com') || (password.current.value !== "12345")) {
            setRequired("")
        } else {
            setRequired("hide")
        }

    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = () => {

        if (email.current.value == 'murad@ze-tronics.com' && password.current.value == "12345") {
            localStorage.setItem("emailData", "murad@ze-tronics.com")
            localStorage.setItem("passwordData", "12345")
        } else {
            setSnackbarShow("show")
            setTimeout(() => { setSnackbarShow("null") }, 4000);
         
        }

    }

    return (
        <>
            <div className='hero'>
                <div className="mainLeft">
                    <img id='coverImg' src={Hero} alt="" />
                </div>


                <div className="mainRight">
                    <div className="rightComp">
                        <img src={HeroVector} alt="" />
                        <div className={required}>Email or password is invalid</div> <br />

                        <h1 id='loginText'>Login</h1>

                        <form >
                            <input required className='inputs' type="email" placeholder='Email'
                                ref={email} onChange={handleActivation} />


                            <div className={`${required} red`}>Email or password is invalid</div> <br />
                            <div className="container">

                                <input required className='inputs password' type={showPassword ? "text" : "password"} placeholder='Password'
                                    ref={password} onChange={handleActivation} />
                                <img id='eye' src={showPassword ? EyeSlash : ShowPass} alt="show" onClick={handleShowPassword} />

                            </div>

                            <button id='loginBtn' onClick={handleSubmit} disabled={disabled} >LOGIN</button>
                        </form>
                    </div>

                </div>


            </div>


            <div id="snackbar" className={snackbarShow}>Email or password is not correct</div>

        </>
    )
}

export default Login