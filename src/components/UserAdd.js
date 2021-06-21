import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { baseURL } from './BaseURL';

const UserAdd = () => {

    const [user, setUser] = useState({
        name: '',
        userName: '',
        email: '',
        phone: '',
        website: ''
    });

    const history = useHistory();

    const { name, userName, email, phone, website } = user;

    //take all input from input fields
    const handleInputFields = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        console.log(user)
        await axios.post(baseURL, user);
        history.push('/');
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add User</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => handleInputFields(e)}
                            placeholder="Name"
                            className="form-control form-control-lg" />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            name="userName"
                            value={userName}
                            onChange={e => handleInputFields(e)}
                            placeholder="Username"
                            className="form-control form-control-lg" />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={e => handleInputFields(e)}
                            placeholder="Email"
                            className="form-control form-control-lg" />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={e => handleInputFields(e)}
                            placeholder="Phone Number"
                            className="form-control form-control-lg" />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            name="website"
                            value={website}
                            onChange={e => handleInputFields(e)}
                            placeholder="Website"
                            className="form-control form-control-lg" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Add User</button>
                </form>
            </div>
        </div>
    );
};

export default UserAdd;