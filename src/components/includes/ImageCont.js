import React from 'react'

function Info1({title,desc}){
    return(
        <>
            <h2>{title}</h2>
            <p>
            {desc}
            </p>
        </>
    )
}

function Info2({image,title,desc1,desc2,text}){
    return(
        <>
            <article className="image">
                <div className="image__header">
                    <figure className="image__figure">
                        <img src={image} alt={title} />
                    </figure>
                </div>
                <div className="image__body">
                    <h3 className="image__title">{title}</h3>
                    <p className="image__desc">
                        {desc1}
                        <br/>
                        {desc2}
                    </p>
                    <a href="/" className="image__btn yellow">
                        {text}
                    </a>
                </div>
            </article>
        </>
    )
}

function ImageCont({imageInfor1,imageInfor2}) {
  return (
    <section id="imageType"  className="image__wrap section nexon">
        {imageInfor1.map((txt)=>(
            <Info1
            title={txt.title} 
            desc={txt.desc} 
            key={txt.id}
            />
        ))}
        <div className="image__inner container">
            {imageInfor2.map((txt)=>(
                <Info2
                image={txt.image} 
                title={txt.title} 
                desc1={txt.desc1} 
                desc2={txt.desc2} 
                text={txt.text} 
                key={txt.id}
                />
            ))}
        </div>
    </section>
  )
}

export default ImageCont