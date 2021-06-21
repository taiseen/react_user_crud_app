import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const baseURL = 'http://localhost:8000/users';

    const [users, setUsers] = useState([]);

    console.log(users)

    useEffect(() => {
        loadUsers();
    }, []);

    // get all user from server... 
    const loadUsers = async () => {
        const result = await axios.get(baseURL);
        setUsers(result?.data);
    }

    return (
        <UserContext.Provider value={{ users }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;