import Form from "./components/Form/Form";
import UserList from "./components/User/UserList";
import { useState } from 'react';


function App() {
  const [users, setUsers] = useState([])
  

  const saveUserDataHandler = (enteredData) => {
    setUsers((prevUsers) => {
      return [enteredData, ...prevUsers];
    });
  };

  const removeUserHandler = (id) => {
    const updatedUsers = [...users].filter((user) => user.id !== id);

    setUsers(updatedUsers);
  };

  return (
    <div>
      <Form onSaveUserData={saveUserDataHandler}/>
      <UserList users={users} onRemoveUser={removeUserHandler}/>
    </div>
  );
}

export default App;
