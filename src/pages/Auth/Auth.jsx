import React from 'react';
import {Formik, Form, Field} from 'formik';
import MaskedInput from 'react-text-mask';
import styles from './Auth.module.scss';

// SVG:
import {ReactComponent as LogoSvg} from 'assets/svg/logo.svg';

const Auth = ({setIsAuth}) => {
    const initialValues = {
        phone: '',
        pass: '',
    };
    const onSubmit = (values) => {
        console.log(values);
        setIsAuth(true);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <LogoSvg width={90} height={41}/>
            </header>
            <main className={styles.main}>
                <div className={styles.wrapper}>
                    <Formik initialValues={initialValues}
                            onSubmit={onSubmit}
                    >
                        <Form className={styles.form}>
                            <h1 className={styles.title}>Добро пожаловать в Пантеон!</h1>
                            <h2 className={styles.subtitle}>
                                Пантеон - это система, созданная, чтобы улучшить поведенческие факторы на вашем сайте и
                                эмулировать дополнительных посетителей с помощью ботов, максимально похожих на вашу
                                аудиторию.
                            </h2>
                            <label className={styles.field}>
                                <Field id="phone" name="phone">
                                    {({field}) => (<>
                                        <MaskedInput
                                            {...field}
                                            className={styles.input}
                                            type="text"
                                            placeholder="Введите номер телефона..."
                                            mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                                            maskchar="-"
                                        />
                                    </>)}
                                </Field>
                            </label>
                            <label className={styles.field}>
                                <Field className={styles.input}
                                       id="pass"
                                       name="pass"
                                       placeholder="Введите пароль..."
                                       type="password"
                                />
                            </label>
                            <button className={styles.login} type="submit">Войти</button>
                            <button className={styles.restore} type="button">Восстановить пароль</button>
                        </Form>
                    </Formik>
                </div>
            </main>
        </div>
    );
};

export default Auth;
