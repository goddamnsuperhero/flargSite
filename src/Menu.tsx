import React, { Children, useState } from 'react';
import {
	useTransition,
	useSpring,
	useChain,
	config,
	animated,
	useSpringRef
} from '@react-spring/web';
import { useNavigate } from 'react-router';
import data from './data';
import styles from './styles.module.css';
import { motion } from 'framer-motion';

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Menu() {
	const [open, set] = useState(true);
	const navigate = useNavigate();
	const springApi = useSpringRef();
	const { size, ...rest } = useSpring({
		ref: springApi,
		config: config.stiff,
		from: { size: '20%', background: 'white' },
		to: {
			size: open ? '100%' : '20%',
			background: open ? 'white' : 'white'
		}
	});

	const transApi = useSpringRef();
	const transition = useTransition(open ? data : [], {
		ref: transApi,
		trail: 400 / data.length,
		from: { opacity: 0, scale: 0 },
		enter: { opacity: 1, scale: 1 },
		leave: { opacity: 0, scale: 0 }
	});
	let vis = true;
	useChain(open ? [springApi, transApi] : [transApi, springApi], [
		0,
		open ? 0.1 : 0.6
	]);
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: '-100%' }
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			variants={variants}
			className={styles.wrapper}>
			<h1
				style={{
					position: 'absolute',
					top: '2rem',
					color: 'white',
					fontSize: '10rem'
				}}>
				WQE Students
			</h1>
			<p style={{ position: 'absolute', top: '20rem', zIndex: 1 }}>
				Click Below
			</p>
			<animated.div
				style={{
					...rest,
					width: size,
					height: size,
					color: 'black',
					zIndex: 1
				}}
				className={styles.container}
				onClick={() => {
					set((open) => !open);
				}}>
				<p
					style={{
						position: 'absolute',
						top: '-0.75rem',
						left: '45%',
						textAlign: 'end',
						fontSize: '1rem'
					}}>
					Select Student Year
				</p>
				{transition((style, item) => (
					<animated.div
						onClick={() => {
							setTimeout(() => {
								vis = !vis;
								navigate(item.name);
							}, 900);
							set((open) => true);
						}}
						className={styles.item}
						style={{ ...style, background: item.css }}>
						<h1 style={{ fontSize: '10rem' }}>{item.name}</h1>
					</animated.div>
				))}
			</animated.div>
		</motion.div>
	);
}
