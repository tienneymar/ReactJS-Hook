import React, { useState, useEffect } from "react";
import useFetch from "../Customize/Fetch";
import "../view/Blog.scss";
import { Link, useHistory } from "react-router-dom";
import DetailBlog from "../view/Detailblog";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddNewBlog from "../view/AddNewBlog";

const Blog = () => {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let history = useHistory();
  const { data: dataBlog, isLoading, isErr } =
    // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
    useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

  useEffect(() => {
    if (dataBlog && dataBlog.length > 0) {
      let data = dataBlog.slice(0, 10);
      setNewData(data);
    }
  }, [dataBlog]);

  const handleAddNew = (blog) => {
    let data = newData;
    data.unshift(blog);

    setShow(false);
    setNewData(data);
  };

  const handleDeleteBlog = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Thêm Mới
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm Mới Danh Mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog handleAddNew={handleAddNew} />
        </Modal.Body>
      </Modal>

      <div className="blogs-container">
        {newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">{item.title}</div>

                <span onClick={() => handleDeleteBlog(item.id)}>X</span>
                <div className="content">{item.body}</div>
                <button>
                  <Link to={`/blog/${item.id}`}> View detail</Link>
                </button>
              </div>
            );
          })}
        {isLoading === true && (
          <tr>
            <td style={{ color: "red" }}>Loading....</td>
          </tr>
        )}
      </div>
    </>
  );
};
export default Blog;
