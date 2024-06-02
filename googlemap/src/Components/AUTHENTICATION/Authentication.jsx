import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Form, Link, useNavigate } from 'react-router-dom'
import { userLoginAPI, userRegisterAPI } from '../../services/Allapi';
import { ToastContainer, toast } from 'react-toastify';

function Authentication({ register }) {

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    })

    console.log(userData);

    const navigate = useNavigate()


    const registerform = register ? true : false

    const handleRegister = async (e) => {
        e.preventDefault()

        const { username, email, password } = userData
        if (!username || !email || !password) {
           alert("plese fill the form")
        }
        else {
            const result = await userRegisterAPI(userData)
            console.log(result.data);
            if (result.status === 200) {
                alert("succesfull")

                setUserData({
                    username: "",
                    email: "",
                    password: "",
                })
                //navigate to loginpage
                navigate('/login')
            }
            else {
                alert(result.response.data)
            }
        }
    }

    // const handleLogin = async (e)=>{
    //     e.preventDefault()

    //     const {email,password} = userData

    //     if(!email || !password){
    //         alert('please fill the form completely')
    //     }
    //     else{
    //         const result = await userLoginAPI(userData)
    //         console.log(userData);

    //         if(result.status === 200){
    //             alert('login successfull')
           

    //         setUserData({
    //             email:"",
    //             password:""                
    //         })
    //         navigate('/')
    //     }
    //     else{
    //         alert(result.response.data)
    //     }
    //     }
    // }
    const handleLogin = async (e) => {
        e.preventDefault();
    
        const { email, password } = userData;
    
        if (!email || !password) {
            alert('Please fill the form completely');
        } else {
            try {
                const result = await userLoginAPI(userData);
                console.log(result);
    
                if (result.status === 200) {
                    console.log(result);
                    localStorage.setItem('userid',result.data._id)
                    alert('Login successful');
    
                    // Extract username from the result
                    const { username } = result.data;
    
                    // Set username in localStorage
                    localStorage.setItem('username', username);
    
                    setUserData({
                        email: "",
                        password: ""
                    });
    
                    navigate('/homepage');
                } else {
                    toast.error(result.response.data);
                    // alert(result.response.data);
                }
            } catch (error) {
                console.error('Login failed:', error);
                alert('Login failed. Please try again.');
            }
        }
    };
    




    return (
        <>
            <div id='bg' style={{ width: "100%", height: "100vh", backgroundColor: "ButtonFace" }} className='d-flex justify-content-center align-items-center'>
                <div className="container-fluid w-50">
                    <h3 className='d-flex justify-content-center align-items-center text-black' >Verify it’s you</h3>
                    <div className='shadow p-5'>
                        <Row>
                            <Col>
                                <div className='row align-items-center shadow rounded'>
                                    <div className="col-lg-6">
                                        {/* <img src="https://fonts.gstatic.com/s/i/productlogos/maps/v7/192px.svg" alt="no image" width={'75%'} /> */}
                                        <img src="https://www.google.com/images/branding/product/2x/maps_96in128dp.png" alt="no image" width={'75%'} />

                                    </div>
                                    <div className="col-lg-6">
                                        <div className='d-flex align-items-center justify-content-center flex-column'>

                                            <h6 style={{ color: "black" }} className=''>
                                                {
                                                    registerform ? "sign up to your account" : "sign in to your account"
                                                }

                                            </h6>

                                           {registerform && <input
                                                type="text"
                                                required
                                                className="block w-full mb-2 p-2 border border-black rounded shadow focus:ring-indigo focus:border-indigo-500 sm:text-sm"
                                                placeholder='username'
                                                value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })}

                                            />}

                                            <input
                                                type="text"
                                                required
                                                className="block w-full mb-2 p-2 border border-black rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder='email'
                                                value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })}

                                            />

                                            <input
                                                type="text"
                                                required
                                                className="block w-full mb-4 p-2 border border-black rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder='password'
                                                value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })}

                                            />

                                            {
                                                registerform ?
                                                    <div className='d-flex align-items-center flex-column '>
                                                        <button onClick={handleRegister} className='btn btn-warning rounded mb-3'>
                                                            Register
                                                        </button>
                                                        <p className='text-danger'>Already a member?<Link style={{ textDecoration: "none", color: "black" }} to={'/login'}>login here!</Link></p>

                                                    </div> :
                                                    <div className='d-flex align-items-center flex-column '>
                                                        <button onClick={handleLogin} className='btn btn-warning rounded mb-3'>
                                                            login
                                                        </button>
                                                        <p className='text-danger'>New to the site? Click here to <Link style={{
                                                            textDecoration: "none",
                                                            color: "black"
                                                        }} to={'/register'}>register</Link></p>
                                                    </div>}

                                        </div>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Authentication