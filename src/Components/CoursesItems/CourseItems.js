import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './CourseItems.css'
import CourseEnroll from '../CourseEnroll/CourseEnroll';
import Cart from '../Cart/Cart';


const CourseItems = () => {
    const [courses, setCourses] = useState(fakeData)
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart (newCart);
    }
    return (
        <div className="course-items-container">
            <div className="course-container">
                    {
                        courses.map(courses => <CourseEnroll handleAddCourse={handleAddCourse} courses={courses}/>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>

        </div>
    );
};

export default CourseItems;