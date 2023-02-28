import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const userLogin = useSelector((state: any) => state.userLogin);
    const { userInfo } = userLogin;
    const [data, setdata] = useState([]);
    const [error, setError] = useState('');


    useEffect(() => {
        Token()
    }, [])

    const Token = async () => {
        try {
            const cc = await userInfo;
            await axios.get(`http://localhost:8080/api/v1/usersAdmin`, {
                headers: { authorization: "Bearer " + /* userInfo.accessToken */ `${cc.accessToken}` }
            }).then((data: any) => setdata(data.data));
        } catch (error: any) {
            setError(error.response.data)
        }
    }
    return (
        <div>
            {/* {
                error ? <div style={{ paddingTop: '80px' }}>{error}</div> : null
            }

            {
                data ? data.map((data: { name: String }) => (
                    <div style={{ paddingTop: '80px' }}>
                        <b>name</b> {data.name}
                        <b>name</b> {data.name}
                        <b>name</b> {data.name}
                        <b>name</b> {data.name}
                    </div>)) : null
            } */}

            <div style={{ width: '40%', background: '#000', height: '100%', position: 'fixed' }} className=''>nav</div>
            <div className=''>s</div>
        </div>
    )
}
