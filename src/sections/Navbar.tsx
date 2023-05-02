import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Button from '@/components/Button';

const Navbar = () => {
  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];
  return (
    <nav>
        <div className="wrapper">
            <div className="brand">
                <Link href="">
                  <Image src={require('./../../public/moin-bitmoji.png')} alt='' className='bitmoji'/>
                </Link>
            </div>
            <div className="nav-items">
              <ul className="nav-items-list">
                {
                  sectionLinks.map(({name, link}) => (
                    <li key={name} className='nav-items-list-item'>
                      <Link href={link} className='nav-items-list-item-link' >{name}</Link>
                    </li>
                  ))
                }
              </ul>
              <div className="nav-items-button">
                <Button text="Resume" link=""/>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar