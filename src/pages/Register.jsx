import { Link } from 'react-router-dom';
import AuthLayout from '../components/layout/auth/AuthLayout';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const registerSubmit = (data) => {
        console.log(data);
    }

    return (
        <AuthLayout title='Register'>
            <form className="card p-4 col-md-4 my-form" onSubmit={handleSubmit(registerSubmit)}>
                <h3 className="text-center mb-4">ลงทะเบียน</h3>

                <div className="mb-3 row">
                    <label htmlFor="fullname" className="col-md-4 col-form-label">ชื่อ-สกุล</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            {...register('fullname', { required: 'กรุณากรอกชื่อ-สกุล' })}
                        />
                        {errors.fullname && <span className="error-message text-danger small">*{errors.fullname.message}</span>}
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="email" className="col-md-4 col-form-label">อีเมล์</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            {...register('email', { required: 'กรุณากรอกอีเมล์' })}
                        />
                        {errors.email && <span className="error-message text-danger small">*{errors.email.message}</span>}
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="username" className="col-md-4 col-form-label">ชื่อผู้ใช้</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            {...register('username', { required: 'กรุณากรอกชื่อผู้ใช้' })}
                        />
                        {errors.username && <span className="error-message text-danger small">*{errors.username.message}</span>}
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="password" className="col-md-4 col-form-label">รหัสผ่าน</label>
                    <div className="col-md-8">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            {...register('password', { required: 'กรุณากรอกรหัสผ่าน' })}
                        />
                        {errors.password && <span className="error-message text-danger small">*{errors.password.message}</span>}
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
                            value="ลงทะเบียน"
                        />
                        &nbsp;&nbsp;
                        <input
                            type="reset"
                            className="btn btn-danger"
                            name="Reset"
                            id="reset"
                            value="ล้างข้อมูล"
                        />
                    </div>
                </div>

                <div className="mb-2 row btn-action">
                    <label htmlFor="" className="col-md-4 col-form-label"></label>
                    <div className="col-md-8">
                        <Link to="/login">เข้าสู่ระบบ</Link>
                    </div>
                </div>
            </form>
        </AuthLayout>
    );
}

export default Register;
