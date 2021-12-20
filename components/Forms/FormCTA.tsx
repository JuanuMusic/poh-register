import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import ReturnBtn from "./ReturnBtn"
import styles from "../../styles/styles.module.scss";

export default function FormCTA(props) {
    return (
        <div className={styles.ctaSection}>
            <ReturnBtn currentStep={props.formStep} prevFormStep={props.prevFormStep} />
            <Button className={styles.btnSaUpVd} type="submit">
                <div className={styles.btnSave}>
                    <Image src="/images/logopohforbutton.png" alt="me" width="13" height="15"/>
                </div>
                {
                    props.submitProfile ?
                    <a>Submit profile</a> :
                    <a>Save &amp; Continue</a>
                }
            </Button>    
        </div>
    );
}