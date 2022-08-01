import React, { useEffect,useState } from 'react'
import Contents from '../layout/Contents'
import TextCont from '../includes/TextCont'
import Footer from '../layout/Footer'

function Text() {
  const [textInfor1,setTexts1] =useState([]);

  useEffect(()=>{
    const requestOption={
      method:"GET",
      redirect:"follow"
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_text/main/Text.json",
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setTexts1(result.data.textInfor1))
  },[]);

  const [textInfor2,setTexts2] =useState([]);

  useEffect(()=>{
    const requestOption={
      method:"GET",
      redirect:"follow"
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_text/main/Text.json",
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setTexts2(result.data.textInfor2))
  },[]);
  return (
    <>
    <Contents>
      <TextCont textInfor1={textInfor1} textInfor2={textInfor2}/>
    </Contents>
    <Footer skill={["section", "nexon", "gray"]} />
    </>
  )
}

export default Text