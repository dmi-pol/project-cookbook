import React, { useState } from 'react'
import { axiosInstance } from '../axiosInstance'

function PostItem({post, setPosts}) {

  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const [text, setText] = useState(post.text);
  const [userId, setUserId] = useState(post.userId);
  const [title, setTitle] = useState(post.title);

const deletePost = async (id) => {
  await axiosInstance.delete(`/posts/${id}`)
  setPosts((prev) => prev.filter((el) => el.id !== id))
}

const updatePost = async (e) => {
  e.preventDefault();
  const response = await axiosInstance.put(`/posts/${post.id}`, {title, text, userId});
  if(response.status === 200){
    setPosts((prev) => prev.map((el) => el.id === response.data.post.id ? response.data.post : el))
    setIsShowUpdate(false)
  }
}

  return (
    <div key = {post.id}>
      <h2>{post.title}</h2>
      <h3>{post.text}</h3>
      <h4>{post.userId}</h4>
      <button onClick={() => deletePost(post.id)}>УДАЛИ</button>
      <button onClick={() => setIsShowUpdate((prev) => !prev)}>ОБНОВИ</button>

      {isShowUpdate && (
        <form  onSubmit={updatePost}>
        <label>
        Заголовок
         <input
           type="text"
           name="name"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
         /></label>
         <label>
         Текст
         <input
           type="text"
           name="name"
           value={text}
           onChange={(e) => setText(e.target.value)}
         /></label>
         <label>
         Пользователь
         <input
           type="text"
           name="name"
           value={userId}
           onChange={(e) => setUserId(e.target.value)}
         /></label> 
         <button type="submit">Обновить</button>
         </form>
      )}
    </div>
  )
}

export default PostItem