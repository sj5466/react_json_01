import React, { useEffect,useState } from 'react'
import Contents from '../layout/Contents'
import BannerCont from '../includes/BannerCont'


function Banner() {
  const [bannerInfor,setBanners] = useState([]);

  useEffect(() => {
    const requestOption = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://raw.githubusercontent.com/sj5466/json_banner/main/Banner.json",
      requestOption
    )
      .then((response) => response.json())
      .then((result) => setBanners(result.data.bannerInfor))
  }, []);
  return (
    <>
    <Contents>
      <BannerCont bannerInfor={bannerInfor}/>
    </Contents>
    </>
  )
}

export default Banner