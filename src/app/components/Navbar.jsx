'use client'

import Image from 'next/image'
import React from 'react'
import logo from '../../../public/home/Virtual Garden Shapes.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const path = usePathname();
  const [bgColor, setBgColor] = React.useState('');
  const [color, setColor] = React.useState('');
  const [border, setBorder] = React.useState('');

  React.useEffect(() => {
    switch (path) {
      case '/': 
        setBgColor('#1E3E2A');
        setColor('white');
        setBorder('0.6px solid #FFFFFF');
        break;
      default:
        setBgColor('white');
        setColor('#000000');
        setBorder('0.6px solid #1E3E2A');
        break;
    }
  }, [path]);

  return (
    <nav style={{ backgroundColor: bgColor }} className='px-[80px] py-[20px] h-[88px] sticky top-0 w-full z-50 border-b-[.3px] border-b-[#445c4d]'>
      <div className='max-w-[1280px] mx-auto flex justify-between items-center gap-6'>
        <Link href={`/`} className='flex justify-center items-center gap-[8px]'>
          <Image width={32} height={32} className='object-cover' src={logo} alt='Virtual Garden Logo' />
          <h1 style={{ color: color }} className='text-[2rem] font-medium sofiaProM leading-[35.2px]'>Virtual Garden</h1>
        </Link>
        <ul className='hidden lg:flex justify-between items-center gap-10'>
          <li style={{ color: color }} className='font-light sofiaProL text-[1rem] leading-[25.6px]'>How it works</li>
          <li style={{ color: color }} className='font-light sofiaProL text-[1rem] leading-[25.6px]'>About us</li>
          <li style={{ color: color }} className='font-light sofiaProL text-[1rem] leading-[25.6px]'>Our Services</li>
        </ul>
        <Link href={`/contact-us`} style={{ color: color, border: border }} className='hidden bg-transparent lg:flex justify-center items-center h-[48px] w-[167px] font-normal sofiaProR text-[.875rem] leading-[22.4px] py-[13px] px-[48px] rounded-full'>Contact us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
