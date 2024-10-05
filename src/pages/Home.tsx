import HeroImage from '../assets/hero.png';
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo3 from '../assets/logo3.png';
import Logo4 from '../assets/logo4.png';
import Logo5 from '../assets/logo5.png';
import Logo6 from '../assets/logo6.png';
import Logo7 from '../assets/logo7.png';
import Logo8 from '../assets/logo8.png';
import Logo9 from '../assets/logo9.png';
import Logo10 from '../assets/logo10.png';
import Logo11 from '../assets/logo11.png';
import Logo12 from '../assets/logo12.png';
import Feature1 from '../assets/feature1.png';
import Feature2 from '../assets/feature2.png';
import Feature3 from '../assets/feature3.png';
import Feature4 from '../assets/feature4.png';
import Feature5 from '../assets/feature5.png';
import CardSection1 from '../components/CardSection1';
import CardSection2 from '../components/CardSection2';
import AchievementsBG from '../assets/achievementsBG.png';
import VectorLine from '../assets/vectorLine.svg';

const Home = () => {
	return (
		<>
			<main className='bg-black px-4'>
				{/* Hero section */}
				<div className='pt-20'>
					<div className='flex flex-col-reverse md:flex-row items-center justify-between'>
						<h1
							className='text-[48px] xl:text-[84px] font-bold text-[#67FFD1] mx-auto mt-auto mb-32 text-transparent bg-clip-text xl:leading-[100px] leading-[57px]'
							style={{
								backgroundImage:
									'linear-gradient(93.41deg, #67FFD1 -12.19%, #4F9DFF 110.84%)',
							}}
						>
							Web3
							<br />
							for everyone
						</h1>
						<img
							src={HeroImage}
							alt=''
							className='w-[400px] xl:w-[780px]'
						/>
					</div>
					{/* <p className='flex items-center justify-center text-center text-sm text-[#777879] font-bold pb-9'>
						<span className="pr-1">Scroll</span>
						<svg
							width='16'
							height='16'
							viewBox='0 0 12 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M6.00016 1.33301V10.6663M6.00016 10.6663L10.6668 5.99967M6.00016 10.6663L1.3335 5.99967'
								stroke='#777879'
								strokeWidth='1.33333'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</p> */}
				</div>

				{/* Cards */}
				<CardSection1 />
				<CardSection2 />

				{/* Ecosystem */}
				<div className=''>
					<h2 className='text-white font-semibold text-[26px] text-center'>
						Ecosystem
					</h2>
					<div className='xl:w-[1200px] flex lg:flex-col flex-row items-center justify-center mx-auto mt-8'>
						<div className='flex lg:flex-row flex-col items-center justify-center'>
							<div className=''>
								<img src={Logo1} alt='Jump' />
							</div>
							<div className=''>
								<img src={Logo2} alt='MarbleX' />
							</div>
							<div className=''>
								<img src={Logo3} alt='Xpla' />
							</div>
							<div className=''>
								<img src={Logo4} alt='OpenBlox' />
							</div>
							<div className=''>
								<img src={Logo5} alt='TomNToms' />
							</div>
							<div className=''>
								<img src={Logo6} alt='Econia' />
							</div>
						</div>
						<div className='flex lg:flex-row flex-col items-center justify-center'>
							<div className=''>
								<img src={Logo7} alt='EthosX' />
							</div>
							<div className=''>
								<img src={Logo8} alt='MerkleTrade' />
							</div>
							<div className=''>
								<img src={Logo9} alt='Aptos' />
							</div>
							<div className=''>
								<img src={Logo10} alt='Bifrost' />
							</div>
							<div className=''>
								<img src={Logo11} alt='Klaytn' />
							</div>
							<div className=''>
								<img src={Logo12} alt='Burrito' />
							</div>
						</div>
					</div>
				</div>

				{/* Achievements */}
				<div
					className='xl:w-[1200px] mx-auto py-14 rounded-2xl gap-8 my-28'
					style={{
						backgroundImage: `url(${AchievementsBG})`,
						backgroundSize: 'cover',
					}}
				>
					<p className='text-[#FFFFFF] opacity-50 font-normal text-sm text-center mb-14'>Milestone Achievements in Our DeFi Product Suite</p>
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
							<div className='text-[#A5A5A6] text-sm font-normal'>Active Wallets</div>
						</div>
					</div>
				</div>

				{/* Featured In */}
				<div className='pb-36'>
					<h2 className='text-[#FFFFFF] font-normal text-sm text-center'>
						As featured in
					</h2>
					<div className='mx-auto mt-8'>
						<div className='flex items-center justify-center flex-wrap gap-9'>
							<div className='flex flex-col items-center justify-center xl:min-w-[240px] xl:min-h-[100px] border border-[#F5F7FA0F] px-6 py-4 rounded-2xl'>
								<img
									src={Feature1}
									alt=''
									width='100px'
									className='pb-2'
								/>
								<img src={VectorLine} alt="" />
								<p className='text-[#FFFFFF99] text-xs font-normal pt-2'>
									<span className='font-bold'>MARBLEX</span>{' '}
									invests in Kana Labs...
								</p>
							</div>
							<div className='flex flex-col items-center justify-center xl:min-w-[240px] xl:min-h-[100px] border border-[#F5F7FA0F] px-6 py-4 rounded-2xl'>
								<img
									src={Feature2}
									alt=''
									width='100px'
									className='pb-2'
								/>
								<img src={VectorLine} alt="" />
								<p className='text-[#FFFFFF99] text-xs font-normal pt-2'>
									<span className='font-bold'>MARBLEX</span>{' '}
									invests in Kana Labs...
								</p>
							</div>
							<div className='flex flex-col items-center justify-center xl:min-w-[240px] xl:min-h-[100px] border border-[#F5F7FA0F] px-6 py-4 rounded-2xl'>
								<img
									src={Feature3}
									alt=''
									width='100px'
									className='pb-2'
								/>
								<img src={VectorLine} alt="" />
								<p className='text-[#FFFFFF99] text-xs font-normal pt-2'>
									<span className=''>MARBLEX</span> invests in
									Kana Labs...
								</p>
							</div>
							<div className='flex flex-col items-center justify-center xl:min-w-[240px] xl:min-h-[100px] border border-[#F5F7FA0F] px-6 py-4 rounded-2xl'>
								<img
									src={Feature4}
									alt=''
									width='100px'
									className='pb-2'
								/>
								<img src={VectorLine} alt="" />
								<p className='text-[#FFFFFF99] text-xs font-normal pt-2'>
									<span className=''>MARBLEX</span> invests in
									Kana Labs...
								</p>
							</div>
							<div className='flex flex-col items-center justify-center xl:min-w-[240px] xl:min-h-[100px] border border-[#F5F7FA0F] px-6 py-4 rounded-2xl'>
								<img
									src={Feature5}
									alt=''
									width='100px'
									className='pb-2'
								/>
								<img src={VectorLine} alt="" />
								<p className='text-[#FFFFFF99] text-xs font-normal pt-2'>
									<span className='font-bold'>MARBLEX</span>{' '}
									invests in Kana Labs...
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
