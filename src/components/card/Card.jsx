import PropTypes from 'prop-types';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Card, Typography, Stack, Grid } from '@mui/material';
// utils
import { fNumber, fPercent } from '../../utils/formatNumber';
// components
import Iconify from '../iconify';
import Chart, { useChart } from '../chart';
import styles from './card.module.css';
// ----------------------------------------------------------------------

CardComponent.propTypes = {
  sx: PropTypes.object,
  chart: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
  percent: PropTypes.number,
};

function CardComponent({ title, percent, total, chart, sx, ...other }) {
  const { colors, series, options } = chart;

  const chartOptions = useChart({
    colors,
    chart: {
      animations: {
        enabled: true,
      },
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: (value) => fNumber(value),
        title: {
          formatter: () => '',
        },
      },
      marker: {
        show: false,
      },
    },
    ...options,
  });

  return (
    <Card className={styles.height} sx={{ p: 3, ...sx }} {...other}>
      <Grid>
        <Typography variant="subtitle2" paragraph>
          {title}
        </Typography>
      </Grid>
      <Grid className={styles.flex}>
        <Typography variant="h3" gutterBottom>
          {fNumber(total)} <span className={styles.supText}>▼ 15</span>
        </Typography>

        <Chart type="line" series={[{ data: series }]} options={chartOptions} width={120} height={80} />
      </Grid>
    </Card>
  );
}

export default CardComponent;
