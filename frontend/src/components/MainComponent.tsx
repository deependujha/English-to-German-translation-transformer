import React from 'react';
import Image from 'next/image';
import TranslatorComponent from './TranslatorComponent';

const MainComponent = () => {
	return (
		<div className="">
			<div className="text-center text-4xl font-bold my-5">
				English to German translator 🇩🇪
			</div>
			<div
				className="flex items-center justify-center"
				style={{ height: '80vh' }}
			>
				<div className="flex justify-around w-screen">
					<Image
						src="/logo.png"
						alt="Next.js Logo"
						width={400}
						height={400}
						className="rounded-3xl"
					/>
					<TranslatorComponent />
				</div>
			</div>
		</div>
	);
};

export default MainComponent;
