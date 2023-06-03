"use client";
import Image from 'next/image';
import styles from '../../styles/actionButton.module.sass'
import {useEffect, useState } from 'react'

const ActionButton = ({ type, active }) => {
    
    //Задание оптимальных размеров кнопок для текущего окна
    const [buttonSize, setButtonSize] = useState({ width: 0 });

    useEffect(() => {
        const handleResize = () => {
            setButtonSize({
                width: window.innerWidth * 0.17,
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (active) {
        return (
            <div className={styles.active}>
                <Image src={type} width={buttonSize.width} height={buttonSize.width} alt="Button" />
            </div>
        )}
    else {
        return (
        <div className={styles.disable}>
            <Image src={type} width={buttonSize.width-15} height={buttonSize.width-15} alt="Button" />
        </div> 
        )
    }
};

export default ActionButton;