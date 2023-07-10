import { useState } from "react";
import './report.module.css';

const reportOptions = [
  "이 링크는 광고성 링크입니다.",
  "이 링크는 사기와 관련된 내용을 포함하고 있습니다."
]

const ReportModule: React.FC = () => {
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputDescription, setInputDescription] = useState<string>('');

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => { console.log(inputEmail); setInputEmail(event.target.value); }
  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => { setInputTitle(event.target.value); }
  const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => { setInputDescription(event.target.value); }

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    // const urlInfo: ShortUrl = await getShortUrl(inputUrl);
    // onGenerateUrl(urlInfo);
  }

  return (
    <>
      <h1>신고</h1>
      <p>악용 사례를 신고해주세요</p>
      <form onSubmit={submit}>

        <span>신고할 URL을 입력해주세요</span>
        <input type="text" value={inputTitle} onChange={onTitleChange} />
        <span>내용</span>
        <input type="text" value={inputDescription} onChange={onDescriptionChange} />
        <span>처리된 결과를 수신 받을 이메일을 입력해주세요</span>
        <input type="text" value={inputEmail} onChange={onEmailChange} />
      </form>
    </>
  );
};

export default ReportModule;
