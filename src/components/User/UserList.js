import React from 'react'
import User from './User'

function UserList(props) {

  return (
    <div>
        <ul>
            {props.users.map(user => (
                <User key={user.id} name={user.name} age={user.age}/>
            ))}
        </ul>
    </div>
  )
}

export default UserList