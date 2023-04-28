import { ReactNode } from "react";
import styles from "./FormLayout.module.css";

type FormLayoutProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function FormLayout({
  children,
  onClick,
  className,
}: FormLayoutProps) {
  return (
    <section
      className={`${styles.formContainer} ${className}`}
      onClick={onClick}
    >
      <div className={styles.contentWrapper}>{children}</div>
    </section>
  );
}
