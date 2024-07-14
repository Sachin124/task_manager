import React from 'react'
import RegisterForm from '../component/Auth/RegisterForm'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className="bg-primary d-flex align-items-center  py-3 py-md-5 py-xl-8 vh-100">
    <div className="container">
        <div className="row gy-4 align-items-center">
            <div className="col-12 col-md-6 col-xl-7">
                <div className="d-flex justify-content-center text-bg-primary">
                    <div className="col-12 col-xl-9">
                        <hr className="border-primary-subtle mb-4" />
                        <h2 className="h1 mb-4">Task Management tool.</h2>
                        <div className="text-endx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-grip-horizontal" viewBox="0 0 16 16">
                                <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-xl-5">
                <div className="card border-0 rounded-4">
                    <div className="card-body p-3 p-md-4 p-xl-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="mb-4">
                                    <h3>Sign Up</h3>
                                    <p>Already have an account? <Link to='/login'>Sign in</Link></p>
                                </div>
                            </div>
                        </div>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Register