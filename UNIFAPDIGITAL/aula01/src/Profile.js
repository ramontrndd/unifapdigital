import React from 'react'


function Profile(props) {
  return (
    <div>
        <ol className='user-date'>
            <h3>Usuário</h3>
            <ul><span>Nome: </span>{props.name}</ul>
            <ul><span>Idade:</span> {props.age}</ul>
        </ol>

    </div>
  )
}

export default Profile