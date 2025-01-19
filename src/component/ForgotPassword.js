import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Status from './reservation/Status';
import "../theme/css-component/login.css"
import AOS from 'aos'
import 'aos/dist/aos.css';
import LOGO from '../theme/image/logo.png'
import validator from './validate.ts';
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState(false);

  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(false);

  const [newPassword, setNewPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState(false);

  const [step, setStep] = useState(1);
  const [clickSubmit, setClickSubmit] = useState(false);
  const [clickSubmitSecond, setClickSubmitSecond] = useState(false);
  const [clickBack, setClickBack] = useState(false);

  const empStatus = { msg: "", type: "success", toggle: "close" }
  const [status, setStatus] = useState(empStatus);

  const navigate = useNavigate();

  const handleGoBack = () => {
    setClickBack(true);
    navigate(-1); // -1 tells the browser to go back one step
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  })

  const requestOtp = async (event) => {
    event.preventDefault();
    setStatus(empStatus);
    setClickSubmit(true);
    try {
      (email == "") ? setEmailError(true) : setEmailError(false);
      (validator.email(email)) ? setHasEmailError(true) : setHasEmailError(false);

      if (emailError) {
        setStatus({ msg: "Please fill all required (*) fields", type: "error", toggle: "open" })
        setClickSubmit(false);
        return;
      }

      if (hasEmailError) {
        setStatus({ msg: "Wrong Email format", type: "error", toggle: "open" })
        setClickSubmit(false);
        return;
      }
      const formData = new FormData();
      formData.append('email', email);
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/website/forgot-password`, formData)
      console.log(res);
      if (res?.data?.Response?.Success === '1') {
        setStatus({ msg: res?.data?.Response?.Message, type: "success", toggle: "open" })
        setStep(2);
        setClickSubmit(false);
      } else {
        setStatus({ msg: res?.data?.Response?.Message, type: "error", toggle: "open" })
        setClickSubmit(false);
        setStep(1);
      }
    } catch (error) {
      console.error('Error requesting OTP', error);
      setClickSubmit(false);
      setStatus({ msg: "Something Went Wrong", type: "error", toggle: "open" })
    }
  };

  const resetPassword = async (event) => {
    event.preventDefault();
    setStatus(empStatus);
    setClickSubmitSecond(true);
    try {
      (otp == "") ? setOtpError(true) : setOtpError(false);
      (newPassword == "") ? setNewPasswordError(true) : setNewPasswordError(false);

      if (otpError || newPasswordError) {
        setStatus({ msg: "Please fill all required (*) fields", type: "error", toggle: "open" })
        setClickSubmitSecond(false);
        return;
      }
      const formData = new FormData();
      formData.append('email', email);
      formData.append('otp', otp);
      formData.append('newPassword', newPassword);
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/website/reset-password`, formData)
      console.log(res);
      if (res?.data?.Response?.Success === '1') {
        setStatus({ msg: res?.data?.Response?.Message, type: "success", toggle: "open" })
        setTimeout(function () {
          navigate(`/login`);
        }, 3000);
      } else {
        setClickSubmitSecond(false);
        setStatus({ msg: res?.data?.Response?.Message, type: "error", toggle: "open" })
      }
    } catch (error) {
      console.error('Error requesting OTP', error);
      setClickSubmitSecond(false);
      setStatus({ msg: "Something Went Wrong", type: "error", toggle: "open" })
    }
  };

  return (
    <>
      <div className='container-fluid '>

        <div className='row ' >
          <Status msg={status.msg} type={status.type} toggle={status.toggle} onClose={() => setStatus(empStatus)} />


          <div className='col-lg-12 col-md-12 col-sm-12 full '>
            <div className='loginbox'
            >
              <Link to="/">
                <img src={LOGO} className='login-logo-image' alt="Hifive Logo" />
              </Link>


              {step === 1 && (
                <>
                  <div className='mt-2 mb-2 text-center'>
                    <h3>Forgot Password</h3>
                  </div>
                  <form id="log" className='forminput'>
                    <input type="email" className='input' placeholder='Enter your email' maxLength={50} value={email}
                      data-aos='fade-down' onChange={(e) => { setEmailError(false); setEmail(e.target.value) }} />
                    {(emailError) ? <span className='error ps-3'>This is field required</span> : ""}
                    <div className='d-flex'>
                      <button type='button' className='btn submitbtn white' onClick={handleGoBack}
                        disabled={(clickBack) ? true : false}>
                        {(clickBack) ? <i class="fa fa-spinner fa-spin"></i> : ""}&nbsp;
                        Back
                      </button>
                      <button type='button' className='btn submitbtn w-50' onClick={requestOtp}
                        disabled={(clickSubmit) ? true : false}>
                        {(clickSubmit) ? <i class="fa fa-spinner fa-spin"></i> : ""}&nbsp;
                        Request OTP
                      </button>
                    </div>
                  </form>
                </>
              )}

              {step === 2 && (

                <>
                  <div className='mt-2 mb-2 text-center'>
                    <h3>Reset Password</h3>
                  </div>
                  <form id="log" className='forminput'>
                    <input type="number" className='input' placeholder='Enter OTP' maxLength={50} value={otp} autoComplete='off'
                      data-aos='fade-down' onChange={(e) => { setOtpError(false); setOtp(e.target.value) }} />
                    {(otpError) ? <span className='error ps-3'>This is field required</span> : ""}

                    <input type="New password" className='input2' autoComplete='off' placeholder='password'
                      minLength={6} maxLength={10} value={newPassword}
                      data-aos='fade-down' onChange={(e) => { setNewPasswordError(false); setNewPassword(e.target.value) }} />
                    {(newPasswordError) ? <span className='error ps-3'>This is field required</span> : ""}

                    <div className='d-flex'>
                      <button type='button' className='btn submitbtn w-25' onClick={resetPassword}
                        disabled={(clickSubmitSecond) ? true : false}>
                        {(clickSubmitSecond) ? <i class="fa fa-spinner fa-spin"></i> : ""}&nbsp;
                        Reset Password
                      </button>
                    </div>
                  </form>
                </>

              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword;
