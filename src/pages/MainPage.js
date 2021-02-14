import React from "react";
import data from "../data/portfolioData";

function MainPage(props) {
  const { company, period, position, todo } = data.career;
  const { personalProject, companyProject } = data.portfolio;
  const { aboutRef, portFolioRef, contactRef } = props;
  return (
    <div className="main-contents">
      <div className="title-menu" ref={aboutRef}>
        ABOUT
      </div>
      <div className="about-section">
        <ul className="list-container">
          <li className="item">
            <h3 className="section-title">
              <span>I</span>ntroduce
            </h3>
            <p className="info-about">
              퍼블리싱 경력 3년으로 현재는 javascript 및 React를 이용한
              Front-end 개발자로 전향중입니다. <br />
              적극적이고 능동적이며 항상 고민하는 Front-end 개발자로 나아가기
              위해 학습하며 노력하고 있습니다.
            </p>
          </li>
          <li className="item">
            <strong className="section-title">
              <span>C</span>areer
            </strong>
            <div className="section-inner">
              <div className="period">{period}</div>
              <div className="article">
                <strong className="company">{company}</strong>
                <p className="sub-text">{position}</p>
                <ul className="info-text">
                  {todo.map((list, index) => {
                    return <li key={index}>{list}</li>;
                  })}
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="title-menu" ref={portFolioRef}>
        PORTFOLIO
      </div>
      <div className="portfolio-section">
        <section className="personal-project">
          <h3 className="section-title">
            <span>P</span>ersonal project
          </h3>
          <ul>
            {personalProject.map((list) => {
              return (
                <li className="list-item" key={list.id}>
                  <div className="image"></div>
                  <div className="description">
                    <h4 className="project-title">{list.subject}</h4>
                    <div className="summary">
                      <span>{list.summary}</span>
                    </div>
                    <div className="url">
                      <a
                        href={list.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {list.url}
                      </a>
                    </div>
                    <dl className="skills">
                      <dt>
                        <strong>Skills</strong>
                      </dt>
                      <dd>{list.skills}</dd>
                    </dl>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="company-project">
          <h3 className="section-title">
            <span>W</span>ork experience
          </h3>
          <p className="stack">
            stack : React, Vue, HTML5, css3, sass, styled-component, javascript,
            jquery
          </p>
          <ul className="portfolio-list">
            {companyProject.map((list) => {
              return (
                <li
                  className="list-item"
                  key={list.id}
                  style={{
                    backgroundImage: `url(${list.images}) `
                  }}
                >
                  <a
                    href={list.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    <div className="text-area">
                      <div className="box-text">
                        <h3 className="subject">{list.subject}</h3>
                        <div className="skill">Skill - {list.skills}</div>
                        <div className="date">{list.period}</div>
                        <div className="type">{list.type}</div>
                      </div>
                      <ul className="works">
                        {list.todo.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <div className="title-menu" ref={contactRef}>
        CONTACT
      </div>
      <div className="contact-section">
        <div className="user-info">
          <h1 className="user-name">
            HELLO, I'M ELISABETH. I'M FRONT-END DEVELOPER.
          </h1>
        </div>
        <div className="info-wrapper">
          <div className="contact-box">
            <a
              href="https://github.com/elisabethyoon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className="contact-box">
            <a
              href="mailto: careerwowan87@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
        </div>
        <div className="user-image">
          <span className="dashed"></span>
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
