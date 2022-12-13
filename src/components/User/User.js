import React from 'react'

function User(props) {
  return (
    <li>
        <p>{props.name} ({props.age} anos)</p>
    </li>
  )
}

export default User