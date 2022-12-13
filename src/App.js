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

  return (
    <div>
      <Form onSaveUserData={saveUserDataHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
