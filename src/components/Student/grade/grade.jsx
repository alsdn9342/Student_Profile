import React from 'react';
import styles from './grade.module.css';

const Grade = ({grades}) => {
    return (
        <div className={styles.grades}>
            {grades.map((grade, index) => (
                <div key={index}>Test {index + 1}: {grade} % </div>
            ))}
        </div>
    );
};

export default Grade;