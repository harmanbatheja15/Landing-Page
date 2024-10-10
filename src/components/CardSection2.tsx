import { useState, useEffect, useRef } from 'react';
import { motion, useTransform, useScroll, useAnimation } from 'framer-motion';
import LinkIcon from '../assets/linkIcon.svg';
import CopyIcon from '../assets/copyIcon.svg';

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

	const tabs = ['Mirai SDK', 'Paymaster', 'Kana Widget'];

	return (
		<div className='pl-0 lg:pl-[120px]'>
			<h1 className='text-[#FFFFFF] font-bold text-[28px] mb-6' style={{
				fontFamily: 'Urbanist',
			}}>
				For the Devs
			</h1>
			<div
				ref={scrollContainerRef}
				className='flex items-center gap-4 mb-6 overflow-auto'
			>
				{tabs.map((tab, index) => (
					<div
						key={tab}
						ref={(el) => (tabRefs.current[index] = el)}
						className={`flex flex-shrink-0 items-center justify-between w-[200px] py-4 px-6 rounded-2xl text-[#FFFFFF] font-extrabold text-lg border border-[#FFFFFF1A] cursor-pointer ${
							activeTab === index
								? 'bg-[#111213]'
								: 'bg-transparent'
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

const CardSection2 = () => {
	const targetRef = useRef<HTMLDivElement>(null);
	const [activeTab, setActiveTab] = useState(0);
	const [showTooltipIndex, setShowTooltipIndex] = useState<number | null>(null);
	const [copiedCode, setCopiedCode] = useState('');
	const controls = useAnimation();

	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ['1%', '-60%']);

	useEffect(() => {
        return () => {
            localStorage.setItem('scrollPosition2', window.scrollY.toString());
        };
    }, []);

	useEffect(() => {
        const savedPosition = localStorage.getItem('scrollPosition2');
        if (savedPosition) {
            window.scrollTo({ top: parseInt(savedPosition), behavior: 'auto' });
        }
    }, []);

	useEffect(() => {
		const handleScroll = () => {
			if (targetRef.current) {
				const { top, height } = targetRef.current.getBoundingClientRect();
				const scrollPosition = -top + 200;
				const cardHeight = height / 3;
				const newActiveTab = Math.min(
					Math.floor(scrollPosition / cardHeight),
					2
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

	const copyToClipboard = (text: string, index: number) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				setShowTooltipIndex(index);
				setCopiedCode(text);
				setTimeout(() => setShowTooltipIndex(null), 2000);
			})
			.catch(() => {
				setShowTooltipIndex(null);
			});
	};

	const cardData = [
		{
			title: 'Mirai Smart Wallet',
			description: 'Navigate Like Web2 with EIP-4337 Crypto Wallet',
			buttonText: 'Read SDK Docs',
			code1: 'npm install @kanalabs/mirai-sdk',
			code2: 'yarn add @kanalabs/mirai-sdk',
		},
		{
			title: 'Aptos Gas Station',
			description: 'AIP-39 Based Gas Station To Sponsor Gas on Web3 dApps',
			buttonText: 'Read SDK Docs',
			code1: 'npm install @kanalabs/paymaster-sdk',
			code2: 'yarn add @kanalabs/paymaster-sdk',
		},
		{
			title: 'Kana Widget',
			description: '"Plug N Play" Plugin for Instant Cross-Chain Connectivity',
			buttonText: 'Read Documentation',
			code1: 'npm install @kanalabs/paymaster-sdk',
			code2: 'yarn add @kanalabs/paymaster-sdk',
		},
	];

	return (
		<>
			<div className='mb-32 h-full'>
				<section ref={targetRef} className='relative h-[300vh]'>
					<div className='flex flex-col justify-center sticky top-0 h-screen my-auto overflow-hidden'>
						<CardTabs
							activeTab={activeTab}
							setActiveTab={handleTabClick}
						/>
						<div className='flex items-start justify-start overflow-hidden'>
							<motion.div
								animate={controls}
								className='flex gap-4 pl-0 lg:pl-[120px]'
								style={{ x }}
							>
								{cardData.map((card, index) => (
									<div
										key={index}
										className='relative lg:w-[800px] w-auto min-h-[400px] flex-shrink-0 overflow-hidden border border-[#F5F7FA0F] rounded-2xl'
										style={{
											background: 'linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.0001) 100%)',
											backdropFilter: 'blur(108.73126983642578px)',
											boxShadow: '0px 4px 4px 0px #090D141F',
										}}
									>
										<div className='h-full'>
											<div className='flex items-center lg:flex-row flex-col lg:p-16 p-4 lg:h-full gap-4'>
												<div className='flex-1 space-y-4 z-[1]'>
													<div>
														<h1
															className='text-white font-bold lg:text-[28px] text-base lg:mb-2'
															style={{
																fontFamily: 'Urbanist',
															}
														}>
															{card.title}
														</h1>
														<p className='text-[#A5A5A6] font-normal lg:text-xs text-[10px]'>
															{card.description}
														</p>
													</div>
													<button
														className='border border-[#FFFFFF1A] font-extrabold text-sm py-4 px-6 rounded-2xl lg:block hidden'
														style={{
															background: 'linear-gradient(99.48deg, #7DFFFD -15.26%, #59B9FF 117.67%)',
														}}
													>
														{card.buttonText}
													</button>
												</div>
												<div className='flex-1 bg-[#17181A] p-4 space-y-4 rounded-2xl text-[#D2D2D2] text-base font-normal border border-[#FFFFFF1A]'>
													<div className='bg-[#111213] p-4 border border-[#FFFFFF1A] rounded-2xl'>
														<p className='relative flex items-start justify-between'>
															<span className='w-[200px]'>
																{card.code1}
															</span>
															<img
																src={CopyIcon}
																alt=''
																title='Copy to Clipboard'
																onClick={() =>
																	copyToClipboard(
																		card.code1,
																		index
																	)
																}
																className='cursor-pointer'
															/>
															{showTooltipIndex ===
																index &&
																copiedCode ===
																	card.code1 && (
																	<div className='absolute -top-10 -right-6 bg-gray-800 text-white text-sm rounded py-1 px-2'>
																		Copied!
																	</div>
																)}
														</p>
													</div>
													<p>or</p>
													<div className='bg-[#111213] p-4 border border-[#FFFFFF1A] rounded-2xl'>
														<p className='relative flex items-start justify-between'>
															<span className='w-[200px]'>
																{card.code2}
															</span>
															<img
																src={CopyIcon}
																alt=''
																title='Copy to Clipboard'
																onClick={() =>
																	copyToClipboard(
																		card.code2,
																		index
																	)
																}
																className='cursor-pointer'
															/>
															{showTooltipIndex ===
																index &&
																copiedCode ===
																	card.code2 && (
																	<div className='absolute -top-10 -right-6 bg-gray-800 text-white text-sm rounded py-1 px-2'>
																		Copied!
																	</div>
																)}
														</p>
													</div>
												</div>
												<button
													className='w-full border border-[#FFFFFF1A] font-extrabold text-sm py-4 px-6 rounded-2xl block lg:hidden'
													style={{
														background: 'linear-gradient(99.48deg, #7DFFFD -15.26%, #59B9FF 117.67%)',
													}}
												>
													{card.buttonText}
												</button>
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

export default CardSection2;
