import React from 'react'
import styles from './styles.module.css'

const Radio = ({pergunta, options, onChange, value, id, active}) => {

if(active == false) return null;
  return (
    <fieldset style={{padding: '2rem', marginBottom: '1rem', border: '2px solid #eeee'}}>
      <legend style={{fontWeight: 'bold'}}>{pergunta}</legend>
      {options.map((option) => (
        <label key={option} style={{marginBottom: '1rem', fontFamily: 'monospace'}}>
         <input type="radio" id={id} checked={value == option} value={option} onChange={onChange} />
         {option}
        </label>
      ))}    
      
    </fieldset>
  )
}

export default Radio