import React, {useState} from 'react';
import SimpleBar from 'simplebar-react';
import {useCombobox} from 'downshift';
import 'simplebar/dist/simplebar.min.css';
import styles from './Select.module.scss';

// SVG:
import {ReactComponent as SearchSvg} from 'assets/svg/search.svg';
import {ReactComponent as ArrowSvg} from 'assets/svg/drop-down-arrow.svg';


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
                    <SearchSvg/>
                    <input className={styles.input} {...getInputProps()} placeholder="Введите название города"/>
                    <ArrowSvg className={`${isOpen ? styles.open : styles.arrow}`} width={24} heigh={24}/>
                </div>
            </div>
            <div {...getMenuProps()}>
                {isOpen && (
                    <SimpleBar className={styles.list} autoHide={false}>
                        {inputItems.length > 0
                            ? inputItems.map((item, index) => (
                                <ul>
                                    <li className={`${highlightedIndex === index ? styles.selected : styles.item}`}
                                        key={`${item}${index}`}
                                        {...getItemProps({item, index})}>
                                        {item}
                                    </li>
                                </ul>
                            ))
                            : <div className={styles.empty}>Ничего не найдено</div>
                        }
                    </SimpleBar>
                )}
            </div>
        </div>
    );
};

export default Select;
