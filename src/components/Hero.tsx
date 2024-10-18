import { useState, useEffect, useRef } from 'react';
// import HeroImage from '../assets/hero.png';
import { Application } from '@splinetool/runtime';

const Hero = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [isInteracting, setIsInteracting] = useState(false);

	useEffect(() => {
		if (canvasRef.current) {
			const app = new Application(canvasRef.current);
			app.load(
				'https://prod.spline.design/mmljgJGLwahLRfER/scene.splinecode'
			);
		}
	}, []);

	const handleMouseDown = () => {
		setIsInteracting(true);
	};

	const handleMouseUp = () => {
		setIsInteracting(false);
	};

	useEffect(() => {
		document.addEventListener('mouseup', handleMouseUp);
		return () => {
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, []);

	return (
		<>
			<div className=''>
				<div className='flex flex-col-reverse md:flex-row items-center justify-between'>
					<h1
						className='text-[48px] xl:text-[84px] font-bold text-[#67FFD1] mx-auto md:mt-auto md:mb-32 text-transparent bg-clip-text xl:leading-[100px] leading-[57px]'
						style={{
							backgroundImage: 'linear-gradient(93.41deg, #67FFD1 -12.19%, #4F9DFF 110.84%)',
							fontFamily: 'Urbanist',
						}}
					>
						Web3
						<br />
						for everyone
					</h1>
					{/* <img
						src={HeroImage}
						alt=''
						className='w-[400px] xl:w-[780px]'
					/> */}
					<div className='relative md:w-[60%] lg:w-[50%] w-full h-[70vh] md:h-screen max-w-screen overflow-hidden'>
						<canvas
							ref={canvasRef}
							id='canvas3d'
							onMouseDown={handleMouseDown}
							className={`w-full h-full absolute top-0 ${
								isInteracting
									? 'pointer-events-auto'
									: 'pointer-events-none overflow-hidden'
							}`}
						/>
					</div>
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
		</>
	);
};

export default Hero;
