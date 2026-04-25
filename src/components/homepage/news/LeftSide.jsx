import Link from 'next/link';
import React from 'react';

const LeftSide = ({ categories, activeId }) => {
    return (
        <div>
            <h1 className="font-bold text-lg border-b p-2 border-gray-300">All Categories</h1>
            <ul className="flex flex-col gap-3 mt-3 ">
                {categories.news_category.map((category) => (
                    <li
                        className={`${activeId === category.category_id && 'bg-base-300' } 
                             rounded text-center text-xl p-3`}
                        key={category.category_id}
                        
                    >
                        <Link className='block' href={`/category/${category.category_id}`}>{category.category_name}</Link>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default LeftSide;