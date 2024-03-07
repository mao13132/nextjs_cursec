
import { withLayout } from "@/layout/Layout";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { useState } from "react";
import axios from 'axios';
import { TopLevelCategory, TopPageModel } from "@/interfaces/page.omterface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "@/interfaces/product.interface";
import { MenuItem } from "@/interfaces/menu.interface";
import { firstLevelMenu } from "@/helpers/helpers";

function Course({ menu, page, products }: CourseProps) {

  return (
    <>
      {products && products.length}
    </>
  );
}

export default withLayout(Course);

/* Функция получения статических путей категорий */

export const getStaticPaths = async () => {

  let paths: string[] = [];

  for (const menu_ of firstLevelMenu) {

    /* Получаю меню категорий */
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/find', {
      firstCategory: menu_.id
    });

    paths = paths.concat(menu.flatMap(m => m.pages.map(p => `/${menu_.route}/${p.alias}`)));

  }



  return {
    paths,
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

  const firstCategoryItem = firstLevelMenu.find(menu_ => menu_.route == params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true
    }
  }

  try {
    /* Получаю меню категорий */
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/find', {
      firstCategory: firstCategoryItem.id
    });

    if (menu.length == 0) {
      return {
        notFound: true
      }
    }

    /* Получаю данные страници */
    const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/page');



    /* Получаю данные ... */
    const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product', {
      category: page.category,
      limit: 10
    });

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products
      }
    }
  } catch (e) {
    return {
      notFound: true
    }
  };


};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
};