import LeftSide from '@/components/homepage/news/LeftSide';
import RightSide from '@/components/homepage/news/RightSide';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

// async function getCategories() {
//     const res = await fetch(
//         "https://openapi.programming-hero.com/api/news/categories",
//     );
//     const data = await res.json();
//     return data.data;
// }
// async function getNewsByCategoryId(category_id) {
//     const res = await fetch(
//         `https://openapi.programming-hero.com/api/news/category/${category_id}`,
//     );
//     const data = await res.json();
//     return data.data;
// }

const NewsCategoryPage = async ({ params}) => {
    const {id} = await params

    const categories = await getCategories();

    const news = await getNewsByCategoryId(id)


    return (
        <div className="grid grid-cols-12 container mx-auto gap-5 my-16">
            <div className="col-span-3">
                <LeftSide categories={categories} activeId={id}></LeftSide>
            </div>

            <div className=" col-span-6">
                <h2 className='text-xl font-bold mb-2'>News by category</h2>
                <div className="space-y-4 font-semibold">
                    {news.length > 0 ? (news.map((n) => (
                        <div className="p-6 rounded-md border" key={n._id}>{n.title}</div>
                    ))) :( <h2>No news found</h2>)}
                </div>
            </div>
            <div className=" col-span-3">
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default NewsCategoryPage;