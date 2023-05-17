import styles from './speaker-box.module.css';

export interface SpeakerBoxProps {
    authenticated?: boolean;
}

export const SpeakerBox = ({ authenticated }: SpeakerBoxProps) => {
    return (
        <div className={authenticated?styles.rootAuthed:styles.root}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                className={styles.profileImage}
             alt={"username"}/>
            {authenticated?             <div className={styles.nameBox}><b>Jake Downie</b></div> :  <div className={styles.nameBox}>Jake Downie</div>}

        </div>
    );
};
