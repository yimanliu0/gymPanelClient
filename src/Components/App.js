import React, {useState} from 'react';
import '../App.css';
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState();

    return (
        <div className="App">
            <header className="App-header">
                <h2>Hello World</h2>
                <p>Here is a sample Header and should be Replace by a actual header</p>
            </header>
            {loggedInUser ? <Dashboard user={loggedInUser} userSetter={setLoggedInUser}/>
            : <LoginForm userSetter={setLoggedInUser}/>}
        </div>
    );
};

export default App;
