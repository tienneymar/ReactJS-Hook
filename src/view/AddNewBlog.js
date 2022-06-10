import React, { useState } from "react";
import "../view/Blog.scss";
import axios from "axios";

const AddNewBlog = (props) => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const handleSubmitButton = async () => {
    if (!title) {
      alert("code ..");
      return;
    }
    if (!content) {
      alert("code ..");
      return;
    }
    let data = {
      title: title,
      body: content,
      userID: 1,
    };
    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    if (res && res.data) {
      let newBlog = res.data;
      props.handleAddNew(newBlog);
    }
  };

  return (
    <div className="add-new-container">
      <div className="text-add-new">---Add new blogs ---</div>
      <div className="inputs-data">
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(event) => settitle(event.target.value)}
        />
      </div>
      <div className="inputs-data">
        <label>Content: </label>
        <input
          type="text"
          value={content}
          onChange={(event) => setcontent(event.target.value)}
        />
      </div>
      <button className="btn-add-new" onClick={handleSubmitButton}>
        Submit
      </button>
    </div>
  );
};
export default AddNewBlog;
