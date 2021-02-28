import styles from '../styles/pages/LoginPage.module.css';

export default function Login(){
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

        <div className={styles.InputGroup}>
          <input type="text" placeholder="Digite seu username"/>
          <button>
            <img src="icons/arrow-next.svg" alt=""/>
          </button>
        </div>
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