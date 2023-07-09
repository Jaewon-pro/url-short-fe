import React, { useState } from "react";
import "./urlBar.css";
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
    .catch((error) => {
      console.log(error);
      alert(error.response.data.detail);
    });
}

function UrlBar({ onGenerateUrl }: { onGenerateUrl: (url: ShortUrl) => void }) {
  const [inputUrl, setInputUrl] = useState<string>('');

  const onUrlBarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(event.target.value);
  }

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const urlInfo: ShortUrl = await getShortUrl(inputUrl);
    onGenerateUrl(urlInfo);
  }

  return (
    <form id="input-bar" onSubmit={submit}>
      <input
        type="text"
        value={inputUrl}
        onChange={onUrlBarChange}
        placeholder="단축할 URL을 입력해주세요." />
      <button id="input-button">단축</button>
    </form>
  )
}

export default UrlBar;
