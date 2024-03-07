
import { withLayout } from "@/layout/Layout";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { useState } from "react";
import axios from 'axios';
import { TopPageModel } from "@/interfaces/page.omterface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "@/interfaces/product.interface";
import { MenuItem } from "@/interfaces/menu.interface";

function Course({ menu, page, products }: CourseProps) {

  return (
    <>
      {products && products.length}
    </>
  );
}


const firstCategory = 1;

export default withLayout(Course);

/* Функция получения статических путей категорий */

export const getStaticPaths = async () => {
  /* Получаю меню категорий */
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/find', {
    firstCategory: 1
  });

  return {
    paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
    fallback: true
  }
};

/* Получаю данные для статистической страници */

/* Приходит в функцию GetStaticProps данные о запросе, и вытаскиваю props */

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    }
  }


  /* Получаю меню категорий */
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/find', {
    firstCategory
  });

  /* Получаю данные страници */
  const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/page');

  debugger;

  /* Получаю данные ... */
  const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product', {
    category: page.category,
    limit: 10
  });

  return {
    props: {
      menu,
      firstCategory: 0,
      page,
      products
    }
  }
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
};