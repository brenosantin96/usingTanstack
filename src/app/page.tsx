"use client"
import { usePost, usePosts } from '@/utils/queries';
import React from 'react'

const Page = () => {

  const posts = usePosts();
  const postItem = usePost(10);

  let cu = postItem.data

  return (
    <div className='container mx-auto'>
      <h1>Ola Mundo!</h1>
      {posts.isLoading && "Carregando..."}

      {posts.data &&
        <ul>
          {posts.data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      }

    </div>



  )
}

export default Page