import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompleteChallenges } from "../components/CompleteChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { NextLevel } from '../components/NextLevel';
import { Profile } from "../components/Profile";
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  const { level } = useContext(ChallengesContext);
  const [modalIsActive, setModalIsActive] = useState(false);

  useEffect(() => {
    if (level > 1) {
      setModalIsActive(true);
    }
  }, [level]);

  return (
    <>
      <div className={styles.container} >
        <Head>
          <title>Inicio | Move.it</title>
        </Head>

        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompleteChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>



    </>
  )
}
