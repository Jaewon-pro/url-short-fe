import React, { useState } from "react";
import "./UrlBar.css";
import axiosInstance from "../../../lib/axios";

export type ShortUrl = {
  originalUrl: string
  shortUrl: string
  qrcode: string
  createdAt: Date
  expireAt: Date
}

type ShortUrlRequest = {
  originalUrl: string
}

const getShortUrl = async (originalUrl: string) => {
  const data: ShortUrlRequest = {
    originalUrl: originalUrl
  };
  return axiosInstance
    .post(`/url`, data)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((res) => {
      console.log(res);
      alert(res);
    });
}

function UrlBar({ onGenerateUrl }: { onGenerateUrl: (url: ShortUrl) => void }) {
  const [inputUrl, setInputUrl] = useState<string>('');

  const onUrlBarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(event.target.value);
  }

  const submit = async () => {
    const urlInfo: ShortUrl | null = await getShortUrl(inputUrl);
    if (urlInfo) {
      onGenerateUrl(urlInfo);

    }
  }

  return (
    <form id="input-bar" onSubmit={submit}>
      <label>
        <input
          type="text"
          value={inputUrl}
          onChange={onUrlBarChange}
          placeholder="단축할 URL을 입력해주세요."/>
        <button id="input-button">단축</button>
      </label>
    </form>
  )
}

export default UrlBar;
