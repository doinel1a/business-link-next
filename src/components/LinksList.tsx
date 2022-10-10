import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import links from '../config/links';

export default function LinksList() {
	return (
		<ul className='w-full h-full flex flex-col gap-y-5 mt-6'>
			{links.map((link) => (
				<li
					title={link.text}
					tabIndex={0}
					className='relative rounded-full bg-accent-primary transition-all duration-200 hover:bg-accent-primary-state hover:-translate-y-1
                focus:bg-accent-primary-state focus:-translate-y-1'
				>
					<a
						href={link.url}
						target='_blank'
						rel='noopener'
						tabIndex={-1}
						className='w-full h-full flex items-center p-3 rounded-full'
					>
						<FontAwesomeIcon
							icon={link.icon}
							className='w-6 h-6 absolute m-3 text-color-dark'
						/>
						<span className='mx-auto text-color-dark'>
							{link.text}
						</span>
					</a>
				</li>
			))}
		</ul>
	);
}
