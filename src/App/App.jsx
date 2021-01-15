import React, { useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import { Box } from '../components/Box/Box';
import { Navigation_render, Navigation_view } from '../components/Navigation/Navigation';
import { ContextMenue_render } from '../components/ContextMenue/ContextMenue';
import { ModalBox } from '../components/ModalBox/ModalBox';
import { Vudge } from '../API/Vudge';
import { Activity_render, PANPOSITION } from '../components/Activity';
// import { PANPOSITION } from '../components/Activity/ActivityPan/ActivityPan.const';
// import { VTEST } from '../API/Vudge3';

// import { Navigation_render, Navigation_view } from '../components/Navigation/Navigation';

export const App = view(() => {
	const Data = Vudge.STORES.App.findByTitle('Charactere_001');
	console.log(`🚀 | Data`, Data);
	return (
		<ContextMenue_render>
			<ModalBox />
			<Box className='App' Fit Column>
				App - global store
				<Box P={10} Flex className='header' ColorBg='#509050'>
					<Box P={10} className='menueOs' ColorBg='#402020'>
						MenueOs
					</Box>
					<Box P={10} Grow className='title' ColorBg='#306050'>
						Title project
					</Box>
					<Box P={10} className='buttonOs' ColorBg='#111190'>
						ButtonOs
					</Box>
				</Box>
				<Box P={10} className='body' Flex Fit ColorBg='#202020'>
					{/* <ActivityPan POSITIONGROUP='LEFT' /> */}
					<Box Flex P={10} className='left' ColorBg='#509050'>
						<Box P={10} Flex className='Activity' ColorBg='#902090'>
							<Activity_render _PANPOSITION={PANPOSITION.LEFT} />
						</Box>
						<Box P={10} Flex className='Render' OverflowY='scroll' ColorBg='#909090'>
							RenderJsx{/* <Navigations_render /> */}
						</Box>
					</Box>
					<Box P={10} Fit className='center' Grow Column ColorBg='#902020'>
						<Box P={10} className='Navigation' ColorBg='#902090'>
							<Navigation_render />
						</Box>
						<Box Fit P={10} Flex className='render' Grow ColorBg='#556688'>
							<Box P={10} className='render' OverflowX OverflowY Grow ColorBg='#909090'>
								<Navigation_view />
								{/* <Data.Render Data={Data} /> */}
							</Box>
							<Box P={10} Column className='rigth' ColorBg='#509050'>
								<Box P={10} className='Activity' ColorBg='#902090'>
									Auto Activity{/* <Navigations_render /> */}
								</Box>
								<Box P={10} Fit Flex className='Render' OverflowY ColorBg='#909090'>
									RenderJsx{/* <Navigations_render /> */}
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box P={12} className='Footer' ColorBg='#206080'>
					Footer
				</Box>
				{/* {!_modeZen && <Footer />} */}
			</Box>
		</ContextMenue_render>
	);
});
