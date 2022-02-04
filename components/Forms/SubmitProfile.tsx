import React from 'react';
import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";
import ModalProfileSubmitted from "./ModalProfileSubmitted";
import StepPr from "../../components/StepPr";

import { useForm } from "react-hook-form";
import FormCTA from "./FormCTA";

export default function SubmitProfile({ formStep, nextFormStep, prevFormStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setFormValues } = useFormData();
  const [checkedOpt, setCheckedOpt] = React.useState("");
  const [modalProfileSubmitted, setModalProfileSubmitted] = React.useState(false);

  React.useEffect(() => {
    setCheckedOpt('selfFundOption');
  }, []);

  const onSubmit = _ => {
    setModalProfileSubmitted(true);
  };

  const setCheckedOption = (opt) => setCheckedOpt(opt);
  const hideModal = () => setModalProfileSubmitted(false);

  return (
    <div className={`${styles.submitProfileView} ${formStep === 5 ? styles.showForm : styles.hideForm}`}>
      <StepPr />
      <h2 className={styles.submitProfileTitle}>Submit Profile</h2>
      <p className={styles.submitProfileText}>
        Choose how to fund your submission. The deposit is reimbursed after successful registration, and lost after failure. Any amount not contributed now can be put up by crowdfunders later.
      </p>
      <form onClick={handleSubmit(onSubmit)}>
        <div className={styles.submitProfileRadioBtnGroup}>
          <div className={`${styles.submitProfileInputParentGroup} ${styles.submitProfileInputGroup}`}>
            <input className={`${styles.submitProfileRadio}
              ${
                checkedOpt === 'selfFundOption' ? styles.submitProfileRadioChecked : ''
              }
            `}
                   type="radio"
                   name="selfFundOption"
                   id="selfFundOption"
                   onClick={_ => setCheckedOption('selfFundOption')}
                   checked={checkedOpt === 'selfFundOption'} />
            <label for="selfFundOption"
                   className={styles.submitProfileText}>
              Self-fund the total deposit required: <span className={styles.selfFundAmount}>0.184 ETH</span>.
            </label>
          </div>
          <div className={styles.submitProfileInputParentGroup}>
            <div className={styles.submitProfileInputGroup}>
              <input className={`${styles.submitProfileRadio} ${
                checkedOpt === 'crowdfundOption' ? styles.submitProfileRadioChecked : ''
              }`}
                     type="radio"
                     name="crowdfundOption"
                     id="crowdfundOption"
                     onClick={_ => setCheckedOption('crowdfundOption')}
                     checked={checkedOpt === 'crowdfundOption'} />
              <label for="crowdfundOption"
                     className={`${styles.submitProfileText} ${styles.submitProfileLbl}`}>
                Crowdfund the deposit required. It means you want to submit your profile without paying for the deposit or only partially (your profile will be blocked in the starting phase of the validation process until someone pays the deposit for you). You can find someone to pay for you in the next pages.
              </label>
            </div>
            <div className={styles.submitProfileInputGroupAddr}>
              <label className={`${styles.submitProfileText} ${styles.submitProfileAddrLabel}`}>Input initial amount (ETH)</label>
              <input className={styles.submitProfileInputAddr} placeholder="Leave it blank if you want to crowdfund the entire deposit" type="text" />
            </div>
          </div>
        </div>
        <p className={`${styles.submitProfileText} ${styles.submitProfileAdv}`}>
          Clicking Submit will trigger a transaction confirmation popup in your wallet after a few seconds. Confirm that transaction and wait for it to be validated. This is the irrevokable step - a faulty submission photo or video will lead to loss of deposit without recourse.
        </p>
        <FormCTA prevFormStep={prevFormStep} formStep={formStep} submitProfile={true} />
      </form>
      <p className={`${styles.submitProfileText} ${styles.submitProfileTerms}`}>By submitting your profile you confirm you accept the <a href="#" className={styles.registrationRulesLink}>Registration Rules</a>.</p>
      {
        modalProfileSubmitted && 
        <ModalProfileSubmitted hideModal={hideModal} />
      }
    </div>
  );
}
