import React from "react";
import "../view/Home.scss";

const HomeComponent = () => {
  return (
    <>
      <div className="topnav">
        <a className="active" href="/">
          Trang Chủ
        </a>
        <a href="/">Mới</a>
        <a href="/">Liên Hệ</a>
        <a href="/">Thông Tin</a>
      </div>
    </>
  );
};

export default HomeComponent;
