import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./tables/AddUserForm";
import EditFormUser from "./tables/EditFormUser";
const App = () => {
  const userData = [
    { id: 1, name: "Haider", username: "captain" },
    { id: 2, name: "Malik", username: "riaz" },
    { id: 3, name: "hassan", username: "muhammad" }
  ];

  const [users, setUsers] = useState(userData);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
    setEditing(false)
  };

  const [editing, setEditing] = useState(false);
  const initialStateForm = {
    id: null,
    name: "",
    username: ""
  };
  const [currentUser, setCurrentUser] = useState(initialStateForm);

  const editRow = user => {
    setEditing(true);
      setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
  const updatedUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };
  return (
    <div className="container">
      <h1>CRUD application with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditFormUser
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updatedUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
