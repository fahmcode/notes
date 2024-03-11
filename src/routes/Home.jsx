/* eslint-disable react/prop-types */
import styled from "styled-components";
import useFetch from "../utils/useFetch";

const PostStyle = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledHead = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Post = ({ post }) => (
  <PostStyle>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </PostStyle>
);
function Home() {
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <StyledHead>Posts</StyledHead>
      <div>
        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
