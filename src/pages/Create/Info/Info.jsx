import React from 'react';
import styles from './Info.module.scss';

const Info = ({setShowInfo}) => {
    return (<>
        <div className={styles.container}>
            <p>
                Для каждого проекта мы создаем ботов со своим набром характеритик. Чем больше эмулированные заходы
                будут
                похожи на поведение реальных пользователей, тем ниже вероятность того, что Яндекс уличит ваш сайт в
                "накрутке пользовательских факторов" и наложит санкции на ваш ресурс. Ниже мы просим вас рассказать
                подробнее о посетителях вашего сайта, чтобы мы смогли создать максимально похожих ботов. Проявите
                максимальную внимательность при заполнении полей ниже.
            </p>
            <p>
                ВАЖНО! Статистичекие данные необходимо заполнить для посетителей с поисковой системы Яндекс. Если у
                вас
                возникают сложности с заполнением полей, пр и нажатии на значок "?" рядом с полем, вы получите
                подробную
                инструкцию.
            </p>
        </div>
        <button className={styles.hide} type="button" onClick={() => setShowInfo(false)}>
            Больше не показывать
        </button>
    </>);
};

export default Info;
