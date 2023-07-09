import { useEffect, useState } from "react";
import UrlBar, { ShortUrl } from "./urlBar/urlBar";
import ShortUrlInfo from "./shortUrlInfo/shortUrlInfo";

const HomePage: React.FC = () => {
  const [urlInfo, setUrlInfo] = useState<ShortUrl | null>(null);

  const onGenerateUrl = (url: ShortUrl) => {
    setUrlInfo(url);
  }

  return (
    <>
      <h1>URL 링크 단축</h1>
      <p>링크 단축 서비스를 이용해보세요</p>
      <UrlBar onGenerateUrl={onGenerateUrl} />
      {urlInfo && <ShortUrlInfo shortUrl={urlInfo}/>}
    </>
  );
};

export default HomePage;
