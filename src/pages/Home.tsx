import Hero from '../components/Hero';
import CardSection1 from '../components/CardSection1';
import CardSection2 from '../components/CardSection2';
import Ecosystem from '../components/Ecosystem';
import Achievements from '../components/Achievements';
import Featured from '../components/Featured';

const Home = () => {
	return (
		<>
			<main className='bg-black px-4'>
				{/* Hero section */}
				<Hero />

				{/* Cards */}
				<CardSection1 />
				<CardSection2 />

				{/* Ecosystem */}
				<Ecosystem />

				{/* Achievements */}
				<Achievements />

				{/* Featured In */}
				<Featured />
			</main>
		</>
	);
};

export default Home;
