import { Link, Outlet } from 'umi';
import styles from './index.less';
console.log(BASE_SERVER,'BASE_SERVER')
export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/banyan666/Demo-react">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
