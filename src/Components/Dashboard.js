import React, {useState} from "react";
import Schedule from "./Schedule";
import Profile from "./Profile";
import Courses from "./Courses";
import Trainers from "./Trainers";

const Dashboard = ({user, userSetter}) => {

    const [currentModule, setCurrentModule] = useState("");
    const currentPage = "#";

    return (
        <div>
            <h2>Welcome {user.username}</h2>
            <ul>
                <li key="schedule" style={{listStyleType : "None"}}>
                    <a href={currentPage} className="App-link"
                       onClick={() => setCurrentModule(<Schedule user={user}/>)}>Schedule</a>
                </li>
                <li key="profile" style={{listStyleType : "None"}}>
                    <a href={currentPage} className="App-link"
                       onClick={() => setCurrentModule(<Profile user={user}/>)}>Profile</a>
                </li>
                <li key="courses" style={{listStyleType : "None"}}>
                    <a href={currentPage} className="App-link" onClick={() => setCurrentModule(<Courses user={user}/>)}>Courses</a>
                </li>
                <li key="trainers" style={{listStyleType : "None"}}>
                    <a href={currentPage} className="App-link" onClick={() => setCurrentModule(<Trainers user={user}/>)}>Trainer</a>
                </li>
                <li key="log-out" style={{listStyleType : "None"}}>
                    <a href={currentPage} className="App-link" onClick={() => {
                        userSetter(null);
                        console.log(`User ${user.username} log out success`);
                    }}>Log out</a>
                </li>
            </ul>
            <div>{currentModule}</div>
        </div>
    )
};

export default Dashboard