import React from 'react';
import styles from "../../styles/styles.module.scss";


export default function ReturnBtn({ currentStep, prevFormStep }) {
    return (currentStep < 6) ? (
        <>
          {currentStep > 0 && (
            <button 
            className={`${styles.back} ${currentStep === 2 ? styles.active : ''} ${currentStep === 3 ? styles.activeUpVd : ''}`}
              onClick={prevFormStep}
              type="button"
            >
              Return
            </button>
          )}
        </>
      ) : (<></>);
}