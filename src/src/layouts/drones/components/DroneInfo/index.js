import React, { useEffect } from 'react';

import { Card } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import colors from 'assets/theme/base/colors';
import linearGradient from 'assets/theme/functions/linearGradient';
import CircularProgress from '@mui/material/CircularProgress';
import DroneImage from '../image/droneImage.png';
import VuiBadge from "components/VuiBadge";

// React Icons
import { FaBatteryFull, FaBatteryThreeQuarters, FaBatteryHalf, FaBatteryQuarter, FaBatteryEmpty } from "react-icons/fa6";
import { MdWifi, MdWifi2Bar, MdWifi1Bar, MdSignalWifiStatusbarNull } from "react-icons/md"; // MdWifi = lleno, el númro después de MdWifi representa el número de barras
import { BiSignal5, BiSignal4, BiSignal3, BiSignal2, BiSignal1, BiNoSignal } from "react-icons/bi";
import { UserContext } from "context/UserContext";
import { useContext } from "react";

const DroneInfo = ({ height }) => {
	const { infoDrone } = useContext( UserContext );
	
	
	const { gradients } = colors;
	const { cardContent } = gradients;
	return (
		<Card sx={{ height: {height}, display:"flex"}}>
			<VuiBox display='flex' flexDirection='column'>
				<VuiTypography variant='lg' color='white' fontWeight='bold' mb='4px'>
					Drone Information
				</VuiTypography>
				<VuiBox sx={{ display: "flex", justifyContent: "space-between"}}>
					{ infoDrone.status && 
					<VuiBadge
						variant="standard"
						badgeContent="Online"
						color="success"
						size="xs"
						container
						sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
							background: success.main,
							border: `${borderWidth[1]} solid ${success.main}`,
							borderRadius: borderRadius.md,
							color: white.main,
						})}
						
					/>
					}
					{ !infoDrone.status &&
					<VuiBadge
						variant="standard"
						badgeContent="Offline"
						color="error"
						size="xs"
						container
						sx={({ palette: { white, error }, borders: { borderRadius, borderWidth } }) => ({
							background: error.main,
							border: `${borderWidth[1]} solid ${error.main}`,
							borderRadius: borderRadius.md,
							color: white.main,
						})}
					/>
					}
					<VuiBox sx={{padding: "0px 10px"}}>
						<BiSignal5 color='white' style={{marginRight: "10px"}} />
						<MdWifi color='white' style={{marginRight: "10px"}} />
						{batteryRange(infoDrone.battery)}
					</VuiBox>
					
				</VuiBox>
				<VuiBox sx={{ alignSelf: 'center', justifySelf: 'center', zIndex: '-1' }}>
					<VuiBox sx={{ position: 'relative', display: 'inline-flex' }}>
					
						
						<CircularProgress variant='determinate' value={87} size={170} color='info' />
						<VuiBox
							sx={{
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
								position: 'absolute',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
							<VuiBox
								sx={{
									transform: 'translateY(-50%)',
									width: '50px',
									height: '50px',
									borderRadius: '50%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}>
								<img src={DroneImage} alt="imagenDrone" 
									style={{
										height: "200%"
									}}
								/>
							</VuiBox>
						</VuiBox>
					</VuiBox>
				</VuiBox>
				<VuiBox
					sx={({ breakpoints }) => ({
						width: '90%',
						padding: '18px 22px',
						display: 'flex',
						justifyContent: 'space-between',
						flexDirection: 'row',
						height: '82px',
						mx: 'auto',
						borderRadius: '20px',
						background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
						transform: 'translateY(-90%)',
						zIndex: '1000'
					})}>
					<VuiTypography color='text' variant='caption' display='inline-block' fontWeight='regular'>
						0%
					</VuiTypography>
					<VuiBox
						flexDirection='column'
						display='flex'
						justifyContent='center'
						alignItems='center'
						sx={{ minWidth: '80px' }}>
						<VuiTypography color='success' variant='h3'>
							{ infoDrone.speed }KM/H
						</VuiTypography>
						<VuiTypography color='white' variant='caption' fontWeight='regular'>
							ESP23-8888-001
						</VuiTypography>
					</VuiBox>
					<VuiTypography color='text' variant='caption' display='inline-block' fontWeight='regular'>
						100%
					</VuiTypography>
				</VuiBox>
			</VuiBox>
		</Card>
	);
};

export default DroneInfo;


function batteryRange(battery) {
	switch (true) {
		case battery >= 0 && battery <= 10:
			return <FaBatteryEmpty color='white' style={{marginRight: "10px"}} />;
		case battery > 10 && battery <= 25:
			return <FaBatteryQuarter color='white' style={{marginRight: "10px"}} />;
		case battery > 25 && battery <= 50:
			return <FaBatteryHalf color='white' style={{marginRight: "10px"}} />;
		case battery > 50 && battery <= 75:
			return <FaBatteryThreeQuarters color='white' style={{marginRight: "10px"}} />;
		case battery > 75 && battery <= 100:
			return <FaBatteryFull color='white' style={{marginRight: "10px"}} />;
		default:
			return 'xd';
	}
}