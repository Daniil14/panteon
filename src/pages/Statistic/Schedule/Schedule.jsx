import React, {useEffect, useRef, useState} from 'react';
import {nFormatter} from 'utils';
import {
    VictoryArea,
    VictoryAxis,
    VictoryChart,
    VictoryLine,
    VictoryScatter,
    VictoryTooltip,
    VictoryVoronoiContainer
} from 'victory';
import styles from './Schedule.module.scss';
import {data} from './mock';

const Schedule = () => {
    return (
        <div>
            <div className={styles.prompts}>
                <div className={styles.prompt}>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        backgroundColor: '#316BFF',
                        borderRadius: '8px'
                    }}/>
                    Активность ботов
                </div>
                <div className={styles.prompt}>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        backgroundColor: 'rgba(158, 162, 173, 0.3)',
                        borderRadius: '8px'
                    }}/>
                    Активность людей
                </div>
            </div>
            <VictoryChart
                domain={{x: [1, 30], y: [140000000, 260000000]}}
                width={1129}
                padding={{ top: 40, bottom: 40, left: 70, right: 0 }}
                containerComponent={<VictoryVoronoiContainer voronoiBlacklist={['notActiveLine']}/>}
            >
                <VictoryAxis
                    tickFormat={(x) => new Date(x).getDate()}
                    tickCount={7}
                    style={{
                        tickLabels: {
                            fill: '#9EA2AD',
                            fontFamily: 'inherit',
                            fontWeight: 600,
                            fontSize: 14,
                        },
                        axis: {
                            strokeWidth: 0
                        },
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(y) => nFormatter(y)}
                    tickValues={[140000000, 180000000, 220000000, 260000000]}
                    style={{
                        grid: {
                            stroke: '#E6E6E7',
                            strokeWidth: 1
                        },
                        axis: {
                            strokeWidth: 0
                        },
                        tickLabels: {
                            fill: '#9EA2AD',
                            fontFamily: 'inherit',
                            fontWeight: 600,
                            fontSize: 14,
                        }
                    }}
                />
                <VictoryArea
                    data={data}
                    interpolation='cardinal'
                    x='date'
                    y='bot_activity'
                    style={{
                        data: {
                            fill: 'rgba(49, 107, 255, 0.1)',
                            stroke: '#316BFF',
                            strokeWidth: 2,
                        }
                    }}
                />
                <VictoryScatter
                    data={data}
                    x='date'
                    y='bot_activity'
                    size={({active}) => active ? 4 : 0}
                    labels={() => ''}
                    labelComponent={
                        <VictoryTooltip flyoutComponent={<VictoryCustomTooltip orientation={'top'}/>}/>
                    }
                    style={{
                        data: {
                            fill: '#316BFF',
                            stroke: '#FFFEFC',
                            strokeWidth: 2,
                            WebkitFilter: 'drop-shadow(0 3px 3px rgba(0, 0, 0, .3))',
                            filter: 'drop-shadow(0 3px 3px rgba(0, 0, 0, .3))'
                        }
                    }}
                />
                <VictoryLine
                    name='notActiveLine'
                    data={data}
                    interpolation='cardinal'
                    x={'date'}
                    y={'people_activity'}
                    style={{
                        data: {
                            stroke: 'rgba(158, 162, 173, 0.3)',
                            strokeWidth: 2,
                        }
                    }}
                />
            </VictoryChart>
            <button className={styles.save} type='button'>
                Скачать ядро ПриветТур Зима в xls
            </button>
        </div>
    );
};

export const VictoryCustomTooltip = (props) => {
    const {datum, x, y, height} = props;
    const [xCord, setXCord] = useState(x);
    const [yCord, setYCord] = useState(y);
    const rootEl = useRef(null);
    const date = new Date(datum.date);

    useEffect(() => {
        const rect = rootEl.current.getBoundingClientRect();

        setXCord((val) => val - rect.width / 2);
        setYCord((val) => val - (rect.height + height))
    }, [setXCord, height]);

    return (
        <g style={{pointerEvents: 'none'}}>
            <foreignObject
                x={`${xCord}`}
                y={`${yCord}`}
                width='10'
                height='10'
                style={{overflow: 'visible'}}
            >
                <div className={styles.tooltip} ref={rootEl}>
                    <div className={styles.tooltipWrapper}>
                        <div className={styles.tooltipTitle}>Количество ботов:</div>
                        <div className={styles.tooltipValue}>
                            {new Intl.NumberFormat('ru-RU').format(datum.bot_activity)}
                        </div>
                        <div className={styles.tooltipDate}>
                            {date.getDate()} {date.toLocaleString('ru', {month: 'long'})} {date.getFullYear()}
                        </div>
                    </div>
                    <div className={styles.tooltipUvula}>
                        <svg width='20' height='8' viewBox='0 0 20 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M10 8C13 8 15.9999 0 20 0H0C3.9749 0 7 8 10 8Z'
                                fill='white'
                            />
                        </svg>
                    </div>
                </div>
            </foreignObject>
        </g>
    );
};

export default Schedule;