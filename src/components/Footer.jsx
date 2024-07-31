import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>

      <ul className="footer__categories">
        <li><Link to="/posts/categories/Kpop">Kpop</Link></li>
        <li><Link to="/posts/categories/Life">Slice of Life</Link></li>
        <li><Link to="/posts/categories/Anime">Anime</Link></li>
        <li><Link to="/posts/categories/Technology">Technology</Link></li>
        <li><Link to="/posts/categories/Education">Education</Link></li>
        <li><Link to="/posts/categories/Friends">Friends</Link></li>
        <li><Link to="/posts/categories/Music">Music</Link></li>
        <li><Link to="/posts/categories/Uncategorized">Uncategorized</Link></li>
      </ul>

    <div className="footer__copyright">
      <small>All Rights Reserved &copy; Copyright, EGATOR Tutorials.</small>
    </div>

    </footer>

  )
}

export default Footer