import { useFormData } from "../context";
import styles from "../styles/styles.module.scss";
 
export default function FormCard({ children, currentStep, prevFormStep }) {
  const { data } = useFormData();

  return (
    <div >
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

          {/* <span className={styles.steps}>Step {currentStep + 1}/5</span> */}
        </>
      )}
      {children}
      {/* <hr style={{margin: "2rem 0;"}} /> */}
      {/* <h3>Profile Data</h3> */}
      <ul>
      {
        Object.keys(data).map((key, i) => {
          if (typeof(data[key]) === 'object' && data[key][0] != null) {
            // Get filename from FileList object
            return <li key={i}><strong>filename:</strong> {data[key][0].name}</li>;
          } else if (typeof(data[key]) === 'boolean') {
            // Get result from boolean checkbox
            return <li key={i}><strong>{key}:</strong> {data[key].toString()}</li>
          }

          return <li key={i}><strong>{key}:</strong> {data[key]}</li>;
        })
      }
      </ul>
    </div>
  );
}
