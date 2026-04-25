import Headers from '@/components/shared/Headers';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <Headers></Headers>
            <Navbar></Navbar>
            {children}
        </>
    );
};

export default MainLayout;