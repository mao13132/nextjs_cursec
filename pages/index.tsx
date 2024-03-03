
import { Button, Htag, P, Tag } from "@/components";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Htag пример</Htag>
      <Button appearance="primary" arrow="right">Привет</Button>
      <Button appearance="ghost" arrow="down">Привет ghost</Button>
      <P size="l">Большой</P>
      <P>Средней</P>
      <P size="s">Маленький</P>
      <Tag size="m" color="red">Тег тест</Tag>
      <Tag color="green">Тег тест</Tag>
      <Tag color="primary">Тег тест</Tag>
    </div>
  );
}
