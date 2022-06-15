import React from 'react';
import { useNavigate } from 'react-router';

function sliceIntoChunks(arr, chunkSize) {
	const res = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
		const chunk = arr.slice(i, i + chunkSize);
		res.push(chunk);
	}
	return res;
}
function UniversalAnchor({ path }) {
	return <a className="button" href={path} />;
}
export default function GridDisplay(props) {
	const navigate = useNavigate();
	return (
		<div>
			<div className="Grid">
				{sliceIntoChunks(props.data, 2).map((x) => (
					<div className="">
						{x.map((y) => (
							<div
								className="button"
								onClick={() =>
									(window.location =
										window.location.origin + '/' + y + '/index.html')
								}>
								{y}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
