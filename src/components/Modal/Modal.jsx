import React, {useEffect} from 'react';
import ReactDom from 'react-dom';
import styles from './Modal.module.scss';
import useScrollBlock from 'hooks/useScrollBlock';

// SVG:
// import {ReactComponent as CloseSvg} from 'assets/svg/close.svg';

const Modal = ({setIsOpen, children}) => {
    const [blockScroll, allowScroll] = useScrollBlock();

    useEffect(() => {
        blockScroll();

        return function cleanup() {
            allowScroll();
        };
    });

    return ReactDom.createPortal(
        <div className={styles.container} onClick={() => setIsOpen(false)}>
            <div className={styles.content} onClick={(event) => event.stopPropagation()}>
                {/*<button className={styles.close} type='button' onClick={() => setIsOpen(false)}>*/}
                {/*    <CloseSvg width={24} height={24}/>*/}
                {/*</button>*/}
                {children}
            </div>
        </div>,
        document.getElementById('portal-root')
    );
};

export default Modal;
