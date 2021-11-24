import styles from "../styles/styles.module.scss";
import Image from 'next/image';

export default function NavBar() {
  

  return (
    <div >
      <Image className={styles.headerLogo} src="/images/logopoh.png" alt="me" width="26" height="31"    />
    </div>
  );
}
