import React from 'react'

function Info({text}){
    return(
        <>
            <h2 className="ir_so">{text}</h2>
        </>
    )
}

function Info1({title,text1,desc1,desc2,text2,text3}){
    return(
        <>
            <div className="desc">
                <span>{title}</span>
                <h3>{text1}</h3>
                <p>
                {desc1}
                <br /> {desc2}
                </p>
                <div className="btn">
                    <a href="/" className="white">
                        {text2}
                    </a>
                    <a href="/" className="black">
                        {text3}
                    </a>
                </div>
            </div>
        </>
    )
}

function Info2({text}){
    return(
        <>
            <a href="/" className="left">
                <span className="ir_pm">{text}</span>
            </a>
        </>
    )
}

function Info3({text}){
    return(
        <>
            <a href="/" className="right">
                <span className="ir_pm">{text}</span>
            </a>
        </>
    )
}

function Info4({text}){
    return(
        <>
            <a href="/" className="dot"> 
                <span className="ir_pm">{text}</span>
            </a>
        </>
    )
}

function Info5({text}){
    return(
        <>
            <a href="/" className="play"> 
                <span className="ir_pm">{text}</span>
            </a>
        </>
    )
}

function Info6({text}){
    return(
        <>
            <a href="/" className="stop"> 
                <span className="ir_pm">{text}</span>
            </a>
        </>
    )
}
function SliderCont({sldierInfor,sliderInfor1,sliderInfor2,sliderInfor3,sldierInfor4,sldierInfor5,sldierInfor6}) {
  return (
<section id="sliderType" >
    {sldierInfor.map((txt)=>(
        <Info text={txt.text} key={txt.id}/>
    ))}
    <div className="slider__inner">
        <div className="slider">
            <div className="slider__img">
                {sliderInfor1.map((txt)=>(
                    <Info1 
                    title={txt.title} 
                    text1={txt.text1} 
                    text2={txt.text2} 
                    text3={txt.text3} 
                    desc1={txt.desc1} 
                    desc2={txt.desc2}  
                    key={txt.id}
                    />
                ))}
            </div>
            <div className="slider__arrow">
                {sliderInfor2.map((txt)=>(
                    <Info2 text={txt.text} key={txt.id}/>
                ))}
                {sliderInfor3.map((txt)=>(
                    <Info3 text={txt.text} key={txt.id}/>
                ))}
                
            </div>
            <div className="slider__dot">
                {sldierInfor4.map((txt)=>(
                    <Info4 text={txt.text} key={txt.id}/>
                ))}
                {sldierInfor5.map((txt)=>(
                    <Info5 text={txt.text} key={txt.id}/>
                ))}
                {sldierInfor6.map((txt)=>(
                    <Info6 text={txt.text} key={txt.id}/>
                ))}
            </div>
        </div>
    </div>
</section>

  )
}

export default SliderCont