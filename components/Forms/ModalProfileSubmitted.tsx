import React from 'react';
import Image from 'next/image';
import styles from "../../styles/styles.module.scss";

export default function ModalProfileSubmitted(props) {

    const hideModal = () => {
        props.hideModal();
    };

    const blockHideModal = ev => {
        ev.preventDefault();
        ev.stopPropagation();
        return false;
    };

    return (
        <div className={styles.modalProfileSubmittedOverlay} onClick={hideModal}>
            <div className={styles.modalProfileSubmittedView} onClick={blockHideModal}>
                <div className={styles.modalProfileSubmittedHeader}>
                    <Image src="/images/logopoh.png" alt="PoH" width="115" height="112" />
                    <div className={styles.modalProfileSubmittedHeaderText} style={{marginBottom: 0, marginLeft: '10px'}}>
                        <p>Congratulations!</p>
                        <p>Your profile was submitted</p>
                    </div>
                </div>
                <div>
                    <p className={styles.modalProfileSubmittedInputText}>You can subscribe to receive notifications about your profile status. (Recommended)</p>
                    <div className={styles.modalProfileSubmittedInput}>
                        <input placeholder="Enter your email" />
                        <button>Save</button>
                    </div>
                </div>
                <div className={styles.modalProfileSubmittedContainer}>
                    <h3 className={styles.modalProfileSubmittedHeaderText}>What is next?</h3>
                    <p>Your profile is now on “Vouching Phase” until you get vouched for and your deposit gets fully funded.</p>   
                </div>
                <div className={styles.modalProfileSubmittedContainer}>
                    <h3 className={styles.modalProfileSubmittedHeaderText}>How do I get vouched?</h3>
                    <ul>
                        <li>Share the link to your profile with someone already in the Registry: Link.</li>
                        <li>Join the Vouching Group on Telegram.</li>
                        <li>Find people to Vouch for you on Telegram.</li>
                        <li>Joing our community on Discord.</li>
                    </ul>
                </div>
                <div>
                    <button className={styles.modalProfileSubmittedNextSteps}>Next steps</button>
                </div>
            </div>
        </div>
    );
}