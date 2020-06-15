import React from 'react';

const UserList = ({loading, error, data}) => {
  return (
    <div>
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {data && <div>
        {data.search.userCount > 0 && <h3>Total number: {data.search.userCount}</h3>}
        {data.search.userCount === 0 && !loading && <h2>No users found</h2>}
        <table>
          {data && data.search.edges.map((user, i) => (
            <tr key={i}>
              <td><img src={user.node.avatarUrl} width={50} height={50}/></td>
              <td>{user.node.login}</td>
              <td>{user.node.commitComments && user.node.commitComments.edges.length > 0 && user.node.commitComments.edges.map((item, i) =>
                <p key={{i}}>{item.node.createdAt} - {item.node.bodyText}</p>)}</td>
            </tr>
          ))}
        </table>
      </div>
      }
    </div>
  );
};
export default UserList;
