import React, {useRef, useState} from 'react';
import styles from './Select.module.scss';

// SVG:
import {ReactComponent as SearchSvg} from 'assets/svg/search.svg';
import {ReactComponent as DropDownArrow} from 'assets/svg/drop-down-arrow.svg';

const Select = () => {
    const options = ['Тольятти', 'Тобольск', 'Тверь'];
    const selectInput = useRef(null);
    const [value, setValue] = useState('');
    const selectOptionHandler = (value) => {
        setValue(value);
        selectInput.current.blur();
    };
    const inputHandler = (event) => setValue(event.target.value);

    return (
        <div className={styles.container}>
            <SearchSvg/>
            <div className={styles.field}>
                <input type="text"
                       placeholder="Введите название города"
                       value={value}
                       ref={selectInput}
                       onChange={(event) => inputHandler(event)}/>
                <ul className={styles.options}>
                    {options.map((option, index) => (
                        <li className={styles.option}
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => selectOptionHandler(option)}
                            key={`option-${index}`}>
                            {option}
                        </li>
                    ))}
                </ul>
                <DropDownArrow width={24} height={24}/>
            </div>
        </div>
    );
};

export default Select;
