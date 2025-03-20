import "./ResumePage.scss"
import React from 'react'

function ResumePage() {
  return (
    <main className="resume">
        <h1 className="resume__title">Resume</h1>
      <ul className="resume__nav">
        <li className="resume__nav-item">Experience</li>
        <li className="resume__nav-item">Education</li>
      </ul>
    </main>
  )
}

export default ResumePage
