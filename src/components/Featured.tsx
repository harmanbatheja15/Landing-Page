import Feature1 from '../assets/feature1.png';
import Feature2 from '../assets/feature2.png';
import Feature3 from '../assets/feature3.png';
import Feature4 from '../assets/feature4.png';
import Feature5 from '../assets/feature5.png';
import VectorLine from '../assets/vectorLine.svg';

const Featured = () => {
	return (
		<>
			<div className='pb-36'>
				<h2 className='text-[#FFFFFF] opacity-50 font-normal text-sm text-center'>
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
							<img src={VectorLine} alt='' />
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
							<img src={VectorLine} alt='' />
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
							<img src={VectorLine} alt='' />
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
							<img src={VectorLine} alt='' />
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
							<img src={VectorLine} alt='' />
							<p className='text-[#FFFFFF99] text-xs font-normal pt-2'>
								<span className='font-bold'>MARBLEX</span>{' '}
								invests in Kana Labs...
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Featured;
