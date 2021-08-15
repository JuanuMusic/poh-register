import { useState } from "react";
import Head from "next/head";

import styles from "../styles/styles.module.scss";
import FormCard from "../components/FormCard";

import {
  CreateProfile,
  UploadPhoto,
  UploadVideo,
  ReviewProfile,
  SubmitProfile
} from "../components/Forms";

import FormCompleted from "../components/FormCompleted";

const App = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Proof of Humanity</title>
      </Head>
      <h1>Join the Registry!</h1>

      <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
        {formStep >= 0 && (
          <CreateProfile formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 1 && (
          <UploadPhoto formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 2 && (
          <UploadVideo formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 3 && (
          <ReviewProfile formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 4 && (
          <SubmitProfile formStep={formStep} nextFormStep={nextFormStep} />
        )}

        {formStep > 4 && <FormCompleted />}
      </FormCard>
    </div>
  );
};

export default App;
