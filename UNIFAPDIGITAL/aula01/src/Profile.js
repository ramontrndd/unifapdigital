import React from 'react'
import './App.css'


function Profile(props) {
  return (
    <div>
        <ol className='user-date'>
            <h3>Usuário</h3>
            <ul><span>Nome: </span>{props.name}</ul>
            <ul><span>Idade:</span> {props.age}</ul>

            <div className="social-btn">
             <button>Curtir</button>  
             <button>Compartilhar</button>
            </div>
           
        </ol>
     

    </div>
  )
}

export default Profile