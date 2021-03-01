import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, FormEvent, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/pages/LoginPage.module.css';


export default function Login(){
  const [username, setUsername] = useState('');

  const { setUserGit } = useContext(UserContext);

  async function getUserOnGit(e: FormEvent){
    e.preventDefault();

    await axios.get(`https://api.github.com/users/${username}`)
    .then(({data}) => {
      if(data.message) return alert('Username não encontrado');
      let name = data.name === null ? data.login : data.name;
      setUserGit(name, data.avatar_url)
    });
  }
   
  return(
    <div className={styles.container}>
      <div className={styles.logoBackground}>
        <img src="background.svg" alt=""/>
      </div>
      <div className={styles.loginContainer}>
        <img src="logo-complete.svg" alt=""/>

        <header>Bem-vindo</header>
        <main>
          <img src="icons/git.svg" alt="Logo Github"/>
          Faça login com seu Github para começar
        </main>

        <form onSubmit={getUserOnGit}>
          <div className={styles.InputGroup}>
            <input onChange={ e => setUsername(e.target.value)} value={username} type="text" placeholder="Digite seu username"/>
            <button type="submit">
              <img src="icons/arrow-next.svg" alt=""/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch(`https://github.com/login/oauth/access_token`)
//   const data = await res.json()

//   // if (data) {
//   //   return {
//   //     redirect: {
//   //       destination: '/',
//   //       permanent: false,
//   //     },
//   //   }
//   // }

//   console.log(data);

//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }