import styles from "../styles/styles.module.scss";

export default function FormCard({ children, currentStep, prevFormStep }) {
  return (
    <div className={styles.formCard}>
      {currentStep < 5 && (
        <>
          {currentStep > 0 && (
            <button
              className={styles.back}
              onClick={prevFormStep}
              type="button"
            >
              Back
            </button>
          )}

          <span className={styles.steps}>Step {currentStep + 1}/5</span>
        </>
      )}
      {children}
    </div>
  );
}
