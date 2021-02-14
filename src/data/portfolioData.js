import * as images from "./portfolioImages";

const data = {
  profile: {
    name: "윤엘리사벳",
    position: "Front-end Developer"
  },
  contact: {
    mail: "careerwowan87@gmail.com",
    github: "https://github.com/elisabethyoon"
  },
  career: {
    company: "마켓디자이너스",
    period: "2017. 09 ~ 2020. 10",
    position: "개발팀",
    todo: [
      "- 웹표준/웹접근성/UI/UX를 고려한 퍼블리싱",
      "- javascript / jquery를 이용한 스크립트개발"
    ]
  },
  portfolio: {
    personalProject: [
      {
        id: 1,
        gif: images.portFolioGIF2,
        subject: "React & Mobx 학습 노트 애플리케이션",
        summary: "REST API 기반의 CRUD 학습노트 애플리케이션 (상태관리 - Mobx)",
        url: "https://github.com/elisabethyoon/React-NoteApp",
        skills: "React / Mobx / React Router / Axios / javascript"
      },
      {
        id: 2,
        gif: images.portFolioGIF1,
        subject: "React & Mobx Todolist 애플리케이션",
        summary: "CRUD TodoList 애플리케이션 (상태관리 - Mobx)",
        url: "https://github.com/elisabethyoon/React-TodoList",
        skills: "React / Mobx / javascript"
      }
    ],
    companyProject: [
      {
        id: 1,
        subject: "다이사 원룸 리뉴얼 / React",
        images: images.portFolioImage1,
        url: "https://oneroom.wematch.com/requests/order",
        skills: "React / Axios / styled-component / javascript",
        period: "2020년 7월 ~ 2020년 10월",
        type: "반응형",
        todo: ["- component작업 / api호출 등 서브작업 위주", "- 기여도 : 20%"]
      },
      {
        id: 2,
        subject: "위매치부동산 리뉴얼",
        images: images.portFolioImage2,
        url: "https://www.ozshouse.com/",
        skills: "HTML5, css3, javascript, jquery",
        period: "2020년 4월 ~ 2020년 6월",
        type: "PC / MO",
        todo: [
          "- 현재 서비스명 '오즈의 집'으로 변경",
          "- 순차적으로 페이지 리뉴얼 마크업 작업",
          "- javascript/jquery 스크립트 개발",
          "- 기여도 : 100%"
        ]
      },
      {
        id: 3,
        subject: "위매치다이사",
        images: images.portFolioImage3,
        url: "https://da24.wematch.com/",
        skills: "HTML5, css3, javascript, jquery",
        period: "2020년 2월 ~ 2020년 3월",
        type: "반응형",
        todo: [
          "- 기존 PC/MO 에서 반응형으로 변경작업",
          "- javascript/jquery 스크립트 개발",
          "- 기여도 : 80%"
        ]
      },
      {
        id: 4,
        subject: "마켓디자이너스 / Vue",
        images: images.portFolioImage4,
        url: "https://marketdesigners.com/",
        skills: "Vue / Vue Router / Nuxt / sass / Axios / javascript",
        period: "2019년 7월 ~ 2019년 10월",
        type: "반응형 / 리뉴얼",
        todo: [
          "- 기존 마크업 업무에서 Vue 언어로 신규 도입 후 첫 프로젝트 진행",
          "- component작업 / api호출 등 서브작업 위주",
          "- 기여도 : 40%"
        ]
      },
      {
        id: 5,
        subject: "위매치다이사 파트너",
        images: images.portFolioImage5,
        url: "https://da24.wematch.com/",
        skills: "HTML5, css3, javascript, jquery",
        period: "2019년 4월 ~ 2019년 12월",
        type: "반응형",
        todo: [
          "- 순차적으로 페이지 리뉴얼 마크업작업",
          "- 중복코드 통합작업 및 공통이미지 sprite 작업개선",
          "- javascript/jquery 스크립트 개발",
          "- 기여도 : 70%"
        ]
      },
      {
        id: 6,
        subject: "위매치다이사",
        images: images.portFolioImage6,
        url: "https://da24.wematch.com/",
        skills: "HTML5, css3, javascript, jquery",
        period: "2018년 8월 ~ 2018년 11월",
        type: "PC/MO / 리뉴얼",
        todo: [
          "- 서비스명 변경 '다이사' -> '위매치다이사'",
          "- 전 페이지 마크업",
          "- javascript/jquery 스크립트 개발",
          "- 기여도 : MO - 100% / PC - 60%"
        ]
      },
      {
        id: 7,
        subject: "더 모기지",
        images: images.portFolioImage7,
        url: "http://www.toppingmoney.com/",
        skills: "HTML5, css3, javascript, jquery",
        period: "2018년 1월 ~ 2018년 6월",
        type: "PC/MO",
        todo: [
          "- 서비스명 변경 '더 모기지' -> '위매치머니' -> (현)'토핑머니'",
          "- 전 페이지 마크업",
          "- javascript/jquery 스크립트 개발",
          "- 기여도 : MO - 100% / PC - 100%"
        ]
      },
      {
        id: 8,
        subject: "마켓디자이너스",
        images: images.portFolioImage8,
        url: "https://marketdesigners.com/",
        skills: "HTML5, css3, javascript, jquery",
        period: "2017년 11월 ~ 2017년 12월",
        type: "PC/MO",
        todo: [
          "- 전 페이지 마크업",
          "- javascript/jquery 스크립트 개발",
          "- 기여도 : MO - 100% / PC - 60%"
        ]
      }
    ]
  }
};
export default data;
