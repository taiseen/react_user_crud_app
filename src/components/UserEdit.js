import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import { baseURL } from './BaseURL';

const UserEdit = (props) => {

    document.title = "Update User";

    const history = useHistory();
    const { id } = useParams();

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });
    
    //#####################################################
    const loadUserInfo = async e => {
        const user = await axios.get(baseURL + id);
        setUser(user.data);
    }
    
    useEffect(() => {
        loadUserInfo();
    }, []);
    //#####################################################

    // useEffect(() => {
    //     setUser(props.location.state);
    // }, [])

    const { name, username, email, phone, website } = user;

    //take all input from input fields
    const handleInputFields = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(baseURL + id, user);
        history.push('/');
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5 mt-5">

                <h2 className="text-center mb-4">Update User</h2>

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
                            name="username"
                            value={username}
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
                    <button type="submit" className="btn btn-warning w-100">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default UserEdit;