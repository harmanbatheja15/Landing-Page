import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileLogo from '../../public/logo.svg'
import RocketIcon from '../assets/rocket.svg';

const Navbar = () => {

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const menuItems = [
		{
			title: 'Blog',
			link: 'https://medium.com/kana-labs',
			target: '_blank',
		},
		{
			title: 'Docs',
			link: 'https://docs.kanalabs.io/smart-wallet-sdk/mirai-sdk-the-evm-smart-wallet-and-paymaster',
			target: '_blank',
		},
		{
			title: 'Partners',
			link: '/',
			target: '',
		}
	];

	isMobileMenuOpen ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden');

	return (
		<>
			<div className='h-16 flex items-center justify-between lg:px-12 px-4 py-5 relative bg-black'>
				<div className='hidden md:block'>
					<img
						src='https://app.kanalabs.io/_next/static/media/Kana-Logo.afc11a9c.svg'
						alt=''
					/>
				</div>
				<div className='block md:hidden cursor-pointer' onClick={() => setIsMobileMenuOpen(false)}>
					<img
						src={MobileLogo}
						alt=''
					/>
				</div>
				<div className='flex items-center md:gap-10 gap-4'>
					<div className='md:flex hidden items-center gap-10'>
						{menuItems.map((item, index) => (
							<Link
								key={index}
								to={item.link}
								target={item.target}
								className='text-[#FFFFFFCC] text-sm font-bold'
							>
								{item.title}
							</Link>
						))}
					</div>
					<Link to='https://app.kanalabs.io/' className='flex items-center bg-transparent text-[#2ED3B7] py-2 pr-2 pl-4 text-xs font-extrabold border border-[#2ED3B7] rounded-lg gap-2'>
						Launch App
						<img src={RocketIcon} alt='' />
					</Link>
					<div className='md:hidden cursor-pointer' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2 8H14M2 4H14M6 12H14'
								stroke='#D2D2D2'
								strokeWidth='1.33333'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div className='absolute top-16 left-0 w-full bg-black h-[calc(100%-4rem)] z-50'>
					<div className='flex flex-col items-center justify-center gap-10'>
						{menuItems.map((item, index) => (
							<Link
								to={item.link}
								target={item.target}
								key={index}
								className='text-[#FFFFFFCC] text-sm font-bold'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.title}
							</Link>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
