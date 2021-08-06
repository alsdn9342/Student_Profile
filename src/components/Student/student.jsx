import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useMemo } from 'react';
import styles from './student.module.css';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Grade from './grade/grade';
import AddTag from './addTag/addTag';
import TagList from './tagList/tagList';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(4),
      },
      width:'20%',
      height: '70%',
      maxHeight:'9em',
      margin:'2em',
      marginTop:'2em',
      border: '0.3px solid lightgray',
      
    },
    btn: {
      maxHeight:'2em',
      marginTop: '2em',
      marginLeft:'4em',
    },
  }));

const Student = ({student, addTag, tags}) => {
    const classes = useStyles();
    const [grade, setGrade] = useState(Boolean);
                                   
    //Calculate average of grades   
    
    function Average(grades){
      let sumOfGrades = useMemo(() => (grades.reduce((prev, curr) => (parseInt(prev) + parseInt(curr)))));
      return sumOfGrades / grades. length;
    }

    const handleBtn = ()=> {
      if(grade === false){
        setGrade(true);
      }else {
        setGrade(false);
      }
    }

    return (
        <div className={styles.mainBody} style={grade === false ? {height: 23+'em'} : {height: 41 +'em'} }>
            <Avatar className={classes.root} alt= "Student" src={student.pic} />
            <div className={styles.detail}>
                <h1 className={styles.detailHeader}>{student.firstName} {student.lastName}</h1>
                <div className={styles.detailBody}>
                  Email: {student.email}<br></br>
                  Company: {student.company}<br></br>
                  Skill: {student.skill}<br></br>
                  Average: {Average(student.grades)} %<br></br>
                  {!grade && tags.map(tag => {
                    if(tag.id === student.id){
                      return <TagList key={student.id} selectedArray={tag.tags} />; 
                    }
                    return null;
                  })}
                  { !grade && <AddTag id={student.id}  addTag={addTag}/>}
                  { grade && <Grade key={student.id} id={student.id} grades={student.grades} />}
                  { grade && tags.map(tag => {
                    if(tag.id === student.id){
                      return <TagList key={student.id} selectedArray={tag.tags} id={student.id} />; 
                    }
                    return null;
                  })}
                  { grade && <AddTag id={student.id}  addTag={addTag}/>}
                </div>
            </div>
            <IconButton className={classes.btn} styles={{maxHeight: 10}} onClick={handleBtn}>
              { !grade &&<AddIcon style={{ color: 'grey', fontSize: 60}} />}
              { grade && <RemoveIcon style={{ color: 'grey', fontSize: 60}} />}
            </IconButton>
        </div>
    );
            
    };

export default Student;