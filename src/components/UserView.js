const UserView = ({ location }) => {
    const { id, name, username, email, phone, website } = location.state;

    return (
        <div className="container">
            <h1 className="display-4">DB User id : {id}</h1>
            <ul className="list-group w-50">
                <li className="list-group-item"><strong>Name :</strong> {name}</li>
                <li className="list-group-item"><strong>User Name :</strong> {username}</li>
                <li className="list-group-item"><strong>Email : </strong>{email}</li>
                <li className="list-group-item"><strong>Phone : </strong>{phone}</li>
                <li className="list-group-item"><strong>Website : </strong>{website}</li>
            </ul>
        </div>
    );
};

export default UserView;