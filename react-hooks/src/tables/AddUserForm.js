import React, { useState } from "react";



const AddUserForm = props => {
    const initialStateForm = {
        id: null,
        name: "",
        username: ""
      };
      
      const [user, setUser] = useState(initialStateForm);
      
      const handleInputChange = e => {
          const{name,value}=e.target
        
          setUser({...user,[name]:value})
      };

  return (
    <form onSubmit={e=>{e.preventDefault()
    if(!user.name ||!user.username) return

    props.addUser(user)
    setUser(initialStateForm)
    }}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Add new User</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Add new User</button>
    </form>
  );
};

export default AddUserForm;
