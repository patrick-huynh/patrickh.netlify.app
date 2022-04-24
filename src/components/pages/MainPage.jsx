import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import Spline from "@splinetool/react-spline";
import '../../styles/MainPage.scss';


/**
 * MainPage functional component
 * @returns {JSX} component
 */
export const MainPage = () => {
	const textRef = useRef();
	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			typeSpeed: 60,
			backDelay: 1500,
			backSpeed: 60,
			strings: ['Full Stack Software Developer', 'Student at University of Waterloo', 'Studying Mathematics']
		});
	}, []);

	return (
		<div className="landing">
			<div className="left">
				<div className="info-wrapper">
					<h1 className="name">Patrick Huynh</h1>
					<h3 className="typing-text-wrapper">
						<span ref={textRef} className="typing-text"></span>
					</h3>
				</div>
			</div>
			<div className="right">
				<div className="spline-wrapper">
					<Spline
						style={{ width: "100%", marginLeft: "-200px" }}
						scene="https://draft.spline.design/0Tl-4VvxDgZCWPKi/scene.spline"
					/>
				</div>
			</div>
		</div>
	)
};
