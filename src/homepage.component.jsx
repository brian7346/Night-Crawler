import React from "react";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">ЦВЕТЫ</h1>
            <span className="subtitle">КУПИТЬ СЕЙЧАС</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">ПОДАРКИ</h1>
            <span className="subtitle">КУПИТЬ СЕЙЧАС</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">БУКЕТЫ</h1>
            <span className="subtitle">КУПИТЬ СЕЙЧАС</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">ВСЕ ЦВЕТЫ</h1>
            <span className="subtitle">КУПИТЬ СЕЙЧАС</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">ВСЕ ПОДАРКИ</h1>
            <span className="subtitle">КУПИТЬ СЕЙЧАС</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
