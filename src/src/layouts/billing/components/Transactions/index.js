import React from 'react';
import { Card, Stack } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiProgress from "components/VuiProgress";
import VuiTypography from 'components/VuiTypography';
import colors from 'assets/theme/base/colors';
import Grid from "@mui/material/Grid";
import linearGradient from 'assets/theme/functions/linearGradient';

import BarChart from "examples/Charts/BarCharts/BarChart";
import { barChartDataDashboard } from "layouts/billing/components/Transactions/data/barChartData";
import { barChartOptionsDashboard } from "layouts/billing/components/Transactions/data/barChartOptions";

import { GiElectric } from "react-icons/gi";
import { IoWallet } from "react-icons/io5";
import { IoIosRocket } from "react-icons/io";
import { IoBuild } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";


function TransactionsList() {
	const { gradients } = colors;
	const { cardContent } = gradients;

	return (
		<Card>
                <VuiBox>
                  <VuiBox
                    mb="24px"
                    height="220px"
                    sx={{
                      background: linearGradient(
                        cardContent.main,
                        cardContent.state,
                        cardContent.deg
                      ),
                      borderRadius: "20px",
                    }}
                  >
                    <BarChart
                      barChartData={barChartDataDashboard}
                      barChartOptions={barChartOptionsDashboard}
                    />
                  </VuiBox>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Transaction Statistics
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      (-123€){" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        than last week
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <Grid container spacing="50px">
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoWallet color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Pay
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        €46.50
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoIosRocket color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Drones
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        €123.00
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <GiElectric color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Charge
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        0
                      </VuiTypography>
                      <VuiProgress value={0} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoBuild color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Support
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        1
                      </VuiTypography>
                      <VuiProgress value={100} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                  </Grid>
                </VuiBox>
              </Card>
	)
	// 	<Card
	// 		sx={{
	// 			height: '100%',
	// 			background: linearGradient(gradients.cardDark.main, gradients.cardDark.state, gradients.cardDark.deg)
	// 		}}>
	// 		<VuiBox sx={{ width: '100%' }}>
	// 			<VuiBox
	// 				display='flex'
	// 				alignItems='center'
	// 				justifyContent='space-beetween'
	// 				sx={{ width: '100%' }}
	// 				mb='40px'>
	// 				<VuiTypography variant='lg' color='white' mr='auto' fontWeight='bold'>
	// 					Referral Tracking
	// 				</VuiTypography>
	// 				<VuiBox
	// 					display='flex'
	// 					justifyContent='center'
	// 					alignItems='center'
	// 					bgColor='#22234B'
	// 					sx={{ width: '37px', height: '37px', cursor: 'pointer', borderRadius: '12px' }}>
	// 					<FaEllipsisH color={info.main} size='18px' />
	// 				</VuiBox>
	// 			</VuiBox>
	// 			<VuiBox
	// 				display='flex'
	// 				sx={({ breakpoints }) => ({
	// 					[breakpoints.up('xs')]: {
	// 						flexDirection: 'column',
	// 						gap: '16px',
	// 						justifyContent: 'center',
	// 						alignItems: 'center'
	// 					},
	// 					[breakpoints.up('md')]: {
	// 						flexDirection: 'row',
	// 						justifyContent: 'flex-start',
	// 						alignItems: 'center'
	// 					}
	// 				})}>
	// 				<Stack
	// 					direction='column'
	// 					spacing='20px'
	// 					width='500px'
	// 					maxWidth='50%'
	// 					sx={({ breakpoints }) => ({
	// 						mr: 'auto',
	// 						[breakpoints.only('md')]: {
	// 							mr: '75px'
	// 						},
	// 						[breakpoints.only('xl')]: {
	// 							width: '500px',
	// 							maxWidth: '40%'
	// 						}
	// 					})}>
	// 					<VuiBox
	// 						display='flex'
	// 						width='220px'
	// 						p='20px 22px'
	// 						flexDirection='column'
	// 						sx={({ breakpoints }) => ({
	// 							background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
	// 							borderRadius: '20px',
	// 							[breakpoints.up('xl')]: {
	// 								maxWidth: '110px !important'
	// 							},
	// 							[breakpoints.up('xxl')]: {
	// 								minWidth: '180px',
	// 								maxWidth: '100% !important'
	// 							}
	// 						})}>
	// 						<VuiTypography color='text' variant='button' fontWeight='regular' mb='5px'>
	// 							Invited
	// 						</VuiTypography>
	// 						<VuiTypography color='white' variant='lg' fontWeight='bold'>
	// 							145 people
	// 						</VuiTypography>
	// 					</VuiBox>
	// 					<VuiBox
	// 						display='flex'
	// 						width='220px'
	// 						p='20px 22px'
	// 						flexDirection='column'
	// 						sx={({ breakpoints }) => ({
	// 							background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
	// 							borderRadius: '20px',
	// 							[breakpoints.up('xl')]: {
	// 								maxWidth: '110px !important'
	// 							},
	// 							[breakpoints.up('xxl')]: {
	// 								minWidth: '180px',
	// 								maxWidth: '100% !important'
	// 							}
	// 						})}>
	// 						<VuiTypography color='text' variant='button' fontWeight='regular' mb='5px'>
	// 							Bonus
	// 						</VuiTypography>
	// 						<VuiTypography color='white' variant='lg' fontWeight='bold'>
	// 							1,465
	// 						</VuiTypography>
	// 					</VuiBox>
	// 				</Stack>
	// 				<VuiBox sx={{ position: 'relative', display: 'inline-flex' }}>
	// 					<CircularProgress
	// 						variant='determinate'
	// 						value={70}
	// 						size={window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200}
	// 						color='success'
	// 					/>
	// 					<VuiBox
	// 						sx={{
	// 							top: 0,
	// 							left: 0,
	// 							bottom: 0,
	// 							right: 0,
	// 							position: 'absolute',
	// 							display: 'flex',
	// 							alignItems: 'center',
	// 							justifyContent: 'center'
	// 						}}>
	// 						<VuiBox display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
	// 							<VuiTypography color='text' variant='button' mb='4px'>
	// 								Safety
	// 							</VuiTypography>
	// 							<VuiTypography
	// 								color='white'
	// 								variant='d5'
	// 								fontWeight='bold'
	// 								mb='4px'
	// 								sx={({ breakpoints }) => ({
	// 									[breakpoints.only('xl')]: {
	// 										fontSize: '32px'
	// 									}
	// 								})}>
	// 								9.3
	// 							</VuiTypography>
	// 							<VuiTypography color='text' variant='button'>
	// 								Total Score
	// 							</VuiTypography>
	// 						</VuiBox>
	// 					</VuiBox>
	// 				</VuiBox>
	// 			</VuiBox>
	// 		</VuiBox>
	// 	</Card>
	// );
}

export default TransactionsList;
