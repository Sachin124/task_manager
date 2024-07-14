import React, { useContext, useState } from 'react'
import { login as Login} from '../../api/auth';
import { AuthContext } from '../../context/AuthContext';

const LoginForm = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {setAuthState, login} = useContext(AuthContext) 
    const handleSubmit = async (e) => {
        e?.preventDefault();
        try {
            const { data } = await Login(username, password);
            login(username, data.token)
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="row gy-3 overflow-hidden">
                <div className="col-12">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="username" id="username" value={username} placeholder="Username" required onChange={(e)=> setUserName(e.target.value)} />
                        <label for="username" className="form-label">Username</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" name="password" id="password" value={password} placeholder="Password" required onChange={(e)=> setPassword(e.target.value)}/>
                        <label for="password" className="form-label">Password</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">Log in now</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default LoginForm