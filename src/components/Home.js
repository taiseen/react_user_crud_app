import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from './Context/UserContext';

const Home = () => {

    const { users } = useContext(UserContext);

    return (
        <div className="container">
            <h1 className="py-4">Home</h1>

            <table className="table">
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
                        users && users.map((user , index) => {

                            const { name , email } = user;
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>
                                        <Link to='' className="btn btn-primary">View</Link>
                                        <Link to='' className="btn btn-outline-primary mx-2">Edit</Link>
                                        <Link to='' className="btn btn-danger">Delete</Link>
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