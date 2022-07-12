import React from 'react'

const Dashboard = () => {
  return (
    <div>


<div className="tabs is-toggle is-fullwidth">
  <ul>
    <li className="is-active">
      <a>
        <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span className="icon is-small"><i className="fas fa-film" aria-hidden="true"></i></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <span className="icon is-small"><i className="far fa-file-alt" aria-hidden="true"></i></span>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</div>

    </div>
  )
}

export default  Dashboard
