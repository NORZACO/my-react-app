import './App.css';
import { useState } from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { USERS } from './userGenerator';

// Destructuring arrays and objects
// const [ allUser ] = USERS;
const [  first_person,  second_person, third_person, fourth_person, fifth_person ] = USERS;
console.log(first_person, second_person, third_person, fourth_person, fifth_person);




function App({ library }) {
  const [allUser, setUsers] = useState(USERS);
  // const [user, setUser] = useState(first);

  // const who = useState()
  // console.log(who)

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>{library} Library</h1>
        <ul>
          { allUser.map((user) => {
            return <li key={user.userId}>
              <img src={user.avatar} alt={user.username} />
              <h3>{user.username}</h3>
              <p>{user.email}</p>
            </li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
