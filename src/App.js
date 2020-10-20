import React, {useState} from 'react';
import './App.css';
import LoginForm from "./LoginForm";

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState();

    const onUserLoggedIn = (user) => {
        setLoggedInUser(user)
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>Hello World</h2>
                <p>Here is a sample Header and should be Replace by a actual header</p>
            </header>
            {loggedInUser ? <p>Successful Logged In {loggedInUser.username}</p> : <LoginForm userSetter={onUserLoggedIn}/>}
        </div>
    );
};

export default App;
