import styles from './speaker-box.module.css';

export interface SpeakerBoxProps {
    authenticated?: boolean;
    image: string;
    name: string;
}

export const SpeakerBox = ({ authenticated, image, name }: SpeakerBoxProps) => {
    return (
        <div className={authenticated?styles.rootAuthed:styles.root}>
            <img
                src={image}
                className={styles.profileImage}
             alt={image}/>
            {authenticated?             <div className={styles.nameBox}><b>{name}</b></div> :  <div className={styles.nameBox}>{name}</div>}

        </div>
    );
};
