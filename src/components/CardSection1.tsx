import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useTransform, useScroll, useAnimation } from 'framer-motion';
import CardImage1 from '../assets/cardImage1.png';
import CardImage2 from '../assets/cardImage2.png';
import CardImage3 from '../assets/cardImage3.png';
import CardImage4 from '../assets/cardImage4.png';
import CardGraphic1 from '../assets/cardGraphic1.png';
import CardGraphic2 from '../assets/cardGraphic2.png';
import CardGraphic3 from '../assets/cardGraphic3.png';
import LinkIcon from '../assets/linkIcon.svg';

const CardTabs = ({ activeTab, setActiveTab }: any) => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		if (scrollContainerRef.current && tabRefs.current[activeTab]) {
			const container = scrollContainerRef.current;
			const activeTabElement = tabRefs.current[activeTab];

			const containerWidth = container.clientWidth;
			const tabWidth = activeTabElement.clientWidth;
			const tabLeft = activeTabElement.offsetLeft;

			let scrollLeft = tabLeft - containerWidth / 2 + tabWidth / 2;

			scrollLeft = Math.max(0, Math.min(scrollLeft, container.scrollWidth - containerWidth));

			container.scrollTo({
				left: scrollLeft,
				behavior: 'smooth',
			});
		}
	}, [activeTab]);

	const tabs = ['Trade', 'Swap', 'OPerps', 'Perps'];

	return (
		<div className='pl-4 lg:pl-[120px]'>
			<div
				ref={scrollContainerRef}
				className='flex items-center gap-4 mb-6 overflow-auto'
			>
				{tabs.map((tab, index) => (
					<div
						key={tab}
						ref={(el) => (tabRefs.current[index] = el)}
						className={`flex flex-shrink-0 items-center justify-between w-[200px] py-4 px-6 rounded-2xl text-[#FFFFFF] font-extrabold text-lg border border-[#FFFFFF1A] cursor-pointer ${
							activeTab === index ? 'bg-[#111213]' : 'bg-transparent'
						}`}
						onClick={() => setActiveTab(index)}
					>
						{tab}
						<img src={LinkIcon} alt='' />
					</div>
				))}
			</div>
		</div>
	);
};

const CardSection1 = () => {
	const targetRef = useRef<HTMLDivElement>(null);
	const [activeTab, setActiveTab] = useState(0);
	const controls = useAnimation();

	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ['1%', '-70%']);

	useEffect(() => {
		return () => {
			localStorage.setItem('scrollPosition1', window.scrollY.toString());
		};
	}, []);

	useEffect(() => {
		const savedPosition = localStorage.getItem('scrollPosition1');
		if (savedPosition) {
			window.scrollTo({ top: parseInt(savedPosition), behavior: 'auto' });
		}
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (targetRef.current) {
				const { top, height } = targetRef.current.getBoundingClientRect();
				const scrollPosition = -top + 200;
				const cardHeight = height / 4;
				const newActiveTab = Math.min(
					Math.floor(scrollPosition / cardHeight),
					3
				);
				setActiveTab(newActiveTab);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleTabClick = (index: number) => {
		setActiveTab(index);
		if (targetRef.current) {
			const { top } = targetRef.current.getBoundingClientRect();
			const cardHeight = window.innerHeight;
			const scrollTo = window.scrollY + top + index * cardHeight;
			window.scrollTo({ top: scrollTo, behavior: 'smooth' });
		}
	};

	const cardData = [
		{
			title: 'Kana Trade',
			description: 'Trade Crypto Easy & Fast in Fully On-Chain Orderbook Platform Powered By Aptos',
			buttonText: 'Try Kana Trade',
			buttonLink: 'https://tradebook.kanalabs.io/?market=APT-USDC',
			target: '',
			image: CardImage1,
			bgGraphic: CardGraphic1,
		},
		{
			title: 'Swap',
			description: 'Swaps tokens across 9+ EVM & Non-EVM Chains',
			buttonText: 'Try Swap',
			buttonLink: 'https://app.kanalabs.io/swap',
			target: '',
			image: CardImage2,
			bgGraphic: CardGraphic2,
		},
		{
			title: 'OPerps',
			description: 'Perpetual Options Derivative Token for Trading & Hedging',
			buttonText: 'Try OPerps',
			buttonLink: 'https://operps.kanalabs.io/',
			target: '',
			image: CardImage3,
			bgGraphic: CardGraphic1,
		},
		{
			title: 'Perps',
			description: 'Perpetual futures, limitless opportunities',
			buttonText: 'Try Perps',
			buttonLink: 'https://app.kanalabs.io/perps',
			image: CardImage4,
			bgGraphic: CardGraphic3,
		},
	];

	return (
		<>
			<div className='h-full px-0 -mx-4'>
				<section ref={targetRef} className='relative h-[400vh]'>
					<div className='flex flex-col justify-center sticky top-0 h-screen my-auto overflow-hidden'>
						<CardTabs
							activeTab={activeTab}
							setActiveTab={handleTabClick}
						/>
						<div className='flex items-center overflow-hidden'>
							<motion.div
								animate={controls}
								className='flex gap-4 pl-0 lg:pl-[120px]'
								style={{ x }}
							>
								{cardData.map((card, index) => (
									<div
										key={index}
										className='relative lg:w-[800px] w-[280px] max-h-[430px] flex-shrink-0 overflow-hidden border border-[#F5F7FA0F] rounded-2xl'
										style={{
											background:
												'linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)',
											backdropFilter:
												'blur(108.73126983642578px)',
											boxShadow:
												'0px 4px 4px 0px #090D141F',
										}}
									>
										<div className='h-full'>
											<div className='flex items-center lg:flex-row flex-col lg:p-16 p-4 lg:h-full gap-4'>
												<div className='flex-1 space-y-4 z-[1]'>
													<div className='lg:h-auto h-[54px]'>
														<h1
															className='text-white font-bold lg:text-[28px] text-base lg:mb-2'
															style={{
																fontFamily: 'Urbanist',
															}}
														>
															{card.title}
														</h1>
														<p className='text-[#A5A5A6] font-normal lg:text-xs text-[10px]'>
															{card.description}
														</p>
													</div>
													<Link to={card.buttonLink} target={card.target} className='w-fit border border-[#FFFFFF1A] font-extrabold text-sm py-4 px-6 rounded-2xl lg:block hidden'
														style={{
															background: 'linear-gradient(99.48deg, #7DFFFD -15.26%, #59B9FF 117.67%)',
														}}
													>
														{card.buttonText}
													</Link>
												</div>
												<div className='flex-1 z-[1] h-full w-full'>
													<div className='lg:w-[330px] lg:h-[270px] w-[250px] h-[240px]'>
														<img
															src={card.image}
															alt=''
															className='w-full h-full'
														/>
													</div>
												</div>
												<Link to={card.buttonLink} target={card.target} className='w-full border border-[#FFFFFF1A] font-extrabold text-sm py-4 px-6 rounded-2xl block lg:hidden z-[1] text-center'
													style={{
														background: 'linear-gradient(99.48deg, #7DFFFD -15.26%, #59B9FF 117.67%)',
													}}
												>
													{card.buttonText}
												</Link>
											</div>
											<div className='absolute bottom-0 h-full'>
												<img
													src={card.bgGraphic}
													alt=''
													className='bg-cover h-full'
												/>
											</div>
										</div>
									</div>
								))}
							</motion.div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default CardSection1;
