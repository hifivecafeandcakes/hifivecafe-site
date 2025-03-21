
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../theme/css-component/login.css"
import AOS from 'aos'
import 'aos/dist/aos.css';
import axios from 'axios'
import Status from './reservation/Status';
import validator from './validate.ts';
import { Link, useNavigate } from "react-router-dom";

import LOGO from '../theme/image/logo.png'


const Login = () => {
  const [toggle, setToggle] = useState(false);

  const res_id = localStorage.getItem('res_id');
  const res_cat_id = localStorage.getItem('res_cat_id');
  const res_scat_id = localStorage.getItem('res_scat_id');
  const res_code = localStorage.getItem('res_code');
  console.log(res_code);

  const navigate = useNavigate();

  const handleGoBack = () => {
    setClickBack(true);
    if (res_id && res_cat_id && res_scat_id) {
      navigate(`/sub_cat_list/${res_id}/${res_cat_id}`);
    } else {
      navigate(-1);
    } // -1 tells the browser to go back one step
  };

  // status
  const empStatus = { msg: "", type: "success", toggle: "close" }
  const [status, setStatus] = useState(empStatus);

  // login 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState(false);
  const [clickSubmit, setClickSubmit] = useState(false);
  const [clickBack, setClickBack] = useState(false);



  //Register
  const [emailId, setEmailId] = useState("");
  const [password1, setPassword1] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [emailIdError, setEmailIdError] = useState(false);
  const [password1Error, setPassword1Error] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [hasEmailIdError, setHasEmailIdError] = useState(false);
  const [hasPhoneError, setHasPhoneError] = useState(false);


  useEffect(() => {
    AOS.init({ duration: 1500 });
  })


  // ==================================================================================================
  const register = async (event) => {
    event.preventDefault();
    localStorage.clear();
    setStatus(empStatus);
    setClickSubmit(true);
    (name == "") ? setNameError(true) : setNameError(false);
    (phone == "") ? setPhoneError(true) : setPhoneError(false);
    (emailId == "") ? setEmailIdError(true) : setEmailIdError(false);
    (password1 == "") ? setPassword1Error(true) : setPassword1Error(false);

    (validator.email(emailId)) ? setHasEmailIdError(true) : setHasEmailIdError(false);

    (validator.indianPhoneNo(phone)) ? setHasPhoneError(true) : setHasPhoneError(false);


    if (emailIdError || password1Error || phoneError || nameError) {
      setStatus({ msg: "Please fill all required (*) fields", type: "error", toggle: "open" })
      setClickSubmit(false);
      return;
    }

    if (hasEmailIdError) {
      setStatus({ msg: "Wrong Email format", type: "error", toggle: "open" })
      setClickSubmit(false);
      return;
    }

    if (hasPhoneError) {
      setStatus({ msg: "Wrong Phone no format", type: "error", toggle: "open" })
      setClickSubmit(false);
      return;
    }

    const formData = new FormData();
    formData.append('email', emailId);
    formData.append('password', password1);
    formData.append('name', name);
    formData.append('phone', phone);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/website/register`, formData)
      console.log(res);
      if (res?.data?.Response?.Success == '1') {
        localStorage.setItem('user_id', res?.data?.Response?.result[0].user_id);
        localStorage.setItem('user_email', res?.data?.Response?.result[0].email);
        localStorage.setItem('user_phoneno', res?.data?.Response?.result[0].mobile);
        localStorage.setItem('user_name', res?.data?.Response?.result[0].name);
        setStatus({ msg: res?.data?.Response?.Message, type: "success", toggle: "open" })
        setTimeout(function () {
          if (res_id && res_cat_id && res_scat_id) {
            localStorage.setItem("res_id", res_id);
            localStorage.setItem("res_cat_id", res_cat_id);
            localStorage.setItem("res_scat_id", res_scat_id);
            localStorage.setItem("res_code", res_code);
            if (res_code == "CL") {
              navigate(`/clt_cart/${res_id}/${res_cat_id}/${res_scat_id}`);
            } else if (res_code == "BP") {
              navigate(`/btb_cart/${res_id}/${res_cat_id}/${res_scat_id}`);
            } else {
              navigate(`/tb_cart/${res_id}/${res_cat_id}/${res_scat_id}`);
            }
          } else {
            navigate(`/`);
          }
        }, 3000);
      } else {
        setClickSubmit(false);
        localStorage.setItem('user_id', "");
        localStorage.setItem('user_email', "");
        localStorage.setItem('user_phoneno', "");
        localStorage.setItem('user_name', "");
        setStatus({ msg: res?.data?.Response?.Message, type: "error", toggle: "open" })
      }
    } catch (err) {
      console.log(err);
      setClickSubmit(false);
      setStatus({ msg: "Something Went Wrong", type: "error", toggle: "open" })
    }
  };



  // ====================================================signin======================================
  const signin = async (e) => {
    e.preventDefault();
    setStatus(empStatus);
    setClickSubmit(true);
    localStorage.clear();
    (email == "") ? setEmailError(true) : setEmailError(false);
    (password == "") ? setPasswordError(true) : setPasswordError(false);

    (validator.email(email)) ? setHasEmailError(true) : setHasEmailError(false);

    if (emailError || passwordError) {
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
    formData.append('password', password);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/website/signin`, formData)
      console.log(res);
      if (res?.data?.Response?.Success == '1') {
        localStorage.setItem('user_id', res?.data?.Response?.result[0].user_id);
        localStorage.setItem('user_email', res?.data?.Response?.result[0].email);
        localStorage.setItem('user_phoneno', res?.data?.Response?.result[0].mobile);
        localStorage.setItem('user_name', res?.data?.Response?.result[0].name);
        setStatus({ msg: res?.data?.Response?.Message, type: "success", toggle: "open" })
        console.log(res_id + "-" + res_cat_id + "-" + res_scat_id);

        setTimeout(function () {
          if (res_id && res_cat_id && res_scat_id) {
            localStorage.setItem("res_id", res_id);
            localStorage.setItem("res_cat_id", res_cat_id);
            localStorage.setItem("res_scat_id", res_scat_id);
            localStorage.setItem("res_code", res_code);
            if (res_code == "CL") {
              navigate(`/clt_cart/${res_id}/${res_cat_id}/${res_scat_id}`);
            } else if (res_code == "BP") {
              navigate(`/btb_cart/${res_id}/${res_cat_id}/${res_scat_id}`);
            } else {
              navigate(`/tb_cart/${res_id}/${res_cat_id}/${res_scat_id}`);
            }
          } else {
            navigate(`/`);
          }
        }, 3000);

      } else {
        setClickSubmit(false);
        localStorage.setItem('user_id', "");
        localStorage.setItem('user_email', "");
        localStorage.setItem('user_phoneno', "");
        localStorage.setItem('user_name', "");
        setStatus({ msg: res?.data?.Response?.Message, type: "error", toggle: "open" })
      }
    } catch (err) {
      console.log(err);
      setClickSubmit(false);
      setStatus({ msg: "Something Went Wrong", type: "error", toggle: "open" })
    }
  }

  return (
    <>
      <div className='container-fluid '>

        <div className='row ' >
          <Status msg={status.msg} type={status.type} toggle={status.toggle} onClose={() => setStatus(empStatus)} />


          <div className='col-lg-12 col-md-12 col-sm-12 full '>
            <div className='loginbox'
            >

              {/* style={{
              backgroundImage: `url(${LOGO})`,
              backgroundSize: 'contain', // Ensures the entire image fits within the div
              backgroundPosition: 'center', // Centers the image in the div
              backgroundRepeat: 'no-repeat', // Prevents the image from repeating
            }} */}
              <Link to="/">
                <img src={LOGO} className='login-logo-image' alt="Hifive Logo" />
              </Link>
              <div className='buttonbox text-center'>
                <div id='btn' className={toggle ? 'regbtn  text-center' : 'logbtn  text-center'}></div>
                <button className='btn l_togglebtn text-center' onClick={() => { setName(""); setEmailId(""); setPassword1(""); setPhone(""); setToggle(false); setClickSubmit(false); }} >LOGIN</button>
                <button className='btn l_togglebtn' onClick={() => { setEmail(""); setPassword(""); setToggle(true); setClickSubmit(false); }}>REGISTER</button>
              </div>

              {
                toggle === false ? (
                  <form id="log" className='forminput'>
                    <input type="email" className='input'
                      autoComplete='off'
                      placeholder='Enter your email' maxLength={50} value={email}
                      data-aos='fade-down' onChange={(e) => { setEmailError(false); setEmail(e.target.value) }} />
                    {(emailError) ? <span className='error ps-3'>This is field required</span> : ""}

                    <input type="password" className='input' placeholder='password'
                      autoComplete='off'
                      minLength={6} maxLength={10} value={password}
                      data-aos='fade-down' onChange={(e) => { setPasswordError(false); setPassword(e.target.value) }} />
                    {(passwordError) ? <span className='error ps-3'>This is field required</span> : ""}

                    <div className='d-flex'>
                      <button type='button' className='btn submitbtn white' onClick={handleGoBack}
                        disabled={(clickBack) ? true : false}>
                        {(clickBack) ? <i class="fa fa-spinner fa-spin"></i> : ""}&nbsp;
                        Back
                      </button>

                      <button type='button' className='btn submitbtn' onClick={signin}
                        disabled={(clickSubmit) ? true : false}>
                        {(clickSubmit) ? <i class="fa fa-spinner fa-spin"></i> : ""}&nbsp;
                        Login
                      </button>
                    </div>

                    <Link className='btn submitbtn w-75 mt-4' to='/forgotpassword'
                      disabled={(clickSubmit) ? true : false}>
                      {(clickSubmit) ? <i class="fa fa-spinner fa-spin"></i> : ""}&nbsp;
                      Forgot Password
                    </Link>
                  </form>
                ) : (
                  <form id='reg' className='regforminput'>

                    <input type="text" className='input2' autoComplete='off' placeholder='Name' data-aos='fade-down' maxLength={15} value={name}
                      onChange={(e) => { setNameError(false); setName(e.target.value) }} /><br></br>
                    {(nameError) ? <span className='error ps-3'>This is field required</span> : ""}

                    <input type="number" className='input2' autoComplete='off' placeholder='Phone no' data-aos='fade-down' value={phone}
                      onChange={(e) => { setPhoneError(false); setPhone(e.target.value) }} />
                    {(phoneError) ? <span className='error ps-3'>This is field required</span> : ""}

                    <input type="email" className='input2' autoComplete='off' placeholder='Email id' data-aos='fade-down' maxLength={50} value={emailId}
                      onChange={(e) => { setEmailIdError(false); setEmailId(e.target.value) }} />
                    {(emailIdError) ? <span className='error ps-3'>This is field required</span> : ""}

                    <input type="password" className='input2' autoComplete='off' placeholder='password' minLength={6} maxLength={10} value={password1}
                      data-aos='fade-down' onChange={(e) => { setPassword1Error(false); setPassword1(e.target.value) }} />
                    {(password1Error) ? <span className='error ps-3'>This is field required</span> : ""}

                    <div className='d-flex'>
                      <button type='button' className='btn regsubmitbtn white' onClick={handleGoBack}
                        disabled={(clickBack) ? true : false}>
                        {(clickBack) ? <i class="fa fa-spinner fa-spin"></i> : ""}&nbsp;
                        Back
                      </button>
                      <button type='button' className='btn regsubmitbtn' onClick={register}
                        disabled={(clickSubmit) ? true : false}>
                        {(clickSubmit) ? <i class="fa fa-spinner fa-spin"></i> : ""}&nbsp;Register</button>
                    </div>
                  </form>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login


