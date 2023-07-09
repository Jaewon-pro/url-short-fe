import Layout from "@/app/components/layout/layout";
import { useState } from "react";

export default function Report() {
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputDescription, setInputDescription] = useState<string>('');

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputEmail(event.target.value);
  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputTitle(event.target.value);
  const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputDescription(event.target.value);

  return (
    <Layout>
      <form>
        <input id="email" value={inputEmail} onChange={onEmailChange}/>
        <input id="title" value={inputTitle} onChange={onTitleChange}/>
        <input id="description" value={inputDescription} onChange={onDescriptionChange}/>
      </form>
    </Layout>
  );
}
