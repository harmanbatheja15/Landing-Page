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

const Ecosystem = () => {
	return (
		<>
			<div className=''>
				<h2 className='text-[#FFFFFF] opacity-50 font-normal text-sm text-center'>
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
		</>
	);
};

export default Ecosystem;
