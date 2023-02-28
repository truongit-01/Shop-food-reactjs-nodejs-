import React, { useEffect, useState } from 'react';
import "../../src/App.css";
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import { Button, TextField } from '@mui/material';
import { login } from '../store/redux/actions/userActions';
// import { useAppDispatch } from '../store/redux/Store';
import { StateStore } from '../App';
// import LoadingButton from '@mui/lab/LoadingButton';
import ErrorMessage from '../components/ErrorMessage';
import BackdropProgressLoading from '../components/BackdropProgressLoading';

export interface TypeObjectInput {
    name?: string,
    sex?: any,
    national?: string,
    email?: string,
    password?: string,
    comfirmPass?: string,
    numberPhone?: string
}

export interface ErrorSubmit {
    name?: string,
    sex?: string,
    national?: string,
    numberPhone?: string,
    email?: string,
    password?: string,
    comfirmPass?: string,
}

export interface TypeError {
    name?: string,
    sex?: string,
    national?: string,
    email?: string,
    password?: string,
    comfirmPass?: string,
    checkcomfirmPass?: boolean,
    numberPhone?: string;
}

export default function Login() {
    const [inputs, setInputs] = useState<TypeObjectInput>({});
    const [errors, setErrors] = useState<TypeError>({});

    const dispatch = useDispatch();

    const location = useLocation();
    const navigate = useNavigate();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userLogin = useSelector((state: StateStore) => state.userLogin); // lấy dữ liệu từ store
    const { error, loading, userInfo } = userLogin;

    // Xử lý chuyển trang khi đã đăng nhập
    useEffect(() => {
        // if (userInfo) {
        //     navigate(redirect)
        // }

        if (userInfo) {
            navigate('/');
        }
    }, [userInfo, navigate, redirect])


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nameInput = e.target.name;
        let valueInput = e.target.value;

        setInputs(state => ({ ...state, [nameInput]: valueInput })) // 
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let errorSubmit: ErrorSubmit = {
            numberPhone: ''
        };
        // let flag = true;
        let check = false;

        // validate email
        if (inputs.email === undefined || inputs.email === '') {
            errorSubmit.email = "Bạn vui lòng nhập email của mình !";
            setErrors(errorSubmit);
            check = false;
        } else {
            setErrors(errorSubmit);
            check = true;
        }

        // validate password
        if (inputs.password === undefined || inputs.password === '') {
            errorSubmit.password = "Bạn vui lòng nhập password của mình !";
            setErrors(errorSubmit);
            check = false;
        } else {
            setErrors(errorSubmit);
            check = true;
        }

        const loginPromise = login(inputs.email, inputs.password);
        if (check) {
            loginPromise(dispatch);
            // dispatch(login(email, password)) => lỗi

        } else {
            alert('đăng nhập thất bại !')
        }
    }

    return (
        <>
            <div style={{ paddingTop: "80px" }} className='body_form'>
                {loading && <BackdropProgressLoading />}
                <div style={{ padding: '10px', height: '100%' }} className='backdrop'>
                    {
                        error ?
                            <>
                                <ErrorMessage messageError={`${error}`} />
                            </> : <p style={{ marginTop: '110px' }}></p>
                    }
                    <div className="wrap_form">
                        <div style={{ color: '#BF014B' }} className="title">ĐĂNG NHẬP</div>
                        <div className="content">
                            <form onSubmit={handleSubmit}>
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details">User Name</span>
                                        <input onChange={handleInputChange}
                                            name="email"
                                            type="text"
                                            placeholder="Enter your username"
                                        />
                                    </div>
                                    {errors.email === '' || errors.email === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', marginBottom: '8px', fontSize: '14px' }}>{errors.email}</p>}

                                    <div className="input-box">
                                        <span className="details">Password</span>
                                        <input
                                            name="password"
                                            onChange={handleInputChange}
                                            type="password"
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                    {errors.password === '' || errors.password === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', margin: '7px', fontSize: '14px' }}>{errors.password}</p>}
                                </div>
                                

                                {/* <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: "200px", background: 'pink', margin: "auto" }} className="gender-details">
                            <p>gg</p>
                            <p>gitthub</p>
                            <p>dsd</p>
                        </div> */}

                                <div className="button">
                                    <input type="submit" value="ĐĂNG NHẬP" />

                                </div>
                            </form>
                        </div>
                    </div >
                </div>

            </div >
        </>

    )
}