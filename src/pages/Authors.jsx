import React, { useState } from 'react'
import Avatar1 from '../images/avatar1.jpg'
import Avatar2 from '../images/avatar2.jpg'
import Avatar3 from '../images/avatar3.jpg'
import Avatar4 from '../images/avatar4.jpg'
import Avatar5 from '../images/avatar5.jpg'
import { Link } from 'react-router-dom'

// Define an array of author data with unique IDs
const authorsData = [
  {id: 1, avatar: Avatar1, name: 'Celest Jerez', posts: 5},
  {id: 2, avatar: Avatar2, name: 'Catherine Capistano', posts: 2},
  {id: 3, avatar: Avatar3, name: 'Irheil Mae Sison', posts: 3},
  {id: 4, avatar: Avatar4, name: 'Russell Loreto', posts: 5},
  {id: 5, avatar: Avatar5, name: 'Bj Cabaat', posts: 2} // Corrected ID to be unique
]

const Authors = () => {
  // Initialize the authors state with the authorsData
  const [authors, setAuthors] = useState(authorsData)

  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({id, avatar, name, posts}) => (
            // Render each author with a link to their post details
            <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author__avatar">
                <img src={avatar} alt={`Image of ${name}`} />
              </div>

              <div className="author__info">
                <h4>{name}</h4>
                {/* Display the number of posts for each author */}
                <p>{posts} posts</p> 
              </div>
            </Link>
          ))}
        </div>
      ) : (
        // Display a message if no authors are found
        <h2 className='center'>No user or author found.</h2>
      )}
    </section>
  )
}

export default Authors
