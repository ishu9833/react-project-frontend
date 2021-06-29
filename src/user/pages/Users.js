import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
    const USERS = [
    //     {
    //     id: 'ul',
    //     name:'Maxwell',
    //     image: 'https://i.ibb.co/Wy6LCXq/201503564-2868868996684569-7611477617204105970-n.jpg',
    //     places: 3
    // }
]
    return ( 
        <UserList items={USERS} />
    );
};

export default Users;