'use client';
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import MainComponent from '@/components/MainComponent';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const HomePage = () => {
	return (
		<NextUIProvider>
			<NavBar />
			<hr />
			<MainComponent />
			<Footer />
		</NextUIProvider>
	);
};

export default HomePage;
