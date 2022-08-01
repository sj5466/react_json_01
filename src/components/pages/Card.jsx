import React, { useEffect,useState } from 'react'
import Contents from '../layout/Contents'
import CardCont from '../includes/CardCont'


function Card() {
  const [cardInfor1, setCards1] = useState([]);

  useEffect(()=>{
    const requestOption ={
      method:"GET",
      redirect:"follow"
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_card/main/Card.json",
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setCards1(result.data.cardInfor1))
  },[]);

  const [cardInfor2, setCards2] = useState([]);

  useEffect(()=>{
    const requestOption ={
      method:"GET",
      redirect:"follow"
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_card/main/Card.json",
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setCards2(result.data.cardInfor2))
  },[]);

  return (
    <>
    <Contents>
      <CardCont cardInfor1={cardInfor1} cardInfor2={cardInfor2}/>
    </Contents>
    </>
  )
}

export default Card