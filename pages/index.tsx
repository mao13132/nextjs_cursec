
import { Button, Htag, P, Rating, Tag } from "@/components";
import { Layout } from "@/layout/Layout";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
      <Htag tag="h1">Htag пример</Htag>
      <Button appearance="primary" arrow="right">Привет</Button>
      <Button appearance="ghost" arrow="down">Привет ghost</Button>
      <P size="l">Большой</P>
      <P>Средней</P>
      <P size="s">Маленький</P>
      <Tag size="m" color="red">Тег тест</Tag>
      <Tag color="green">Тег тест</Tag>
      <Tag color="primary">Тег тест</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </Layout>
  );
}
