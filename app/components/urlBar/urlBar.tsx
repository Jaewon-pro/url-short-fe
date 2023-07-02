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
      //console.log(res);
    });
}

// {
//   "originalUrl": "https://www.naver.com",
//   "shortUrl": "1",
//   "qrcode": "iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQAAAACFI5MzAAAA4klEQVR4Xu2UMRKDMAwEj8rP8E/B/NTPcIVykgMJhNRc4RuNR9ZS3EjIsH/CtXBokEFcg8iQBmqyOiMXT7MS8XS1isTzfdUhBXltmOOcBAk7SteihOU/rh8l5tP2pJ9KJLbELefrljxOuuJP/FxFiE/Y3SLVqbdWh5htqS4xakZJSoS9TFYAQuuhQ9wpn5a6/LhWIHxUwELri5KliIu18D6fXD9N9teF/yMYX64FiKfs5QY+MDi5FiCcsJNwPcWHWsRutkSFtGxHKBGLJV7C9eolHQLElqx7CJFbDTKIaxBt8gJyUZa4HGei3gAAAABJRU5ErkJggg==",
//   "createdAt": "2023-07-01T20:15:46.688692",
//   "expireAt": "2026-06-30T20:15:46.688692"
// }



// function UrlBar({ inputUrl, onChange }: { inputUrl: number, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
// function UrlBar({ handleEnter }: { handleEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void }) {
function UrlBar({ onGenerateUrl }: { onGenerateUrl: (url: ShortUrl) => void }) {
  const [inputUrl, setInputUrl] = useState<string>('');

  const onUrlBarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(event.target.value);
  }

  const handleEnter = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Enter 입력 이벤트 함수
    if (event.key === 'Enter') {
      const urlInfo: ShortUrl | null = await getShortUrl(inputUrl);
      if (urlInfo) {
        onGenerateUrl(urlInfo);
      }
    }
  }

  return (
    <div id="input-bar">
      <input
        type="text"
        value={inputUrl}
        onChange={onUrlBarChange}
        onKeyDown={handleEnter}
        placeholder="단축할 URL을 입력해주세요."/>
    </div>
  )
}

export default UrlBar;
