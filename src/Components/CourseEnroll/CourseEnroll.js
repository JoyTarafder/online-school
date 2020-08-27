import React from 'react';
import './CourseEnroll.css'
import '../Css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

const CourseEnroll = (props) => {
    const { img, title, name, price } = props.courses;
    return (
        <div className="main-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className='title-container'>
                <h4 className="course-title">Course Name : {title}</h4>
                <br />
                <p>by : {name}</p>
                <p>Price : ${price}</p>
                <Button onClick={() => props.handleAddCourse (props.courses)} className="main-btn" variant="primary">Enroll Now</Button>
            </div>
        </div>
    );
};

export default CourseEnroll;