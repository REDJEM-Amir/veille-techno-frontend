'use client'

import React, { useState } from 'react'
import { CgTrello } from 'react-icons/cg';
import { FiUser } from 'react-icons/fi';
import { IoIosSettings } from 'react-icons/io';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function Board() {
    const [board, setBoard] = useState<boolean>(true);
    return (
        board ? (
            <div className='relative flex flex-col min-w-[260px] w-[260px] h-[calc(100vh-3rem)] opacity-95 border-r border-white/30 bg-[#1e2226] duration-500'>
                <div className='relative flex items-center justify-between gap-2 py-2 px-3 border-b border-[#31383d] pb-[10px]'>
                    <div className='relative flex items-center justify-start gap-2'>
                        <div className='relative flex items-center justify-center rounded-[4px] size-8 text-black font-extrabold bg-gradient-to-r from-[#47c490] to-[#47c4907a] cursor-pointer'>
                            E
                        </div>
                        <div className='relative flex flex-col justify-start items-start text-[#a0aebd] gap-[2px]'>
                            <div className='text-sm font-bold cursor-pointer'>Espace de travail <br /> Trello</div>
                            <div className='text-xs font-light'>Premium</div>
                        </div>
                    </div>
                    <div onClick={() => setBoard(false)} className='relative flex items-center justify-center size-8 aspect-square bg-black/10 rounded-sm hover:bg-white/20 cursor-pointer'>
                        <MdKeyboardArrowLeft className='text-lg text-white' />
                    </div>
                </div>
                <div className='relative flex flex-col pt-3'>
                    <div className='relative flex items-center pl-4 py-[5px] text-[#a0aebd] gap-3 w-full hover:bg-white/15'>
                        <CgTrello className='size-4' />
                        <div className='text-[15px]'>Tableaux</div>
                    </div>
                    <div className='relative flex items-center pl-4 py-[5px] text-[#a0aebd] gap-3 w-full hover:bg-white/15'>
                        <FiUser className='size-4' />
                        <div className='text-[15px]'>Membres</div>
                    </div>
                    <div className='relative flex items-center pl-4 py-[5px] text-[#a0aebd] gap-3 w-full hover:bg-white/15'>
                        <IoIosSettings className='size-4' />
                        <div className='text-[15px]'>Paramètres d'espace de <br/> travail</div>
                    </div>
                </div>
            </div>
        ) : (
            <div className='relative flex flex-col w-[16px] h-[100vh] opacity-95 border-r border-white/30 bg-[#1e2226] duration-300'>
                <div onClick={() => setBoard(true)} className='relative flex items-center justify-center size-[26px] mt-4 ml-[2px] aspect-square bg-[#1d1c21] rounded-full hover:bg-black/50 border border-white/20 cursor-pointer'>
                    <MdKeyboardArrowRight className='text-base text-[#a0aebd]' />
                </div>
            </div>
        )

    )
}
