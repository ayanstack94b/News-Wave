import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { compareAsc, format } from "date-fns";


const Headers = () => {
    return (
        <div className='text-center py-8 space-y-4'>
            <Image src={logo} alt='logo' className='mx-auto' width={300} height={200}></Image>
            <p className="">Journalism Without Fear or Favour</p>
            <p className="">{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Headers;