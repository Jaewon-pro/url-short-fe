import { useEffect, useState } from "react";
import { ShortUrl } from "../urlBar/urlBar";
import useCopyClipBoard from "../../hooks/useCopyClipBoard";
import SaveImageButton from "../saveImageButton";
import "./shortUrlInfo.css";

const ShortUrlInfo: React.FC<{ shortUrl: ShortUrl }> = ({ shortUrl }) => {
  const [url, setUrl] = useState<ShortUrl | null>();
  const [isCopy, onCopy] = useCopyClipBoard();

  useEffect(() => {
    setUrl(shortUrl);
  }, [url, shortUrl]);
  if (url === null || url === undefined) return (<>생성 실패!</>);

  const handleCopyClipBoard = (text: string) => {
    onCopy(text);
  };

  return (
    <div id="url-information">
      <span>단축 URL: {url.shortUrl}</span>
      <div id="">
        <button id="url-copy-button" onClick={() => handleCopyClipBoard(url.shortUrl)}>
          복사
        </button>
        {isCopy && <span>복사 완료!!</span>}
      </div>
      <span>유효 사용일자: {url.expireAt.toString()}</span>
      <span></span>

      <img src={`data:image/jpeg;base64,${url.qrcode}`} />
      <div id="url-qrcode">
        <SaveImageButton base64Image={`${url.qrcode}`} imageName={`${url.originalUrl}`}/>
      </div>
    </div>
  );
};

// ShortUrlInfo.defaultProps = {

// }

export default ShortUrlInfo;
