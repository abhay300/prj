import React, { useEffect, useState } from 'react'

const Signup = () => {

    let [arr, setarr] = useState([])

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

        setarr([...arr, data])
        // console.log(data)
        // console.log(arr)

    }

    useEffect(() => {
        // console.log(arr)
    }, [arr])
    return (
        <>
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



        <div className='row justify-content-center mt-5'>


{arr.map((items,index)=>{
    // console.log(items)
    // console.log(index)

    return(

        <div className='col-sm-3'>
        
        <div className='card'>
        <div className='card-header'>
        <span>name:</span><span>{items.name}</span>
        </div>
        <div className='card-body'>
        <span>email:</span><span>{items.email}</span>
        
        </div>
        <div className='card-footer'>
        <span>password:</span><span>{items.password}</span>
    
        </div>
        <div className='card-footer'>
<button className='btn btn-danger m-1'>Delete</button>    
<button className='btn btn-info m-1'>edit</button>    
<button className='btn btn-success m-1'>update</button>    
        </div>
        
        </div>
        </div>

    )
})}

       
        </div>
        </>
    )
}

export default Signup