import { Surface, Symbols } from 'recharts';
import { Props } from 'recharts/types/component/Legend';
import { Legend, LegendItem, LegendItemSymbol, LegendItemValue } from './CustomLegend.styles';

export const CustomLegend = (props: Props) => {
    const { payload } = props;
    return (
        <Legend>
            {payload?.map((entry) => {
                const { value, color } = entry;
                return (
                    <LegendItem key={`id-${value}`}>
                        <LegendItemSymbol>
                            <Surface width={15} height={15} viewBox={{ x: 0, y: 0, width: 15, height: 15 }}>
                                <Symbols cx={7} cy={7} type='square' sizeType='diameter' size={12} fill={color} />
                            </Surface>
                        </LegendItemSymbol>
                        <LegendItemValue color={color}>{value}</LegendItemValue>
                    </LegendItem>
                );
            })}
        </Legend>
    );
};
