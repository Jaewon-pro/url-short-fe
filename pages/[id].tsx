import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axiosInstance from "@/lib/axios";
import NotFound from "./notFound";

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
    .catch((res) => {
      console.log("ERROR:", res);
    });
}

export default function GetAndRedirect() {
  const router = useRouter();
  const shortUrlId: string = router.query.id as string;
  console.log("ID: ", shortUrlId);
  useEffect(() => {
    if (shortUrlId === undefined || shortUrlId === null) {
      return;
    }
    const fetchData = async () => {
      const urlResponse: UrlResponse = await getOriginalUrlByShortUrlId(shortUrlId);
      console.log(urlResponse.url);
      router.push(urlResponse.url);
    }
    fetchData();
  });

  return (<NotFound />);
}
