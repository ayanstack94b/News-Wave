import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        id: 1,
        title: "New React update improves performance"
    },
    {
        id: 2,
        title: "Next.js introduces enhanced routing features"
    },

    {
        id: 3,
        title: "JavaScript trends shifting towards server components"
    },

];


const BreakingNews = () => {
    return (
        <div className='flex justify-center gap-4 bg-base-200 p-3 container mx-auto'>
            <button className="btn bg-[#d72050] p-2 text-white">Latest News</button>
            <Marquee pauseOnHover={true}>
                <p className="font-semibold text-gray-600">
                    {
                        news.map((n) =>
                            <span key={n.id} className="">{n.title}</span>
                        )
                    }
                </p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;