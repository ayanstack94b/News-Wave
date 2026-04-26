import LeftSide from '@/components/homepage/news/LeftSide';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSide from '@/components/homepage/news/RightSide';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';


const NewsCategoryPage = async ({ params }) => {
    const { id } = await params

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
                        <NewsCard className="p-6 rounded-md border"
                            key={n._id}
                            news={n} >{n.title}</NewsCard>
                    ))) : (<h2>No news found</h2>)}
                </div>
            </div>
            <div className=" col-span-3">
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default NewsCategoryPage;