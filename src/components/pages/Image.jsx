import React, { useEffect,useState } from 'react'
import Contents from '../layout/Contents'
import ImageCont from '../includes/ImageCont'

function Image() {
  const [imageInfor1, setImages1] =useState([]);

  useEffect(()=>{
    const requestOption={
      method:"GET",
      redirect:"follow",
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_image/main/Image.json",
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setImages1(result.data.imageInfor1))
  },[]);

  const [imageInfor2, setImages2] =useState([]);

  useEffect(()=>{
    const requestOption={
      method:"GET",
      redirect:"follow",
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_image/main/Image.json",
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setImages2(result.data.imageInfor2))
  },[]);
  return (
    <>
    <Contents>
      <ImageCont imageInfor1={imageInfor1} imageInfor2={imageInfor2}/>
    </Contents>
    </>
  )
}

export default Image