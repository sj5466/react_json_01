import React from 'react'

function Info({title,text1,desc,address,text2}){
    return(
        <>
            <h2 className="ir_so">{title}</h2>
            <div className="banner__inner">
                <h3 className="banner__title">{text1}</h3>
                <p className="banner__desc">
                    {desc}
                    <a href="/">{address}</a>
                </p>
                <span className="banner__sub">{text2}</span>
            </div>
        </>
    )
}
function BannerCont({bannerInfor}){
  return (
    <section id="bannerType" className="banner__wrap section gmarket">
        {bannerInfor.map((txt)=>(
                <Info 
                title={txt.title} 
                text1={txt.text1} 
                desc={txt.desc}  
                address={txt.address} 
                text2={txt.text2} 
                key={txt.title}
                />
            ))}
    </section>
  )
}

export default BannerCont