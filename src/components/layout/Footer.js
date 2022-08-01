import React from "react";


const footertxt = [
  { 
    title: "레이아웃 영역",
    text1: "레이아웃 유형01",
    text2: "레이아웃 유형02",
    text3: "레이아웃 유형03",
    text4: "레이아웃 유형04",
    text5: "레이아웃 유형05"
  },
  { 
    title: "헤더 영역",
    text1: "메뉴 유형01"
  },
  { 
    title: "메인 영역",
    text1: "이미지 유형01",
    text2: "동영상 유형02",
    text3: "슬라이드 유형03",
  },
  { 
    title: "컨텐츠 영역",
    text1: "컨텐츠 유형01",
    text2: "이미지 유형02",
    text3: "이미지/텍스트03",
    text4: "카드 유형04",
    text5: "배너 유형05",
  },
  { 
    title: "푸터 영역",
    text1: "컨택트 유형01",
    text2: "푸터 유형02",
  },
  { 
    title: "사이트 영역",
    text1: "웹표준 사이트",
    text2: "반응형 사이트",
    text3: "패럴랙스 사이트",
    text4: "포트폴리오 사이트",
  }
]



function Footerinfo({title, text1, text2, text3, text4, text5}){
  return (
    <>
    <div>
      <h3>{title}</h3>
      <ul>
        <li>
          <a href="/">{text1}</a>
        </li>
        <li>
          <a href="/">{text2}</a>
        </li>
        <li>
          <a href="/">{text3}</a>
        </li>
        <li>
          <a href="/">{text4}</a>
        </li>
        <li>
          <a href="/">{text5}</a>
        </li>        
      </ul>
    </div>
   </>
   )
}



function Footer(props) {
  return (
    <footer
      id="footerType"
      className={`footer__wrap ${props.skill[0]} ${props.skill[1]} ${props.skill[2]}`}
    >
      <h2 className="ir_so">푸터 영역</h2>
      <div className="footer__inner container">
        <div className="footer__menu">
            {footertxt.map((txt) => (
                  <Footerinfo 
                  title = {txt.title}
                  text1 = {txt.text1}
                  text2 = {txt.text2}
                  text3 = {txt.text3}
                  text4 = {txt.text4}
                  text5 = {txt.text5}
                  key = {txt.text1}
                  />
                ))}      
        </div>
        <address className="footer__right">
          ©2022 webstroyboy. All rights reserved.
        </address>
      </div>
    </footer>
  );
}

export default Footer;