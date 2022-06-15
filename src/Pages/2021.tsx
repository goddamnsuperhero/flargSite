import React, { useState } from 'react';
import {
	useTransition,
	useSpring,
	useChain,
	config,
	animated,
	useSpringRef
} from '@react-spring/web';
import { Route, Routes, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { id2021 } from '../ids';

import GridDisplay from '../GridDisplay';
export default function Site() {
	const navigate = useNavigate();
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			style={{
				position: 'absolute',
				left: '1rem',
				top: '5rem',
				width: '100%'
			}}>
			<p
				style={{
					position: 'absolute',
					top: '14rem',
					left: '3rem',
					width: '17.5%',
					textAlign: 'left',
					zIndex: 0,
					fontSize: '1.5rem'
				}}>
				This website features websites created individually by year 1 computer
				science students from different year groups
			</p>
			<div className="site">
				<div>
					<h1 style={{ fontSize: '5rem', position: 'absolute', left: '3rem' }}>
						2021
					</h1>
					<div
						onClick={() => navigate('/')}
						className="button"
						style={{
							backgroundColor: 'grey',
							top: '10rem',
							left: '3rem',
							fontSize: '1rem',
							position: 'absolute'
						}}>
						back
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							width: '80%',
							position: 'absolute',
							left: '18%',
							alignContent: 'center'
						}}>
						{id2021.map((x) => (
							<div style={{}}>
								<h1>Group {'ABCDEFG'[id2021.indexOf(x)]}</h1>
								<GridDisplay data={x} />
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
}
