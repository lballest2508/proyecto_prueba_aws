import { Helmet } from 'react-helmet-async';
// @mui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LinearProgress from '@mui/material/LinearProgress';
import { useTheme } from '@mui/material/styles';

import { Container, Grid, Button, Paper, Typography } from '@mui/material';
// auth
import { useAuthContext } from '../../../../auth/useAuthContext';
// _mock_
import {
  _ecommerceNewProducts,
  _ecommerceSalesOverview,
  _ecommerceBestSalesman,
  _ecommerceLatestProducts,
} from '../../../../_mock/arrays';
// components
import { useSettingsContext } from '../../../../components/settings';
import CardComponent from '../../../../components/card/Card';
import LineCard from '../../../../components/lineCard/LineCard';
import AveragePosition from '../../../../components/averagePosition/AveragePosition';

// sections
import {
  EcommerceNewProducts,
  EcommerceYearlySales,
  EcommerceBestSalesman,
  EcommerceSaleByGender,
  EcommerceWidgetSummary,
  EcommerceSalesOverview,
  EcommerceLatestProducts,
  EcommerceCurrentBalance,
} from '../../../../sections/@dashboard/general/e-commerce';
import { AppWelcome } from '../../../../sections/@dashboard/general/app';
// assets
import { MotivationIllustration } from '../../../../assets/illustrations';

import styles from './summay.module.css';
import dummyImg from '../../../../assets/images/dummy-img.png';
// ----------------------------------------------------------------------

export default function GeneralEcommercePage() {
  const { user } = useAuthContext();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> General: E-commerce | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid className={styles.domain} item xs={12} md={12}>
            <Grid item xs={4} md={4} className={styles.flex}>
              <span className={styles.paddTop}>Domain</span>
              <FormControl fullWidth className={styles.dropdown}>
                <Select
                  className={styles.select}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label=""
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={styles.detail}>
              <Grid className={styles.picture}>
                <img className={styles.img} src={dummyImg} alt="dummyImg" />
              </Grid>
              <Grid item xs={12} md={12} className={styles.optimation}>
                <Typography className={styles.heading} variant="h5" gutterBottom>
                  Low Optimization (43%)
                </Typography>
                <LinearProgress className={styles.progress} variant="determinate" value={50} />
              </Grid>
              <Grid container className={styles.pageDetail}>
                <Grid item xs={12} md={6} className={styles.contentBetween}>
                  <Grid>
                    <Typography variant="subtitle2">Pages Crowled</Typography>

                    <b>10</b>
                  </Grid>
                  <span className={styles.line} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2">Total Errors</Typography>

                  <b>100</b>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} className={`${styles.height}`}>
            <Grid container spacing={3} className={styles.marginBottom}>
              <Grid item md={6} xs={12}>
                <CardComponent
                  title="Organic Traffic"
                  percent={2.6}
                  total={765}
                  chart={{
                    colors: [theme.palette.primary.main],
                    series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <CardComponent
                  title="Impressions"
                  percent={-0.1}
                  total={123}
                  chart={{
                    colors: [theme.palette.info.main],
                    series: [56, 47, 40, 62, 73, 30, 23, 54, 67, 68],
                  }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3} className={styles.marginBottom}>
              <Grid item md={6} xs={12}>
                <LineCard
                  title="Total Backlinks"
                  percent={2.6}
                  total={765}
                  chart={{
                    colors: [theme.palette.primary.main],
                    series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <LineCard
                  title="Global Rank"
                  percent={-0.1}
                  total={185}
                  chart={{
                    colors: [theme.palette.info.main],
                    series: [56, 47, 40, 62, 73, 30, 23, 54, 67, 68],
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid container className={`${styles.averagePosition} ${styles.padd}}`}>
            <Grid item xs={12} md={6}>
              <AveragePosition
                title="Average Position"
                chart={{
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                  series: [
                    {
                      year: '2019',
                      data: [
                        { name: 'Total Income', data: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
                        // { name: 'Total Expenses', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                      ],
                    },
                    {
                      year: '2020',
                      data: [
                        { name: 'Total Income', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                        // { name: 'Total Expenses', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
                      ],
                    },
                  ],
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={`${styles.domainDetail} ${styles.margin} ${styles.marginTop}`}>
                <Typography variant="h5" gutterBottom>
                  Domain Info
                </Typography>
                <hr className={styles.hrLine} />
                <Grid>
                  <Typography variant="h6" gutterBottom>
                    Name : kivio.com
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Created At : 1997-03-29
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Expiration Date : 1998-03-29
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
