import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useFetch from "../Customize/Fetch";
import "../view/Blog.scss";

const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();
  const handleBackdata = () => {
    history.push("/blog");
  };
  const {
    data: dataDetail,
    isLoading,
    isErr,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

  return (
    <>
      <div>
        <span onClick={handleBackdata}>&lt; Back</span>{" "}
      </div>
      <div className="blog-detail">
        {dataDetail && (
          <>
            <div className="title">
              Blog ID: {id} --{" "}
              {isLoading === true ? "Loading " : dataDetail.title}
            </div>
            <div className="content">{dataDetail.body}</div>
          </>
        )}
      </div>
    </>
  );
};
export default DetailBlog;
