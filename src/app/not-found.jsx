import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="text-center space-y-6">

                <h1 className="text-7xl font-bold text-primary">404</h1>

                <h2 className="text-2xl font-semibold">
                    Page not found
                </h2>

                <p className="text-base-content/70 max-w-md mx-auto">
                    The page you are looking for does not exist or has been moved.
                </p>

                <div className="flex justify-center gap-4">
                    <Link href="/" className="btn btn-primary">
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="btn bg-[#d72050] text-white px-4 py-1"
                    >
                        Go Back
                    </button>
                </div>

            </div>
        </div>
    );
};

export default NotFound;