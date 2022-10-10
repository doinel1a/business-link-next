import MetaHead from '../components/MetaHead';
import Header from '../components/Header';

export default function Home() {
	return (
		<>
			<MetaHead />

			<main className='w-full max-w-2xl min-h-screen flex flex-col justify-center items-center mx-auto p-8'>
				<Header />
			</main>
		</>
	);
}
