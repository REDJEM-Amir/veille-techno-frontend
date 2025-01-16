import React from 'react'
import { BsStars } from 'react-icons/bs'
import { CgMenuGridO } from 'react-icons/cg'
import { FaTrello } from 'react-icons/fa'
import { FiBell, FiHelpCircle } from 'react-icons/fi'
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'

export default function Sidebar() {
    return (
        <div className='relative flex items-center justify-between h-12 bg-[#1e2226] text-[#a0aebd] p-2 border-b border-[#31383d]'>
            <div className='relative flex items-center h-full'>
                <div className='relative flex items-center justify-center h-full hover:bg-white/20 hover:duration-300 duration-200 cursor-pointer px-2 rounded-sm aspect-square'>
                    <CgMenuGridO className='size-5' />
                </div>
                <div className='relative flex justify-center items-center h-full gap-1 hover:bg-white/20 hover:duration-300 duration-200 cursor-pointer px-2 rounded-sm'>
                    <FaTrello className=' size-4' />
                    <div className='text-xl font-bold'>Trello</div>
                </div>
                <div className='relative flex items-center h-full gap-2 ml-2'>
                    <div className='relative flex h-full justify-center items-center gap-2 hover:bg-white/20 hover:duration-300 duration-200 cursor-pointer px-2 rounded-sm'>
                        <div className='text-sm font-medium'>Espaces de travail</div>
                        <IoIosArrowDown />
                    </div>
                    <div className='relative flex h-full justify-center items-center gap-2 hover:bg-white/20 hover:duration-300 duration-200 cursor-pointer px-2 rounded-sm'>
                        <div className='text-sm font-medium'>Récent</div>
                        <IoIosArrowDown />
                    </div>
                    <div className='relative flex h-full justify-center items-center gap-2 hover:bg-white/20 hover:duration-300 duration-200 cursor-pointer px-2 rounded-sm'>
                        <div className='text-sm font-medium'>Favoris</div>
                        <IoIosArrowDown />
                    </div>
                    <div className='relative flex h-full justify-center items-center gap-2 hover:bg-white/20 hover:duration-300 duration-200 cursor-pointer px-2 rounded-sm'>
                        <div className='text-sm font-medium'>Modèles</div>
                        <IoIosArrowDown />
                    </div>
                    <div className='relative flex h-full justify-center items-center bg-[#579dff] text-black ml-1 px-3 hover:brightness-125 hover:duration-300 duration-200 cursor-pointer rounded-sm'>
                        <div className='text-sm font-medium'>Créer</div>
                    </div>
                </div>
            </div>
            <div className='relative flex items-center h-full gap-1'>
                <div className='relative flex items-center justify-center text-black gap-1 bg-gradient-to-r from-[#a090f0] to-[#5d9afc] px-4 hover:brightness-125 cursor-pointer rounded-sm h-full'>
                    <BsStars />
                    <div className='text-sm'>Il reste 14 jours</div>
                </div>
                <div className='relative flex items-center justify-start border border-white/50 h-full w-52 px-2 gap-2 rounded-sm bg-transparent'>
                    <IoSearchOutline className='text-white/80 size-4'/>
                    <input type="text" placeholder='Rechercher' className='relative flex text-sm h-full w-full text-white/50 bg-transparent border-none'/>
                </div>
                <div className='relative flex items-center justify-center h-full aspect-square hover:bg-white/20 hover:duration-300 duration-200 cursor-pointer rounded-full'>
                    <FiBell className='size-[18px]'/>
                </div>
                <div className='relative flex items-center justify-center h-full aspect-square hover:bg-white/20 hover:duration-300 duration-200 cursor-pointer rounded-full'>
                    <FiHelpCircle className='size-[18px]'/>
                </div>
            </div>
        </div>
    )
}
