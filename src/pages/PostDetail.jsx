import React from 'react'
import PostAuthor from '../components/PostAuthor'
import {Link} from 'react-router-dom'
import Thumbnail from '../images/blog2.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>

        <h1>Title of the post</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati 
          quam maiores error esse laboriosam modi, dolor animi ea eius, cum nostrum, 
          reiciendis quo expedita omnis architecto ullam quibusdam libero vel?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati 
          quam maiores error esse laboriosam modi, dolor animi ea eius, cum nostrum, 
          reiciendis quo expedita omnis architecto ullam quibusdam libero vel?
          xpedita omnis architecto ullam quibusdam libero vel?
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magnam illum delectus mollitia? 
        Aperiam maiores numquam labore, sint nemo nostrum commodi voluptatem expedita debitis. Vitae, sunt 
        ipsam omnis asperiores reiciendis, dolor pariatur tenetur, soluta porro veritatis voluptatibus unde? 
        Consequatur ex porro voluptas at odio non soluta incidunt officiis minus rerum.
        </p>

        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quibusdam eaque 
        ea totam voluptatibus placeat ipsam enim aut ipsum eius repellendus odio praesentium 
        saepe unde voluptatum, necessitatibus perferendis quos id.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magnam illum delectus mollitia? 
        Aperiam maiores numquam labore, sint nemo nostrum commodi voluptatem expedita debitis. Vitae, sunt 
        ipsam omnis asperiores reiciendis, dolor pariatur tenetur, soluta porro veritatis voluptatibus unde? 
        Consequatur ex porro voluptas at odio non soluta incidunt officiis minus rerum.
        </p>

        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quibusdam eaque 
        ea totam voluptatibus placeat ipsam enim aut ipsum eius repellendus odio praesentium 
        saepe unde voluptatum, necessitatibus perferendis quos id.
      </p>

      </div>
      
    </section>
  )
}

export default PostDetail