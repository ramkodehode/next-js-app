import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className={styles.bodyLayout}> {children} </div>
    </>
  );
};

export default Layout;
