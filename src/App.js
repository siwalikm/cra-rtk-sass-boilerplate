import React from "react";
import { useGetPostByIdQuery } from "./models/posts/api";
import "./styles.scss";

export const App = () => {
  const { data, isSuccess } = useGetPostByIdQuery({ id: 1 });
  return (
    <div className="App">
      <h1>Hello there</h1>
      <h2>Start editing to see some magic happen!</h2>
      {isSuccess && (
        <div className="post">
          <div className="post-id">{data.id}</div>
          <div>
            <div className="post-title">{data.title}</div>
            <div className="post-body">{data.body}</div>
          </div>
        </div>
      )}
    </div>
  );
};
