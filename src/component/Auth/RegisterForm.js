import React, { useState } from 'react'
import { register } from '../../api/auth';

const RegisterForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e?.preventDefault();

        try {
            const res = await register(username, password, confirmPassword);
            alert('User Registerd Successfully')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="row gy-3 overflow-hidden">
                <div className="col-12">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="username" id="username" value={username} placeholder="Username" required onChange={(e) => setUserName(e.target.value)} />
                        <label for="username" className="form-label">Username</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" name="password" id="password" value={password} placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                        <label for="password" className="form-label">Password</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" value={confirmPassword} placeholder="confirmPassword" required onChange={(e) => setConfirmPassword(e.target.value)} />
                        <label for="confirmPassword" className="form-label">Confirm Password</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">Register Now</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default RegisterForm