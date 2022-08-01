import React, { useEffect, useState } from 'react'
import Header from '../layout/Header'
import Contents from '../layout/Contents'
import SliderCont from '../includes/SliderCont'

function Slider() {
  const [sldierInfor, setSliders] =useState([]);

  useEffect(()=>{
    const requestOption={
      method:"GET",
      redirect:"follow"
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_slider/main/Slider.json",
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setSliders(result.data.sldierInfor))
  },[]);

  const [sliderInfor1, setSliders1] =useState([]);
  useEffect(()=>{
    const requestOption={
      method:"GET",
      redirect:"follow"
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_slider/main/Slider.json",
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setSliders1(result.data.sliderInfor1))
  },[]);

  const [sliderInfor2, setSliders2] =useState([]);
  useEffect(()=>{
    const requestOption={
      method:"GET",
      redirect:"follow"
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_slider/main/Slider.json",
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setSliders2(result.data.sliderInfor2))
  },[]);

  const [sliderInfor3, setSliders3] =useState([]);
  useEffect(()=>{
    const requestOption={
      method:"GET",
      redirect:"follow"
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_slider/main/Slider.json",
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setSliders3(result.data.sliderInfor3))
  },[]);

  const [sldierInfor4, setSliders4] =useState([]);
  useEffect(()=>{
    const requestOption={
      method:"GET",
      redirect:"follow"
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_slider/main/Slider.json",
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setSliders4(result.data.sldierInfor4))
  },[]);

  const [sldierInfor5, setSliders5] =useState([]);
  useEffect(()=>{
    const requestOption={
      method:"GET",
      redirect:"follow"
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_slider/main/Slider.json",
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setSliders5(result.data.sldierInfor5))
  },[]);

  const [sldierInfor6, setSliders6] =useState([]);
  useEffect(()=>{
    const requestOption={
      method:"GET",
      redirect:"follow"
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_slider/main/Slider.json",
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setSliders6(result.data.sldierInfor6))
  },[]);

  return (
    <>
    <Header/>
    <Contents>
      <SliderCont 
      sldierInfor={sldierInfor}  
      sliderInfor1={sliderInfor1} 
      sliderInfor2={sliderInfor2}
      sliderInfor3={sliderInfor3}
      sldierInfor4={sldierInfor4}
      sldierInfor5={sldierInfor5}
      sldierInfor6={sldierInfor6}
    />
    </Contents>
    </>
  )
}

export default Slider