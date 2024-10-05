import React, { useRef, useState } from 'react';
import { motion, useTransform, useScroll, useAnimation } from 'framer-motion';
import LinkIcon from '../assets/linkIcon.svg';
import CopyIcon from '../assets/copyIcon.svg';

const CardTabs = ({ activeTab, setActiveTab }: any) => {
	return (
		<div className='pl-0 lg:pl-[120px]'>
			<h1 className='text-[#FFFFFF] font-bold text-[28px] mb-6'>
				For the Devs
			</h1>
			<div className='flex items-center gap-4 mb-6 overflow-auto'>
				{['Mirai SDK', 'Paymaster', 'Kana Widget'].map((tab, index) => (
					<div
						key={tab}
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
	const targetRef = useRef(null);
	const [activeTab, setActiveTab] = useState(0);
	const controls = useAnimation();

	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ['1%', '-60%']);

	React.useEffect(() => {
		controls.start({ x: `${-activeTab * 30}%` });
	}, [activeTab, controls]);

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
			<div className='my-32 h-full'>
				<section ref={targetRef} className='relative h-[300vh]'>
					<div className='flex flex-col justify-center sticky top-0 h-screen my-auto overflow-hidden'>
						<CardTabs
							activeTab={activeTab}
							setActiveTab={setActiveTab}
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
														<h1 className='text-white font-bold lg:text-[28px] text-base lg:mb-2'>
															{card.title}
														</h1>
														<p className='text-[#A5A5A6] font-normal lg:text-xs text-[10px]'>
															{card.description}
														</p>
													</div>
													<button
														className='border border-[#FFFFFF1A] font-extrabold text-sm py-4 px-6 rounded-2xl lg:block hidden'
														style={{
															background:
																'linear-gradient(99.48deg, #7DFFFD -15.26%, #59B9FF 117.67%)',
														}}
													>
														{card.buttonText}
													</button>
												</div>
												<div className='flex-1 bg-[#17181A] p-4 space-y-4 rounded-2xl text-[#D2D2D2] text-base font-normal border border-[#FFFFFF1A]'>
													<div className='bg-[#111213] p-4 border border-[#FFFFFF1A] rounded-2xl'>
														<p className='flex items-start justify-between'>
															<span className='w-[200px]'>
																{card.code1}
															</span>
															<img
																src={CopyIcon}
																alt=''
																className='cursor-pointer'
															/>
														</p>
													</div>
													<p>or</p>
													<div className='bg-[#111213] p-4 border border-[#FFFFFF1A] rounded-2xl'>
														<p className='flex items-start justify-between'>
															<span className='w-[200px]'>
																{card.code2}
															</span>
															<img
																src={CopyIcon}
																alt=''
																className='cursor-pointer'
															/>
														</p>
													</div>
												</div>
												<button
													className='w-full border border-[#FFFFFF1A] font-extrabold text-sm py-4 px-6 rounded-2xl block lg:hidden'
													style={{
														background:
															'linear-gradient(99.48deg, #7DFFFD -15.26%, #59B9FF 117.67%)',
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
