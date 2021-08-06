import React from 'react';
import Tag from '../tag/tag';
import styles from './tagList.module.css';

const TagList = ({selectedArray, id}) => (
   
       <div key={id} className= {styles.tagList}>
         {selectedArray.map((tag,index) => (
           <div key={index} className={styles.tag}><Tag tag={tag} /></div>  
        ))}
       </div>
)

export default TagList;