import { useContext } from "react";
import { UserContext } from './Context/UserContext';

const Home = () => {

    const { users } = useContext(UserContext);

    return (
        <div className="container">
            <h1 className="py-4">Home</h1>
            {
                users && users.map(user => <li>{user.name}</li>)
            }
        </div>
    );
};

export default Home;