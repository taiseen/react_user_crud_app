import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../BaseURL';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    console.log(users)
    
    // get all user from server... 
    const loadUsers = async () => {
        const result = await axios.get(baseURL);
        setUsers(result.data.reverse());
    }

    
    useEffect(() => {
        loadUsers();
    }, []);
    

    return (
        <UserContext.Provider value={{ users }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;