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

import Menu from './Menu';
import Site from './Pages/2019';
import Site1 from './Pages/2020';
import Site2 from './Pages/2021';
import Site3 from './Pages/2022';
export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Menu />} />
			<Route path="/2019" element={<Site />} />
			<Route path="/2020" element={<Site1 />} />
			<Route path="/2021" element={<Site2 />} />
			<Route path="/2022" element={<Site3 />} />
		</Routes>
	);
}
