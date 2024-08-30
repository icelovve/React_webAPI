import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/layout/auth/AuthLayout';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === "icelovevrzo456" && password === "1234") {
            Swal.fire({
                icon: "success",
                title: `ยินดีต้อนรับ ${username}` ,
                showConfirmButton: false,
                timer: 1500
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    navigate('/backend/dashboard');
                }
            });

        } else {
            Swal.fire({
                icon: "error",
                title: "คุณกรอกรหัสผิด",
                text: "กรุณากรอกรหัสใหม่!",
            });
        }
    }

    return (
        <AuthLayout title='Login'>
            <form className="card p-4 col-md-4 my-form" onSubmit={handleSubmit}>
                <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>
                <div className="mb-3 row">
                    <label htmlFor="username" className="col-md-4 col-form-label">ชื่อผู้ใช้</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="password" className="col-md-4 col-form-label">รหัสผ่าน</label>
                    <div className="col-md-8">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="submit" className="col-md-4 col-form-label"></label>
                    <div className="col-md-8 btn-action">
                        <input
                            type="submit"
                            className="btn btn-primary"
                            name="submit"
                            id="submit"
                            value="เข้าสู่ระบบ"
                        />
                    </div>
                </div>

                <div className="mb-2 row btn-action">
                    <label htmlFor="" className="col-md-4 col-form-label"></label>
                    <div className="col-md-8"><Link to="/forgotpassword">ลืมรหัสผ่าน ?</Link></div>
                </div>

                <div className="mb-2 row btn-action">
                    <label htmlFor="" className="col-md-4 col-form-label"></label>
                    <div className="col-md-8"><Link to="/register">ลงทะเบียน</Link></div>
                </div>

            </form>
        </AuthLayout>
    );
}

export default Login;
