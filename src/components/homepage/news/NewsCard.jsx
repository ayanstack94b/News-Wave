import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2, CiStar } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const NewsCard = ({ news }) => {
    console.log('news card', news);
    return (
        <div className="card  shadow-sm">
            <div className="card-body">
                {/* Auth info */}
                <div className="flex justify-between items-center bg-slate-200 p-3">
                    <div className="flex gap-3 items-center">
                        <Image
                            className='rounded-full'
                            src={news?.author?.img}
                            height={60}
                            width={60}
                            alt='author' />
                        <div className="">
                            <h2 className="font-semibold">{news.author.name}</h2>
                            <p className="text-xs">{news.author.published_date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <CiShare2></CiShare2>
                        <CiBookmark></CiBookmark>
                    </div>
                </div>
                <h2 className="card-title">{news.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <figure>
                    <Image src={news?.image_url} alt='url' width={800}
                        height={500}
                        className=" object-cover"></Image>
                </figure>
                <p className="line-clamp-3">{news.details}</p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h2 className='flex items-center gap-2'>
                            <IoIosStar className='text-yellow-500'></IoIosStar>
                            {news.rating.number}
                        </h2>
                        <h2 className="flex items-center gap-2">
                            <FaEye></FaEye>
                            {news.total_view}
                        </h2>
                    </div>
                    <div className="">
                        <Link href={`/news/${news.id}`}>
                            <button className='btn btn-success'>See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;