import React, { useState } from 'react';

function UserForm() {
  const [user, setUser] = useState({ name: 'Raj', age: '40' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <input name="name" value={user.name} onChange={handleChange} placeholder="Name" />
      <input name="age" value={user.age} onChange={handleChange} placeholder="Age" />
      <p>{user.name} is {user.age} years old.</p>
    </div>
  );
}

export default UserForm
