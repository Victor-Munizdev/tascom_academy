import styles from "./styles.module.css";
import type { IInputProps } from "./types";

export default function Input({ name, register, ...props }: IInputProps) {
  return <input className={styles.input} {...props} {...register(name)} />;
}
