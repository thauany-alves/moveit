import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { username, avatar_url } = useContext(UserContext);
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src={avatar_url} alt="Profile img" />
      <div>
        <strong>{username}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}</p>
      </div>
    </div>
  );
}