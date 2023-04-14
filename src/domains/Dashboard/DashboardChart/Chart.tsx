import { DashboardCard } from '../DashboardCard/DashboardCard';
import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Legend, Bar, ResponsiveContainer } from 'recharts';
import { theme } from '../../../shared/theme/theme';
import { IconButton, Menu, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { ChartHeader } from './Chart.styles';
import { getChartData } from './helpers/getChartData';
import { useQuery } from '@tanstack/react-query';

export const Chart = () => {
    const { t } = useTranslation();
    const [timeFrame, setTimeFrame] = useState('thisYear');

    const { data } = useQuery({
        queryKey: [`dashboardChart-${timeFrame}`],
        queryFn: () => getChartData(timeFrame),
    });

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
                        <MenuItem value={'today'}>{t('dashboard.chart.menu.today')}</MenuItem>
                        <MenuItem value={'thisMonth'}>{t('dashboard.chart.menu.thisMonth')}</MenuItem>
                        <MenuItem value={'thisYear'}>{t('dashboard.chart.menu.thisYear')}</MenuItem>
                    </Select>
                    <IconButton onClick={handleClick}>
                        <MenuIcon fontSize='small' />
                    </IconButton>
                    <Menu
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
                    <YAxis axisLine={false} tickLine={false} />
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
