import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function PostComments() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostData = async () => {
      const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const postData = await postResponse.json();
      setPost(postData);

      const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      const commentsData = await commentsResponse.json();
      setComments(commentsData);
    };

    fetchPostData();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <strong>{comment.name}</strong> ({comment.email})
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostComments;
