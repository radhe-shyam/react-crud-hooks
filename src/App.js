import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const App = () => {

  const usersData = [
    { id: 1, name: 'Praveen', username: 'pjangid' },
    { id: 2, name: 'Lakshya', username: 'ljangid' },
    { id: 3, name: 'Vijay', username: 'vjangid' },
  ];
  const initialFormState = { id: null, name: '', username: '' };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  }

  const editUser = user => {
    setEditing(true);
    setCurrentUser(user);
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  return (
    <div className="container">
      <h1>CRUD app with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
                <div>
                  <h2>Add User</h2>
                  <AddUserForm addUser={addUser} />
                </div>
              )
          }

        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
