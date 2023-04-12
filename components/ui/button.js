import Link from "next/link";
import styles from "./button.module.css";

function Button(props) {
  const { children, link ,onClick } = props;

  if(!link){
    return <button className={styles['btn']} onClick={onClick}>{children}</button>
  }

  return (
    <Link className={styles["btn"]} href={link}>
      {children}
    </Link>
  );
}

export default Button;
