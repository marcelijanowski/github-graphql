import React, {useState} from 'react';
import {useQuery} from '@apollo/react-hooks';
import findUseQuery from './user-search.graphql';
import UserList from '../List/Userlist';

const UserSearch = () => {
  const [userName, setUserName] = useState('');
  const results = useQuery(findUseQuery, {
    variables: {
      userName
    }
  });
  return (
    <div>
      <h3>Search for user information</h3>
      <input type="text" onChange={e => setUserName(e.target.value)} />
      {userName && <UserList {...results} />}
    </div>
  );
};

export default UserSearch;
