import React from 'react'

function Info({text,title,desc,btn}){
    return(
        <>
            <span className="small">{text}</span>
            <h3 className="title">
            {title}
            </h3>
            <p className="desc">
            {desc}
            </p>
            <a href="/" className="btn">
            {btn}
            </a>
        </>
    )
}
function ImgTextCont({imgTextInfor}) {
  return (
    <section id="imgTextType" className="imgText__wrap section nexon gray">
        <h2 className="ir_so">이미지 텍스트 영역</h2>
            <div className="imgText__inner container">
                <div className="txt">
                {imgTextInfor.map((txt)=>(
                    <Info
                    title={txt.title}
                    text={txt.text}
                    desc={txt.desc}
                    btn={txt.btn}
                    key={txt.id}
                    />
                ))}
                </div>
            <div className="img bg1"></div>
            <div className="img bg2"></div>
        </div>
    </section>
  )
}

export default ImgTextCont