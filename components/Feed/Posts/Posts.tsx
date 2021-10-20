import React from "react";
import Post from "./Post";

const posts = [
  {
    id: 123,
    username: 'me',
    userImg: 'https://leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/25.jpg',
    img: 'https://leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/25.jpg',
    caption: 'coding coding',
  },
  {
    id: 123,
    username: 'me',
    userImg: 'https://leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/25.jpg',
    img: 'https://leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/25.jpg',
    caption: 'coding coding',
  },
  {
    id: 123,
    username: 'me',
    userImg: 'https://leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/25.jpg',
    img: 'https://leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/25.jpg',
    caption: 'coding coding',
  },
  {
    id: 123,
    username: 'me',
    userImg: 'https://leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/25.jpg',
    img: 'https://leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/25.jpg',
    caption: 'coding coding',
  },
]

const Posts: React.FC = () => {
  return (
    <div>
      {posts.map(post => (
        <Post
        key={Math.random()}
        id={post.id.toString()}
        username={post.username}
        userImg={post.userImg}
        img={post.img}
        caption={post.caption}
      />
      ))}
    </div>
  );
}
export default Posts;