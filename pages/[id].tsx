import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axiosInstance from "@/lib/axios";
import LoadingPage from "@/app/components/loading";

type UrlResponse = {
  url: string
}

const getOriginalUrlByShortUrlId = async (shortUrlId: string) => {
  return axiosInstance
    .get(`/url/${shortUrlId}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      if (error.response !== undefined) {
        alert(error.response.data.detail); // 에러 메시지 출력
      } else {
        alert("서버와 통신할 수 없습니다!");
      }
      console.log("ERROR:", error);
    });
}

export default function GetAndRedirect() {
  const router = useRouter();
  const shortUrlId: string = router.query.id as string;
  // console.log("ID: ", shortUrlId);
  useEffect(() => {
    if (shortUrlId === undefined || shortUrlId === null) {
      return;
    }
    const fetchData = async () => {
      const urlResponse: UrlResponse = await getOriginalUrlByShortUrlId(shortUrlId);
      if (urlResponse === undefined) {
        router.push("/not-found"); // 못 찾은 경우, not found 페이지로 이동
        return;
      }
      router.push(urlResponse.url); // 해당하는 원래의 주소로 이동
    }
    fetchData();
  });

  // 불러오는 동안 로딩 페이지 보여줌
  return (
    <>
      <LoadingPage />
    </>
  );
}
