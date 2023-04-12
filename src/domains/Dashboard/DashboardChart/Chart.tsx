import { DashboardCard } from '../DashboardCard/DashboardCard';
import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Legend, Bar, ResponsiveContainer } from 'recharts';
import { theme } from '../../../shared/theme/theme';
import { IconButton, Menu, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { ChartHeader } from './Chart.styles';

const data = [
    { name: 'Jan', investment: 35, loss: 35, profit: 35, maintenance: 0 },
    { name: 'Feb', investment: 125, loss: 15, profit: 145, maintenance: 0 },
    { name: 'Mar', investment: 35, loss: 15, profit: 35, maintenance: 75 },
    { name: 'Apr', investment: 35, loss: 35, profit: 35, maintenance: 0 },
    { name: 'May', investment: 35, loss: 65, profit: 20, maintenance: 0 },
    { name: 'Jun', investment: 80, loss: 40, profit: 105, maintenance: 115 },
    { name: 'Jul', investment: 35, loss: 80, profit: 100, maintenance: 0 },
    { name: 'Aug', investment: 20, loss: 25, profit: 10, maintenance: 0 },
    { name: 'Sep', investment: 35, loss: 15, profit: 65, maintenance: 0 },
    { name: 'Oct', investment: 45, loss: 85, profit: 45, maintenance: 0 },
    { name: 'Nov', investment: 15, loss: 25, profit: 30, maintenance: 150 },
    { name: 'Dec', investment: 75, loss: 75, profit: 10, maintenance: 0 },
];

export const Chart = () => {
    const { t } = useTranslation();

    const [timeFrame, setTimeFrame] = useState('30');

    const handleTimeFrameChange = (event: SelectChangeEvent) => {
        setTimeFrame(event.target.value as string);
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <DashboardCard>
            <ChartHeader>
                <Stack>
                    <Typography variant='subtitle2'>{t('dashboard.chart.title')}</Typography>
                    <Typography variant='h5'>$2,324.00</Typography>
                </Stack>
                <Stack alignItems='flex-end'>
                    <Select value={timeFrame} onChange={handleTimeFrameChange}>
                        <MenuItem value={'10'}>{t('dashboard.chart.menu.today')}</MenuItem>
                        <MenuItem value={'20'}>{t('dashboard.chart.menu.thisMonth')}</MenuItem>
                        <MenuItem value={'30'}>{t('dashboard.chart.menu.thisYear')}</MenuItem>
                    </Select>
                    <IconButton onClick={handleClick}>
                        <MenuIcon fontSize='small' />
                    </IconButton>
                    <Menu
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}>
                        <MenuItem onClick={handleClose}>Download PNG</MenuItem>
                        <MenuItem onClick={handleClose}>Download SVG</MenuItem>
                        <MenuItem onClick={handleClose}>Download CSV</MenuItem>
                    </Menu>
                </Stack>
            </ChartHeader>
            <ResponsiveContainer width='100%' height={500}>
                <BarChart data={data}>
                    <CartesianGrid vertical={false} stroke={theme.palette.grey[200]} />
                    <XAxis dataKey='name' tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} domain={[0, 360]} />
                    <Tooltip cursor={{ fill: 'transparent' }} wrapperStyle={{ outline: 'none' }} />
                    <Legend iconType='square' />
                    <Bar
                        dataKey='investment'
                        fill={theme.palette.secondary.light}
                        stackId='stack'
                        maxBarSize={30}
                        name={t('dashboard.chart.investment') || ''}
                    />
                    <Bar
                        dataKey='loss'
                        fill={theme.palette.secondary.main}
                        stackId='stack'
                        maxBarSize={30}
                        name={t('dashboard.chart.loss') || ''}
                    />
                    <Bar
                        dataKey='profit'
                        fill={theme.palette.primary.main}
                        stackId='stack'
                        maxBarSize={30}
                        name={t('dashboard.chart.profit') || ''}
                    />
                    <Bar
                        dataKey='maintenance'
                        fill={theme.palette.primary.light}
                        stackId='stack'
                        maxBarSize={30}
                        name={t('dashboard.chart.maintenance') || ''}
                    />
                </BarChart>
            </ResponsiveContainer>
        </DashboardCard>
    );
};
