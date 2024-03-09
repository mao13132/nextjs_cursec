
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import { useState } from "react";
import axios from 'axios';
import { MenuItem } from "@/interfaces/menu.interface";
import Head from "next/head";

function Search({ menu, firstCategory }: HomeProps) {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Head>
                <title>Поиск</title>
            </Head>
            Поиск
        </>
    );
}



export default withLayout(Search);

/* Получаю данные для статистической страници */

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;

    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/find', {
        firstCategory
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