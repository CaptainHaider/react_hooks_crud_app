import React, { useState,useEffect } from "react";

const EditFormUser = props => {
  const [user, setUser] = useState(props.currentUser);
  const handleInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  useEffect(()=>{
      setUser(props.currentUser)
  },[props])
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Add new User</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Update User</button>
      <button onClick={()=>props.setEditing(false) } className="button muted-button">CANCEL UPDATE</button>
    </form>
  );
};

export default EditFormUser;