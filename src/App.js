import { useEffect, useState } from 'react';
import styles from './App.module.css';
import StudentList from './components/studentList/studentList';
import ScrollBar from 'react-custom-scrollbars';
import SearchByName from './components/searchBar/searchBar';
import SearchByTag from './components/searchTag/searchTag';

function App() {
  const [data, setData] = useState([]);
  const [students, setStudents] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
    .then(res => {
      return res.json()
    })
    .then(students => {
      
        //Convert only object value to arrary 
        let student = Object.values(students);

        //Insert first element into student array
        setStudents(student[0])

        let addTagProperty = student[0].map(element => {
          return {...element, tags:[]};
        })
        
        setData(addTagProperty);
    })
  },[])

  const searchByName = (name) => {

    // Filter original data to constantly set students array. 
    let selectedStudent = data.filter(student => {
      
      if(name === ''){
        return student  
      } else if (student.firstName.toLowerCase().includes(name.toLowerCase()) === true){
        return student
      } else if (student.lastName.toLowerCase().includes(name.toLowerCase()) === true){
        return student
      }

      return null; 
    });

    setStudents(selectedStudent);  
  }

  const searchByTag = (tag) => {
   
    let selectedStudent = data.filter(student => {
      if(tag === ''){
        return student;
      } else if (student.tags.includes(tag.toLowerCase())){
        return student;
      }
      return null;
    })

    return setStudents(selectedStudent);
  }

  const handleTags = (tagId, tags) => {
    let addTagElement = data.map(element => {
      if(element.id === tagId){
        let newElement = {...element, tags:tags};
        return newElement;
      } else {
        return element;
      }
    })

    setData(addTagElement);
  }

  const addTag = (value, id) => {
    
    //Add value into tag property of data 
    handleTags(id, value);

    let newOrNot = true;
    let newTag = {
      id: id,
      tags: []
    };

    newTag.tags.push(value);
  
    //check if new id or not
    tags.forEach(tag =>  {
      if(tag.id === newTag.id){
        newOrNot= false;
      }
    })
    
    if(newOrNot === true){
      let newArray = tags.concat(newTag);
      setTags(newArray);
    } else {
      let newArray = tags.map(tag => {
        if(tag.id === newTag.id){
          
          let newElement = {
            id : newTag.id,
            tags : tag.tags.concat(newTag.tags)
          }
          return newElement;
        } else { 
          return tag;
        }
      })
      setTags(newArray);
    }
  }

  return (
    <>
    <ScrollBar className={styles.content} style={{ width: 1000, height: 1100 }}>
     <section>
       <SearchByName search={searchByName}/>
       <SearchByTag   searchByTag={searchByTag}/>
       <StudentList students={students}  addTag={addTag} tags={tags} />
     </section>
    </ScrollBar>
    </>
  );
}

export default App;
