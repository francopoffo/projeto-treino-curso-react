import React from "react";
import User from "./User";
import classes from "./UserList.module.css";

function UserList(props) {

  const onRemoveUser = (id) => {
    props.onRemoveUser(id)
  }
  
  
  return (
    <ul className={classes.list}>
      {props.users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
          onRemoveUser={onRemoveUser}
        />
      ))}
    </ul>
  );
}

export default UserList;
