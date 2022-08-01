import React from 'react'

function Info1({title,desc}){
    return(
        <>
            <h2>{title}</h2>
            <p>
            {desc}{" "}
            </p>
        </>
    )
}

function Info2({title,desc}){
    return(
        <div className="text">
            <h3>{title}</h3>
            <p>
            {desc}
            </p>
        </div>
    )
}

function TextCont({textInfor1,textInfor2}) {
  return (
    <section id="textType" className="text__wrap section nexon">
        {textInfor1.map((txt)=>(
            <Info1 
            title={txt.title} 
            desc={txt.desc} 
            key={txt.id}
            />
        ))}
        <div className="text__inner container">
            {textInfor2.map((txt)=>(
                <Info2 
                title={txt.title} 
                desc={txt.desc} 
                key={txt.id}
                />
            ))}
        </div>
    </section>
  )
}

export default TextCont