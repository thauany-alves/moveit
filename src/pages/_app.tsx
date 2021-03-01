import '../styles/global.css';
import UserProvider from '../contexts/UserContext';


function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp
