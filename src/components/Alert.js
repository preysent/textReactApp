import React from 'react'

export default function Alert(props) {

  // the Syntax props.alert && html element is use becouse if props.alert is null then it don't return any value
  return props.alert && (
    <>
        <div className="alert alert-success" role="alert">
        <strong>{props.alert.type}</strong> {props.alert.message}
        </div>
    </>
  )
}
