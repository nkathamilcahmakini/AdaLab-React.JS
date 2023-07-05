import React from "react";
import './style.css'

const Introduction = () =>{
    return (
        <div className="body">
            <h1 className="heading">What I have learnt about ReactJS</h1>
            <p>It has reusable components</p>
            <p>The writing formart is JSX</p>
            <p>It is fast</p>
            <img src="/images/react.png" alt="react" id="react"/>

            <div className="student">
            <h1>Students</h1>
            <img src="/images/student.png" alt="student" id="student"/>
            <img src="/images/Nkatha.png" alt="Nkatha" id="nkatha"/>
            <img src="/images/student2.png" alt="student2" id="student2"/>
            </div>
        </div>
        
    );
};
export default Introduction;




