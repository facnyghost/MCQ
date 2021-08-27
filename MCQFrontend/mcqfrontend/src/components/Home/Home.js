import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { submitName } from '../../store/actions/Action'
import './Home.css'
const Home = ({ history }) => {
    const dispatch = useDispatch()

    const [userName, setuserName] = useState('')
    const [showSubmitForm, setshowSubmitForm] = useState(false)
    const submitNameForm = (e) => {
        e.preventDefault()
        dispatch(submitName({ userName }, history))
    }

    return (
        <div className="bg App">
            <div className="title">
                <h1>Simple Science</h1>
            </div>
            <div className="container">
                <div className="card">
                    <h3 className="title_2">Test Your Mind </h3>
                    <hr />
                    {!showSubmitForm &&
                        <div>
                            <p>RealLife Science questions</p>
                            <button onClick={() => setshowSubmitForm(true)}>Start Now!</button>
                        </div>
                    }
                    {
                        showSubmitForm &&
                        <form onSubmit={submitNameForm} className="form-control">
                            <label className="form-label">Enter User Name</label>
                            <div className="form-control-lg ">
                                <input
                                    onChange={e => setuserName(e.target.value)}
                                    value={userName}
                                    required='required'
                                    type='text'
                                    placeholder='Enter your Name'
                                />
                            </div>
                            <button>Submit</button>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}


export default Home;
