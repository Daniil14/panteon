import React, {useState} from 'react';
import {useCombobox} from 'downshift';
import styles from './Select.module.scss';

const Select = ({cities}) => {
    cities = cities.map((city) => city.name);
    const [inputItems, setInputItems] = useState(cities);
    const {
        isOpen,
        getToggleButtonProps,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        highlightedIndex,
        getItemProps,
    } = useCombobox({
        items: inputItems,
        onInputValueChange: ({inputValue}) => {
            setInputItems(
                cities.filter(item =>
                    item.toLowerCase().startsWith(inputValue.toLowerCase()),
                ),
            )
        },
    });

    return (
        <div className={styles.container}>
            <div {...getComboboxProps()}>
                <div className={styles.inputWrapper} {...getToggleButtonProps()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14V14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                            fill="#9EA2AD"/>
                    </svg>
                    <input className={styles.input} {...getInputProps()} placeholder="Введите название города"/>
                    <svg className={`${isOpen ? styles.open : styles.arrow}`} width="24" height="24"
                         viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="#434E6A"/>
                    </svg>
                </div>
            </div>
            <div {...getMenuProps()}>
                {isOpen && (
                    <ul className={styles.list}>
                        {inputItems.map((item, index) => (
                            <li className={`${highlightedIndex === index ? styles.selected : styles.item}`}
                                key={`${item}${index}`}
                                {...getItemProps({item, index})}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Select;
