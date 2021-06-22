import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "./BaseURL";
import { UserContext } from './Context/UserContext';

const Home = () => {
    document.title = "Home";
    
    const { search } = useContext(UserContext);

    //#####################################################

    const [users, setUsers] = useState([]);
    //console.log(users)

    // get all user from server... 
    const loadUsers = async () => {
        const result = await axios.get(baseURL);
        setUsers(result.data.reverse());
    }

    useEffect(() => {
        loadUsers();
    }, []);

    //#####################################################

    const deleteUser = async (id) => {
        // delete from just UI
        // const remainUsers = users.filter(user => user.id !== id);
        // setUsers(remainUsers);

        // delete from database
        if (window.confirm('Are you sure you want to delete this?')) {
            await axios.delete(baseURL + id);
            loadUsers();
        }
    }


    return (
        <div className="container">
            <h1 className="py-4">Home</h1>

            <table className="table border shadow">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user, index) => {

                            const { id, name, email } = user;
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>
                                        {/* <Link to={`/user/view/${id}`} className="btn btn-primary">View</Link> */}
                                        <Link to={{ pathname: `/user/view/${id}`, state: user }} className="btn btn-primary">View</Link>

                                        <Link to={`/user/edit/${id}`} className="btn btn-outline-primary mx-2">Edit</Link>
                                        {/* <Link to={{ pathname: `/user/edit/${id}`, state: user }} className="btn btn-outline-primary mx-2">Edit</Link> */}

                                        <Link to='' className="btn btn-danger" onClick={() => deleteUser(id)}>Delete</Link>
                                    </td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Home;