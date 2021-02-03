import React, { Component } from "react";
import portFolioImage1 from "../images/wematchda24.png";
import portFolioImage2 from "../images/marketdesigners_vue.png";
import portFolioImage3 from "../images/partner.png";
import portFolioImage4 from "../images/da24Renewal.png";
import portFolioImage5 from "../images/themortgage.png";
import portFolioImage6 from "../images/marketdesigners.png";

function MainPage() {
  const Image1 = {
    backgroundImage: `url(${portFolioImage1})`
  };
  const Image2 = {
    backgroundImage: `url(${portFolioImage2})`
  };
  const Image3 = {
    backgroundImage: `url(${portFolioImage3})`
  };
  const Image4 = {
    backgroundImage: `url(${portFolioImage4})`
  };
  const Image5 = {
    backgroundImage: `url(${portFolioImage5})`
  };
  const Image6 = {
    backgroundImage: `url(${portFolioImage6})`
  };
  return (
    <div className="main-contents">
      <div className="title-menu">ABOUT</div>
      <div className="about-section">
        <ul className="list-container">
          <li className="item">
            <h3 className="section-title">
              <span>I</span>ntroduce
            </h3>
            <p className="info-about">
              퍼블리싱 경력 3년차. 현재 javascript 및 프레임워크(React, Vue)를
              이용한 Front-end 개발자로 전향중이며 적극적이고 능동적이며 항상
              고민하는 Front-end 개발자로 나아가기 위해 학습하며 노력하고
              있습니다.
            </p>
          </li>
          <li className="item">
            <strong className="section-title">
              <span>C</span>areer
            </strong>
            <div className="section-inner">
              <div className="period">2017. 09 ~ 2020. 10</div>
              <div className="article">
                <strong className="company">마켓디자이너스</strong>
                <p className="sub-text">개발팀</p>
                <ul className="info-text">
                  <li>- 웹표준/웹접근성/UI/UX를 고려한 퍼블리싱</li>
                  <li>- javascript / jquery를 이용한 스크립트개발</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="title-menu">PORTFOLIO</div>
      <div className="portfolio-section">
        <section className="personal-project">
          <h3 className="section-title">
            <span>P</span>ersonal project
          </h3>
          <ul>
            <li className="list-item">
              <div className="image"></div>
              <div className="description">
                <h4 className="project-title">
                  React - 학습 노트 애플리케이션
                </h4>
                <div className="summary">
                  <span>
                    Axios를 이용한 REST API 기반의 CRUD 학습노트 애플리케이션
                  </span>
                </div>
                <div className="url">
                  <a
                    href="https://github.com/elisabethyoon/React-NoteApp"
                    target="_blank"
                  >
                    https://github.com/elisabethyoon/React-NoteApp
                  </a>
                </div>
                <dl className="skills">
                  <dt>
                    <strong>Skills</strong>
                  </dt>
                  <dd>Vue / Vue Router / Vuex / Axios / javascript</dd>
                </dl>
              </div>
            </li>
            <li className="list-item">
              <div className="image"></div>
              <div className="description">
                <h4 className="project-title">
                  React - 학습 노트 애플리케이션
                </h4>
                <div className="summary">
                  <span>
                    Axios를 이용한 REST API 기반의 CRUD 학습노트 애플리케이션
                  </span>
                </div>
                <div className="url">
                  <a
                    href="https://github.com/elisabethyoon/React-NoteApp"
                    target="_blank"
                  >
                    https://github.com/elisabethyoon/React-NoteApp
                  </a>
                </div>
                <dl className="skills">
                  <dt>
                    <strong>Skills</strong>
                  </dt>
                  <dd>Vue / Vue Router / Vuex / Axios / javascript</dd>
                </dl>
              </div>
            </li>
          </ul>
        </section>
        <section className="company-project">
          <h3 className="section-title">
            <span>W</span>ork experience
          </h3>
          <p className="stack">
            stack : html5, css3, scss, gulp, javascript, jquery
          </p>
          <ul className="portfolio-list">
            <li className="list-item" style={Image1}>
              <a
                href="https://da24.wematch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <div className="text-area">
                  <div className="box-text">
                    <h3 className="subject">위매치다이사</h3>
                    <div className="date">2020년 2월 ~ 2020년 3월</div>
                    <div className="type">반응형</div>
                  </div>
                  <ul className="works">
                    <li>- 기존 PC/MO 에서 반응형으로 변경작업</li>
                    <li>- 메인/서브 퍼블리싱</li>
                    <li>- javascript/jquery 스크립트 개발</li>
                    <li>- 기여도 : 80%</li>
                  </ul>
                </div>
              </a>
            </li>
            <li className="list-item" style={Image2}>
              <a
                href="https://marketdesigners.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <div className="text-area">
                  <div className="box-text">
                    <h3 className="subject">마켓디자이너스</h3>
                    <div className="date">2019년 7월 ~ 2019년 10월</div>
                    <div className="type">반응형 / 리뉴얼</div>
                  </div>
                  <ul className="works">
                    <li>
                      - 기존 마크업 업무에서 Vue 언어로 신규 도입 후 첫 프로젝트
                      진행
                    </li>
                    <li>- 메인/서브 퍼블리싱</li>
                    <li>- javascript/jquery 스크립트 개발</li>
                    <li>- 기여도 : 60%</li>
                  </ul>
                </div>
              </a>
            </li>
            <li className="list-item" style={Image3}>
              <a
                href="https://da24.wematch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <div className="text-area">
                  <div className="box-text">
                    <h3 className="subject">위매치다이사 파트너</h3>
                    <div className="date">2019년 4월 ~ 2019년 12월</div>
                    <div className="type">PC/MO</div>
                  </div>
                  <ul className="works">
                    <li>- 순차적인 페이지 리뉴얼 마크업작업</li>
                    <li>- UI/UX 개선 마크업 작업</li>
                    <li>- 중복코드 통합작업 및 공통이미지 sprite 작업개선</li>
                    <li>- javascript/jquery 스크립트 개발</li>
                    <li>- 기여도 : 80%</li>
                  </ul>
                </div>
              </a>
            </li>
            <li className="list-item" style={Image4}>
              <a
                href="https://da24.wematch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <div className="text-area">
                  <div className="box-text">
                    <h3 className="subject">위매치다이사</h3>
                    <div className="date">2018년 8월 ~ 2018년 11월</div>
                    <div className="type">PC/MO / 리뉴얼</div>
                  </div>
                  <ul className="works">
                    <li>- 서비스명 변경 '다이사' -> '위매치다이사'</li>
                    <li>- 메인/서브 퍼블리싱</li>
                    <li>- javascript/jquery 스크립트 개발</li>
                    <li>- 기여도 : MO - 100% / PC - 80%</li>
                  </ul>
                </div>
              </a>
            </li>
            <li className="list-item" style={Image5}>
              <a
                href="https://da24.wematch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <div className="text-area">
                  <div className="box-text">
                    <h3 className="subject">더 모기지</h3>
                    <div className="date">2018년 1월 ~ 2018년 6월</div>
                    <div className="type">PC/MO</div>
                  </div>
                  <ul className="works">
                    <li>- 전체 퍼블리싱</li>
                    <li>- javascript/jquery 스크립트 개발</li>
                    <li>- 기여도 : MO- 100% / PC - 100%</li>
                  </ul>
                </div>
              </a>
            </li>
            <li className="list-item" style={Image6}>
              <a
                href="https://da24.wematch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <div className="text-area">
                  <div className="box-text">
                    <h3 className="subject">마켓디자이너스</h3>
                    <div className="date">2017년 11월 ~ 2017년 12월</div>
                    <div className="type">PC/MO</div>
                  </div>
                  <ul className="works">
                    <li>- 전체 퍼블리싱</li>
                    <li>- javascript/jquery 스크립트 개발</li>
                    <li>- 기여도 : MO- 100% / PC - 60%</li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="title-menu">CONTACT</div>
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
