import Link from 'next/link';
import React from 'react';

const AboutUsPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  px-4">
            <div className="max-w-2xl text-center space-y-6">

                <h1 className="text-4xl font-bold text-[#d72050]">
                    About This Project
                </h1>

                <p className="text-base-content/80 leading-relaxed">
                    This is a simple news portal built as a practice project using Next.js.
                    The goal is to understand routing, data handling, and UI structuring
                    while building something close to a real-world application.
                </p>

                <p className="text-base-content/70">
                    It features basic news listing, navigation between pages, and clean UI
                    using Tailwind CSS and DaisyUI. This project is part of a learning
                    journey toward becoming a full-stack developer.
                </p>

                <div className="flex justify-center gap-4 pt-4">
                    <Link href="/">
                        <button className="btn border-none text-white bg-[#d72050] hover:bg-[#b91c45]">
                            Go Home
                        </button>
                    </Link>

                    <Link href="/news">
                        <button className="btn btn-outline">
                            View News
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default AboutUsPage;