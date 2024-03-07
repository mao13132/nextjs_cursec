
import { Button, Htag, P, Rating, Tag } from "@/components";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import { useState } from "react";
import axios from 'axios';
import { MenuItem } from "@/interfaces/menu.interface";

function Home({menu, firstCategory}: HomeProps) {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
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
      
      
    </>
  );
}



export default withLayout(Home);

/* Получаю данные для статистической страници */

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/find', {
    firstCategory: 1
  })

  return {
    props: {
      menu,
      firstCategory
    }
  }
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number,
};