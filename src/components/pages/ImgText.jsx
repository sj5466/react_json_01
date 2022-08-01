import React, { useEffect, useState } from 'react'
import Contents from '../layout/Contents'
import ImgTextCont from '../includes/ImgTextCont'

function ImgText() {
  const [imgTextInfor, setImgTexts] = useState([]);

  useEffect(() => {
    const requestOption={
      method:"GET",
      redirect:"follow",
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_imageText/main/ImageText.json",
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setImgTexts(result.data.imgTextInfor))
  }, []);
  return (
    <>
    <Contents>
      <ImgTextCont imgTextInfor={imgTextInfor}/>
    </Contents>
    </>
  )
}

export default ImgText