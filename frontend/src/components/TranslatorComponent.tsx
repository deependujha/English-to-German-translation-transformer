'use client';
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { Textarea } from '@nextui-org/react';
import Image from 'next/image';
import { HeartIcon } from './HeartIcon';
import LoadingButton from './LoadingButton';
import axios from 'axios';

// ----- toast -----
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TranslatorComponent = () => {
	const [mySentence, setMySentence] = useState('');
	const [myTranslation, setMyTranslation] = useState('');
	const [loading, setLoading] = useState(false);

	const handleTranslate = async () => {
		setLoading(true);
		try {
			// console.log(`Sentence: ${mySentence}`);
			const response = await axios.post('/api', {
				sentence: mySentence,
			});
			console.log(response.data);
			setMyTranslation(response.data.translated_hindi_sentence);
		} catch (err) {
			console.log(err);
			setMyTranslation('');
			toast.error('Error translating sentence');
		} finally {
			setLoading(false);
		}
	};
	return (
		<>
			<div
				className="flex flex-col items-center justify-center"
				style={{ width: '500px', height: '400px' }}
			>
				<Textarea
					label="Your sentence (max 100 characters)"
					placeholder="Enter sentence to be translated"
					className="max-w-lg my-4"
					value={mySentence}
					onChange={(e) => {
						loading === false && setMySentence(e.target.value);
					}}
					maxLength={100}
				/>
				{loading ? (
					<LoadingButton />
				) : (
					<Button
						color="secondary"
						endContent={<HeartIcon fill="red" />}
						onClick={handleTranslate}
					>
						translate english to hindi
					</Button>
				)}

				<Textarea
					label="Hindi translation"
					className="max-w-lg my-4"
					value={myTranslation}
					onChange={(e) => {}}
					maxLength={100}
					disabled={true}
				/>
			</div>
			<ToastContainer />
		</>
	);
};

export default TranslatorComponent;
