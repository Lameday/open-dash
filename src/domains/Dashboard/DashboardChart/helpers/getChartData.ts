//Mock data because of lack of API

import { ChartData } from '../../../../shared/components/Chart/model/ChartData';

const dataToday = [
    { name: 1, investment: 106, loss: 317, profit: 344, maintenance: 310 },
    { name: 2, investment: 259, loss: 194, profit: 115, maintenance: 49 },
    { name: 3, investment: 328, loss: 186, profit: 230, maintenance: 232 },
    { name: 4, investment: 328, loss: 244, profit: 282, maintenance: 113 },
    { name: 5, investment: 168, loss: 77, profit: 304, maintenance: 93 },
    { name: 6, investment: 303, loss: 142, profit: 149, maintenance: 213 },
    { name: 7, investment: 97, loss: 359, profit: 249, maintenance: 223 },
    { name: 8, investment: 128, loss: 30, profit: 112, maintenance: 173 },
    { name: 9, investment: 268, loss: 172, profit: 187, maintenance: 8 },
    { name: 10, investment: 250, loss: 214, profit: 233, maintenance: 297 },
    { name: 11, investment: 127, loss: 248, profit: 264, maintenance: 191 },
    { name: 12, investment: 137, loss: 210, profit: 119, maintenance: 35 },
    { name: 13, investment: 203, loss: 275, profit: 195, maintenance: 176 },
    { name: 14, investment: 273, loss: 70, profit: 153, maintenance: 217 },
    { name: 15, investment: 80, loss: 327, profit: 238, maintenance: 127 },
    { name: 16, investment: 206, loss: 213, profit: 314, maintenance: 73 },
    { name: 17, investment: 306, loss: 83, profit: 360, maintenance: 122 },
    { name: 18, investment: 142, loss: 173, profit: 309, maintenance: 150 },
    { name: 19, investment: 30, loss: 314, profit: 29, maintenance: 105 },
    { name: 20, investment: 292, loss: 252, profit: 350, maintenance: 208 },
    { name: 21, investment: 93, loss: 196, profit: 245, maintenance: 318 },
    { name: 22, investment: 357, loss: 96, profit: 200, maintenance: 182 },
    { name: 23, investment: 125, loss: 71, profit: 156, maintenance: 218 },
    { name: 24, investment: 209, loss: 59, profit: 332, maintenance: 162 },
];
const dataThisMonth = [
    { name: 1, investment: 127, loss: 7, profit: 85, maintenance: 53 },
    { name: 2, investment: 148, loss: 233, profit: 336, maintenance: 345 },
    { name: 3, investment: 262, loss: 305, profit: 83, maintenance: 350 },
    { name: 4, investment: 29, loss: 215, profit: 269, maintenance: 255 },
    { name: 5, investment: 4, loss: 20, profit: 226, maintenance: 71 },
    { name: 6, investment: 212, loss: 149, profit: 165, maintenance: 273 },
    { name: 7, investment: 5, loss: 159, profit: 186, maintenance: 81 },
    { name: 8, investment: 242, loss: 0, profit: 158, maintenance: 313 },
    { name: 9, investment: 173, loss: 333, profit: 183, maintenance: 335 },
    { name: 10, investment: 109, loss: 310, profit: 316, maintenance: 81 },
    { name: 11, investment: 261, loss: 281, profit: 41, maintenance: 81 },
    { name: 12, investment: 235, loss: 326, profit: 203, maintenance: 295 },
    { name: 13, investment: 258, loss: 169, profit: 302, maintenance: 38 },
    { name: 14, investment: 333, loss: 103, profit: 9, maintenance: 39 },
    { name: 15, investment: 139, loss: 291, profit: 304, maintenance: 5 },
    { name: 16, investment: 123, loss: 70, profit: 149, maintenance: 189 },
    { name: 17, investment: 156, loss: 93, profit: 240, maintenance: 10 },
    { name: 18, investment: 249, loss: 260, profit: 340, maintenance: 272 },
    { name: 19, investment: 322, loss: 214, profit: 151, maintenance: 164 },
    { name: 20, investment: 288, loss: 275, profit: 282, maintenance: 119 },
    { name: 21, investment: 116, loss: 168, profit: 207, maintenance: 33 },
    { name: 22, investment: 315, loss: 265, profit: 142, maintenance: 354 },
    { name: 23, investment: 266, loss: 243, profit: 237, maintenance: 72 },
    { name: 24, investment: 218, loss: 228, profit: 233, maintenance: 36 },
    { name: 25, investment: 268, loss: 58, profit: 229, maintenance: 294 },
    { name: 26, investment: 16, loss: 112, profit: 8, maintenance: 246 },
    { name: 27, investment: 306, loss: 287, profit: 183, maintenance: 96 },
    { name: 28, investment: 133, loss: 161, profit: 215, maintenance: 152 },
    { name: 29, investment: 355, loss: 88, profit: 64, maintenance: 82 },
    { name: 30, investment: 280, loss: 170, profit: 341, maintenance: 37 },
];
const dataThisYear = [
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

export const getChartData = async (data: string): Promise<ChartData[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (data) {
                case 'today':
                    resolve(dataToday);
                    break;
                case 'thisMonth':
                    resolve(dataThisMonth);
                    break;
                case 'thisYear':
                    resolve(dataThisYear);
                    break;
                default:
                    reject(new Error('No such data exist'));
            }
        }, 0);
    });
};
