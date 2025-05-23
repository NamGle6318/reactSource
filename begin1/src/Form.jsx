import React, { useState } from "react";

const Form = () => {
  const roles = ["user", "admin", "guest"];
  const [formData, setFormData] = useState({
    username: "",
    isSubscribed: false,
    role: "user",
  });

  const { username, isSubscribed, role } = formData;

  const handleChange = (e) => {
    console.log("value", e.target.value);
    console.log("name", e.target.name);
    console.log("type", e.target.type);
    console.log("cheked", e.target.checked);
    console.log(e);

    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      <p>
        Name : {username} ( {isSubscribed && "(isSubscribed) "} )
      </p>
      <p>Role : {role}</p>
      <p>
        Name :
        <input type="text" name="username" placeholder="username" onChange={handleChange} value={username} />
      </p>
      <input type="checkbox" name="isSubscribed" onChange={handleChange} value={isSubscribed} />
      <label>isSubscribed</label>

      <select name="role" onChange={handleChange} value={role}>
        {roles.map((role, index) => {
          return (
            <>
              <option key={index} value={role}>
                {role}
              </option>
            </>
          );
        })}
      </select>
    </div>
  );
};

export default Form;
