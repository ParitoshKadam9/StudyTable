import Taskbar from '../components/taskbar/taskbar';
import '../styles/globals.css'
import style from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <Taskbar />
      </div>
      <div className={style.right}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp
