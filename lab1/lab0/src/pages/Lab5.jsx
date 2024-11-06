import { data } from "../data/module-data.js";
import PersonProfile from "../components/PersonProfile.jsx";
import FlexContainer from "../components/FlexContainer.jsx";
import Table from "../components/Table.jsx";
import useFetch from "../hooks/useFetch.jsx";

function Lab5() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");
  const tableData = posts.map((p) => ({
      user: users.find((u) => u.id === p.userId).name,
      post: p.title,
      comments: comments.filter((c) => c.postId === p.id).length,
  }));
  return (
    <>
      <h1>lab5</h1>
      <Table data={tableData} />
    </>
  );
}

export default Lab5;
