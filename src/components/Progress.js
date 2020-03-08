import React from "react"
import styled from "styled-components"

const ProgressBar = styled.div`
  position: fixed;

  height: 16px;
  background-color: #aaa;
  width: 100%;

  .progress {
    height: 16px;
    background-color: #ddd;
    position: absolute;
  }

  .text {
    position: relative;
    font-size: 0.75rem;
    line-height: 16px;
    z-index: 100;
    color: #000;
    font-weight: 400;
  }

  text-align: center;
`

const Progress = ({ progress }) => {
  return (
    <ProgressBar>
      <div className="progress" style={{ width: `${progress}%` }}></div>
      <div className="text">{`${progress}%`}</div>
    </ProgressBar>
  )
}

export default Progress
