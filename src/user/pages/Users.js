import React from 'react'
import UserList from '../components/UserList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Maxwell',
      image:
        'https://i.ibb.co/Wy6LCXq/201503564-2868868996684569-7611477617204105970-n.jpg',
      places: 1
    },
    {
        id: 'u2',
        name: 'Maxwell',
        image:
          'https://i.ibb.co/Wy6LCXq/201503564-2868868996684569-7611477617204105970-n.jpg',
        places: 1
      },
      {
        id: 'u4',
        name: 'Maxwell',
        image:
          'https://i.ibb.co/Wy6LCXq/201503564-2868868996684569-7611477617204105970-n.jpg',
        places: 1
      }
  ]
  return <UserList items={USERS} />
}

export default Users
