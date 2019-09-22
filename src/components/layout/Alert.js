import React from 'react'

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-light`}>
        <i className="fas fa-info-circle"></i> {alert}
     </div>
    )
  )
}

export default Alert
