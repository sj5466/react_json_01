import React from 'react'

function Info1({title,desc,text}){
    return(
        <>
            <h2>{title}</h2>
            <p>
            {desc}
            <br />
            {text}
            </p>
        </>
    )
}

function Info2({image1,alt,title,desc,text,image2,alt2}){
    return(
        <>
            <article className="card">
                <figure className="card__header">
                <img
                    className="img"
                    src={image1}
                    alt={alt}
                />
                </figure>
                <div className="card__body">
                    <h3 className="title">{title}</h3>
                    <p className="desc">
                        {desc}
                    </p>
                    <a className="btn" href="/">
                        {text}
                        <img src={image2} alt={alt2}></img>
                    </a>
                </div>
            </article>
        </>
    )
}

function CardCont({cardInfor1,cardInfor2}) {
  return (
    <section id="cardType" className="card__wrap section nexon">
        {cardInfor1.map((txt)=>(
            <Info1 
            title={txt.title} 
            desc={txt.desc} 
            key={txt.id}
            />
        ))}
        <div className="card__inner container">
            
        {cardInfor2.map((txt)=>(
            <Info2 
            image1={txt.image1} 
            alt1={txt.alt1} 
            title={txt.title} 
            desc={txt.desc} 
            alt2={txt.alt2} 
            image2={txt.image2} 
            key={txt.id}
            />
        ))}
        </div>
    </section>
  )
}

export default CardCont