import React from 'react'

export default function Button(props) {

  return (
    <button className={props.stylename} onClick={props.onclick} value={props.value}>{props.name}</button>
  )
}
