import React from 'react'

const headerInfor = [
    {text: "헤더영역"},
    {text: "슬라이드영역"},
    {text: "이미지영역"},
    {text:  "컨텐츠영역"},
    {text: "푸터영역"}
]

function Info({text}){
  return (
    <>
        <li>
        <a href="/">{text}</a>
        </li>
    </>
  )
}


function Header() {
  return (
    <>
       <header id="headerType">
        <div className="header__inner">
          <h1 className="header__logo">
            <a href="/">
              WEB <em>site</em>
            </a>
          </h1>
          <nav className="header__menu">
            <h2 className="ir_so">메인 영역</h2>
            <ul>
              {headerInfor.map((txt) => (
                <Info text={txt.text} key={txt.text}/>
              ))}
            </ul>
          </nav>
          <div className="header__member">
            <a href="/">로그인</a>
          </div>
        </div>
        </header>
    </>
  )
}

export default Header