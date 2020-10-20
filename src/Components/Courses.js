/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import axios from "axios";

const Courses = ({user}) => {

    const[courses, setCourses] = useState([]);
    const[errMsg, setErrMsg] = useState("");

    const loadCourse = () => {
        const url = `./${user.username}/courses` ;
        axios.get(url).then(res => {
            const data = res.data;
            if (data.length === 0) {
                setErrMsg("There is no course loaded!")
            } else {
                setCourses(data)
            }
        }).catch(err => {
            setErrMsg(err)
        });
    };

    const registerCourse = (courseId) => {
        const url = "./course";
        const data = {
            username: user.username,
            courseId: courseId
        };
        axios.put(url, data).then(() => {
            const msg = `${user.username} register course ${courseId} success!`;
            console.log(msg);
            setErrMsg(msg);
            setTimeout(() => setErrMsg(""), 5000);
            loadCourse()
        }).catch(() => {
            const msg = `${user.username} register course ${courseId} fail!`;
            console.log(msg);
            setErrMsg(msg);
            setTimeout(() => setErrMsg(""), 5000);
        })
    };

    const unregisterCourse = (courseId) => {
        const url = `./course/${user.username}/${courseId}`;
        axios.delete(url).then(() => {
            const msg = `${user.username} unregister course ${courseId} success!`;
            console.log(msg);
            setErrMsg(msg);
            setTimeout(() => setErrMsg(""), 5000);
            loadCourse()
        }).catch(() => {
            const msg = `${user.username} unregister course ${courseId} fail!`;
            console.log(msg);
            setErrMsg(msg);
            setTimeout(() => setErrMsg(""), 5000);
        })
    };

    useEffect(() => {
        console.log(`Loading courses `);
        loadCourse();
    }, [user.username]);

    return (
        <React.Fragment>
            <h2>Courses</h2>
            <p>{errMsg}</p>
            <ul>
                {courses.map(course => {
                    return (
                        <li key={course.id} style={{listStyleType : "None"}}>
                            <h3>{course.courseName}</h3>
                            <h4>{`${course.date} ${course.startTime}:00 -- ${course.endTime}:00`}</h4>
                            <img src={course.url} alt={course.courseName} width={"150px"} height={"150px"}/>
                            <p>{course.description}</p>
                            <p>Instructor: {course.instructor}</p>
                            <p>{`${course.enrolledMember.length}/${course.capacity} Enrolled`}</p>
                            {!course.enrolledMember.includes(user.username) ?
                                <button onClick={() => registerCourse(course.id)}
                                        disabled={course.enrolledMember.length === course.capacity}>Register</button> :
                                <button onClick={() => unregisterCourse(course.id)}>Unregister</button>
                            }
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    )
};

export default Courses