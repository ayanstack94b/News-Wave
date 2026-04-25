import Link from 'next/link';
import React from 'react';

const CareerPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center space-y-6 max-w-md">

                <h1 className="text-5xl font-bold text-[#d72050]">
                    Under Construction
                </h1>

                <h2 className="text-lg text-base-content/70">
                    This page is still being built. Check back later.
                </h2>

                <div className="flex justify-center">
                    <Link href="/">
                        <button className="btn border-none text-white bg-[#d72050] hover:bg-[#b91c45]">
                            Go Back Home
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CareerPage;