import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  const modules = {
    toolbar: [
      [{ 'header' : [1,2,3,4,5,6,false]}],
      ['bold', 'italic' , 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list' : 'bullet'}, {'incident': '-1'}, {'incident': '+1'}],
      ['link', 'image']
    ],
  }

  const formats = [
    'header',
    'bold','italic' , 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'incident',
    'link', 'image',
    'clean'
  ]

  const POST_CATEGORIES = ["Kpop", "Slice of Life", "Anime", "Technology", "Education", "Friends", "Music", "Uncategorized"]

   
  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        <p className="form__error-message">
          This is a error message
        </p>
        <form action="" className="form create-post__form">
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>
          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
            <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png,jpg,jpeg'/>
            <button type="submit" className='btn primary'>Create Post</button>
            
        </form>
      </div>
    </section>
  )
}

export default CreatePost