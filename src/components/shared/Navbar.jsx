
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import user from '@/assets/user.png'
import Navlink from './Navlink';
const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center mt-10'>
            <div className=""></div>
            <nav>
                <ul className='text-gray-500 font-bold flex justify-between items-center gap-5'>
                    <li><Navlink href={'/'}>Home</Navlink></li>
                    <li><Navlink href={'/about'}>About</Navlink></li>
                    <li><Navlink href={'/career'}>Career</Navlink></li>
                </ul>
            </nav>
            {/*  */}
            <div className="flex items-center gap-4">
                <Image loading="eager" src={user} width={40} height={40} alt='user icon'></Image>
                <Link href={'/login'} className="rounded px-6 py-2 bg-[#d72050] text-white">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;