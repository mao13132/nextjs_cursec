
import { withLayout } from "@/layout/Layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useState } from "react";
import axios from 'axios';
import { MenuItem } from "@/interfaces/menu.interface";
import Head from "next/head";
import { firstLevelMenu } from "@/helpers/helpers";
import { ParsedUrlQuery } from "node:querystring";

function Type({ menu, firstCategory }: TypeProps) {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Head>
                <title>Type</title>
            </Head>
            Type
        </>
    );
}



export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {


    return {
        paths: firstLevelMenu.map(menu_ => '/' + menu_.route),
        fallback: true
    }
};


/* Получаю данные для статистической страници */

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
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

    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/find', {
        firstCategory: firstCategoryItem.id
    })

    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id
        }
    }
};

interface TypeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number,
};