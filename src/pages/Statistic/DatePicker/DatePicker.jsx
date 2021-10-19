import React, {useState} from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import DayPicker, {DateUtils} from 'react-day-picker';
import './DayPicker.scss';
import styles from './DatePicker.module.scss';

//SVG:
import {ReactComponent as CalendarSVG} from 'assets/svg/calendar.svg';
import {ReactComponent as DropDownArrowSVG} from 'assets/svg/drop-down-arrow.svg';
import {ReactComponent as CheckboxSVG} from 'assets/svg/checkbox.svg';
import {ReactComponent as CheckedSVG} from 'assets/svg/checkbox-checked.svg';

function getDateNext(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() + days);
    return dateCopy;
}

const MONTHS = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];
const WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const DATE_CURRENT = new Date();
const DATE_TO = getDateNext(DATE_CURRENT, 5);
const DATE_YEAR_FIRST = new Date(new Date().getFullYear(), 0, 1);
const DATE_YEAR_LAST = new Date(new Date().getFullYear(), 11, 31);
const DATE_MONTH_FIRST = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
const DATE_MONTH_LAST = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

const DatePicker = () => {
    const [isShow, setIsShow] = useState(false);
    const ref = useOnclickOutside(() => setIsShow(false));
    const [range, setRange] = useState({
        from: DATE_CURRENT,
        to: DATE_TO
    });
    const {from, to} = range;
    const [fullYearCheck, setFullYearCheck] = useState(false);
    const [fullMonthCheck, setFullMonthCheck] = useState(false);
    const getInitialRange = () => ({
        from: undefined,
        to: undefined
    });
    const setFullYearHandler = () => {
        setFullYearCheck(!fullYearCheck);
        setFullMonthCheck(false);

        setRange(fullYearCheck
            ? getInitialRange()
            : {
                from: DATE_YEAR_FIRST,
                to: DATE_YEAR_LAST
            }
        );
    };
    const setFullMonthHandler = () => {
        setFullMonthCheck(!fullMonthCheck);
        setFullYearCheck(false);

        setRange(fullMonthCheck
            ? getInitialRange()
            : {
                from: DATE_MONTH_FIRST,
                to: DATE_MONTH_LAST
            }
        );
    };

    const handleDayClick = (day) => {
        setRange(DateUtils.addDayToRange(day, range));
    };

    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.wrapper} onClick={() => setIsShow(!isShow)}>
                <CalendarSVG width={24} height={24}/>
                <div className={styles.values}>
                    {from && to
                        ? <>Период с {from ? from.toLocaleDateString() : ''} по {to.toLocaleDateString()}</>
                        : <>Выберите период</>
                    }
                </div>
                <DropDownArrowSVG width={24} height={24}/>
            </div>
            {isShow && (
                <div className={styles.modal}>
                    {from && to && (
                        <header className={styles.header}>
                            <div className={styles.headerItem}>
                                <div>Начало исследования:</div>
                                <div>с {from.toLocaleDateString()}</div>
                            </div>
                            <div className={styles.headerItem}>
                                <div>Конец исследования</div>
                                <div>до {to.toLocaleDateString()}</div>
                            </div>
                        </header>
                    )}
                    <DayPicker
                        className='Selectable'
                        selectedDays={[from, {from, to}]}
                        modifiers={{start: from, end: to}}
                        locale={'ru'}
                        months={MONTHS}
                        weekdaysShort={WEEKDAYS_SHORT}
                        firstDayOfWeek={1}
                        onDayClick={(day) => handleDayClick(day)}
                        showOutsideDays
                    />
                    <div className={styles.actions}>
                        <div className={styles.action} onClick={setFullMonthHandler}>
                            {fullMonthCheck
                                ? <CheckedSVG width={24} height={24}/>
                                : <CheckboxSVG width={24} height={24}/>
                            }
                            <span>Выбрать весь месяц</span>
                        </div>
                        <div className={styles.action} onClick={setFullYearHandler}>
                            {fullYearCheck
                                ? <CheckedSVG width={24} height={24}/>
                                : <CheckboxSVG width={24} height={24}/>
                            }
                            <span>Выбрать весь год</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DatePicker;
