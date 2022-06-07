import React, {useState} from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import styles from './SelectProject.module.scss';

// SVG:
import {ReactComponent as DropDownArrow} from 'assets/svg/drop-down-arrow.svg';
import {ReactComponent as ProjectLogoSvg} from 'assets/svg/project-logo.svg';

const SelectProject = ({projects, isSelected, showIcon, setIsSelected, label}) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOnclickOutside(() => setIsOpen(false));
    const changeSelectHandler = (index) => {
        setIsSelected(index);
        setIsOpen(false);
    };

    return (
        <div className={styles.container} ref={ref}>
            <div>
                <div className={styles.label}>{label}</div>
                <div className={styles.field} onClick={() => setIsOpen(!isOpen)}>
                    {showIcon && <ProjectLogoSvg width={24} height={24}/>}
                    <div className={styles.value}>{projects[isSelected].name}</div>
                    <DropDownArrow width={24} height={24}/>
                </div>
            </div>
            {isOpen && <ul className={styles.list}>
                {projects.map((project, index) => (
                    <li className={`${index === isSelected ? styles.active : styles.item}`} key={`project-${index}`}
                        onClick={() => changeSelectHandler(index)}>
                        {project.name}
                    </li>
                ))}
            </ul>}
        </div>
    )
};

export default SelectProject;
