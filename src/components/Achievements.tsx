import AchievementsBG from '../assets/achievementsBG.png';

const Achievements = () => {
	return (
		<>
			<div
				className='xl:w-[1200px] mx-auto py-14 rounded-2xl gap-8 my-28'
				style={{
					backgroundImage: `url(${AchievementsBG})`,
					backgroundSize: 'cover',
				}}
			>
				<p className='text-[#FFFFFF] opacity-50 font-normal text-sm text-center mb-14'>
					Milestone Achievements in Our DeFi Product Suite
				</p>
				<div className='flex lg:flex-row flex-col justify-between'>
					<div className='flex-1 text-center lg:mb-0 mb-8'>
						<div className='text-[#FFFFFF] text-3xl font-extrabold mb-2'>
							2,000,000+
						</div>
						<div className='text-[#A5A5A6] text-sm font-normal'>
							Transactions
						</div>
					</div>
					<div className='w-px bg-[#FFFFFF1A] mx-4'></div>
					<div className='flex-1 text-center lg:my-0 my-8'>
						<div className='text-[#FFFFFF] text-3xl font-extrabold mb-2'>
							$10,000,000,000
						</div>
						<div className='text-[#A5A5A6] text-sm font-normal'>
							in overall trading volume
						</div>
					</div>
					<div className='w-px bg-[#FFFFFF1A] mx-4'></div>
					<div className='flex-1 text-center lg:mt-0 mt-8'>
						<div className='text-[#FFFFFF] text-3xl font-extrabold mb-2'>
							1,100,000+
						</div>
						<div className='text-[#A5A5A6] text-sm font-normal'>
							Active Wallets
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Achievements;
