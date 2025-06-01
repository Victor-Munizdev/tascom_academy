import React from 'react';
import styles from "./styles.module.css";
interface Props {
    children: React.ReactNode;
}

export default function Button({ children }: Props) {
    return <button className={styles.button}>{children}</button>;
}
