import React, { Component } from "react";

function AppHeader() {
  return (
    <div>
      <header className="header-contents">
        <div className="wrap-header">
          <ul>
            <li className="gnb-menu">
              <a
                href="https://github.com/elisabethyoon"
                rel="noopener noreferrer"
              >
                ABOUT
              </a>
            </li>
            <li className="gnb-menu">
              <a
                href="https://github.com/elisabethyoon"
                rel="noopener noreferrer"
              >
                PORTFOLIO
              </a>
            </li>
            <li className="gnb-menu">
              <a
                href="https://github.com/elisabethyoon"
                rel="noopener noreferrer"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="inner-contents">
        <div className="bg-contents">
          <div className="bg-inner"></div>
          <div className="title-portfolio">
            <p className="text-main">PORTFOLIO</p>
            <p className="text-main text-name">Front-end Developer</p>
          </div>
          <div className="title-job">
            <p className="text-main text-job">YOON ELISABETH</p>
          </div>
        </div>
        <div className="profile-contents">
          <div className="user-image"></div>
          <div className="user-info">
            <h1 className="user-name">윤엘리사벳</h1>
            <h3 className="user-position">Front-end Developer</h3>
          </div>
          <div className="info-wrapper">
            <dl className="info-list">
              <dt>Email -</dt>
              <dd className="profile-url">
                <a
                  href="mailto: careerwowan87@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  careerwowan87@gmail.com
                </a>
              </dd>
            </dl>
            <dl className="info-list">
              <dt>Github -</dt>
              <dd className="profile-url">
                <a
                  href="https://github.com/elisabethyoon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/elisabethyoon
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
