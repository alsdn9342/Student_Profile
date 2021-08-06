# Student Profile


## Desciption

By using APIs, it dynamically retrieves students data. It is capable of adding tags and being searched by name and tags. 


## Technology stacks
>
> **JavaScript** **React**, **Hooks**, **material-ui**, **styled-components**


## Main page 
> ### Retrieve data using API 
![main](https://user-images.githubusercontent.com/65743649/128461934-27438c12-23b1-44cd-9ceb-7296c824c5e7.JPG)


## search function
> ### According to name and tag it would filter students and show them on screeen

![search](https://user-images.githubusercontent.com/65743649/128462158-1a110393-c166-4c51-8840-4a97692d1ccf.JPG)

```js
  const [data, setData] = useState([]);
  const [students, setStudents] = useState([]);
  const [tags, setTags] = useState([]);
  
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
```


