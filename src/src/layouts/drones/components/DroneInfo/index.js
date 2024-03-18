import React from 'react';

import { Card } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import colors from 'assets/theme/base/colors';
import linearGradient from 'assets/theme/functions/linearGradient';
import CircularProgress from '@mui/material/CircularProgress';
import DroneImage from '../image/droneImage.png';
import VuiBadge from "components/VuiBadge";

// React Icons
import { RiBattery2ChargeFill } from "react-icons/ri";

const DroneInfo = ({ height }) => {
	const { gradients } = colors;
	const { cardContent } = gradients;

	return (
		<Card sx={{ height: {height} }}>
			<VuiBox display='flex' flexDirection='column'>
				<VuiTypography variant='lg' color='white' fontWeight='bold' mb='4px'>
					Drone Information
				</VuiTypography>
				<VuiBox sx={{ alignSelf: 'center', justifySelf: 'center', zIndex: '-1' }} mt={5}>
					<VuiBox sx={{ position: 'relative', display: 'inline-flex' }}>
					{/* <VuiBadge
					variant="standard"
					badgeContent="Online"
					color="success"
					size="xs"
					item
					sx={100}
					/> */}
						{/* <RiBattery2ChargeFill color='white' /> */}
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
							32KM/H
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
