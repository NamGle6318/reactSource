import React, { useState } from "react";

const Form = () => {
  const roles = ["user", "admin", "guest"];
  const [formData, setFormData] = useState({
    username: "",
    isSubscribed: false,
    role: "user",
  });

  const { username, isSubscribed, role } = formData;

  return (
    <div>
      <p>
        Name : {username} ( {isSubscribed && "(isSubscribed) "} )
      </p>
      <p>Role : {role}</p>
      <p>
        Name :
        <input type="text" name="username" placeholder="username" />
      </p>
      <input type="checkbox" name="isSubscribed" />
      <label>isSubscribed</label>

      <select name="role">
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
