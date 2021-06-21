import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="not-found">
            <h1>404 | Page Not Found</h1>
            <Link to='/'>Go To Home Page</Link>
        </div>
    );
};

export default PageNotFound;