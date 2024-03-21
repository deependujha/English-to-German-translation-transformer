import React from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from '@nextui-org/react';
import Image from 'next/image';

export default function NavBar() {
	return (
		<Navbar>
			<NavbarBrand>
				<Image src="/translate.png" width="30" height="30" alt="translate" />
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-8" justify="center">
				<NavbarItem>
					<Link
						color="foreground"
						href="https://deependujha.xyz"
						target="_blank"
					>
						{`Creator's WebSite`}
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						Translator
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Model Architecture
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Button
						as={Link}
						color="primary"
						href="https://github.com/deependujha/English-to-German-translation-transformer"
						variant="flat"
						target="_blank"
					>
						GitHub
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
