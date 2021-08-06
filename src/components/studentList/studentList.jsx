import React from 'react';
import Student from '../Student/student';
import styles from './studentList.module.css';

const StudentList = ({students, addTag, tags}) => (
    <ul className={styles.student}>
        {students.map(student => (
            <Student key={student.id} student={student} addTag={addTag} tags={tags} />
        ))}
    </ul>
);

export default StudentList;