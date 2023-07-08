import React, { useState } from 'react'

const Signup = () => {

    let [name, setname] = useState()
    let [email, setemail] = useState()
    let [password, setpassword] = useState()



    let FormHandel = (event) => {
        event.preventDefault()

        let data = {

            "name": name,
            "email": email,
            "password": password,

        }

        console.log(data)

    }
    return (
        <div className='container'>
            <div className='row justify-content-center' >
                <div className='col-sm-7 mt-5 bg-light shadow p-5'>
                    <div className='text-center'>
                        <h6>
                            Signup-Form
                        </h6>
                    </div>
                    <form action="/action_page.php">
                        <div className="form-group">
                            <label htmlFor="email">Name</label>
                            <input type="text" className="form-control" onChange={(e) => setname(e.target.value)} placeholder="Enter name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" onChange={(e) => setemail(e.target.value)} placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" onChange={(e) => setpassword(e.target.value)} placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={FormHandel}>Submit</button>
                    </form>
                </div>


            </div>


        </div>
    )
}

export default Signup