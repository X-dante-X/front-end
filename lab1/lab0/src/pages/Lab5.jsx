import React from "react";
import useFetch from "../hooks/useFetch.jsx";
import Table from "../components/Table.jsx";

function Lab5() {
    const { data: posts, error: postsError, loading: postsLoading } = useFetch("https://jsonplaceholder.typicode.com/posts");
    const { data: users, error: usersError, loading: usersLoading } = useFetch("https://jsonplaceholder.typicode.com/users");
    const { data: comments, error: commentsError, loading: commentsLoading } = useFetch("https://jsonplaceholder.typicode.com/comments");

    if (postsLoading || usersLoading || commentsLoading) return <p>Loading...</p>;
    if (postsError || usersError || commentsError) return <p>Error occurred: {postsError || usersError || commentsError}</p>;

    const tableData = posts.map((p) => ({
        user: users.find((u) => u.id === p.userId),
        post: p,
        comments: comments.filter((c) => c.postId === p.id),
    }));
    console.log(tableData);
    return (
        <>
            <h1>Lab5</h1>
            <Table data={tableData} />
        </>
    );
}

export default Lab5;
