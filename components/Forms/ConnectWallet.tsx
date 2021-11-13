import styles from "../../styles/styles.module.scss";
import { useForm } from "react-hook-form";
import WalletButton from "../WalletButton";
import useWeb3Modal from "../../hooks/useWeb3Modal";
import { Web3Provider } from "@ethersproject/providers";

//Public
   


export default function ConnectWallet({ formStep, nextFormStep, provider, loadWeb3Modal, logoutOfWeb3Modal })

{
  const { register, handleSubmit, formState: { errors } } = useForm();
  //const { setFormValues } = useFormData();

  const onSubmit = (values) => {
    //setFormValues(values);
    nextFormStep();
  };
  
  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <h2>Connect your wallet</h2>
      <WalletButton
          onClick={() => nextFormStep()}
          provider={provider as Web3Provider}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
        />

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <label htmlFor="displayName">Display Name*</label>
          <input type="text" {...register("displayName", { required: true })} />
          {errors.displayName && <span>This field is required</span>}
        </div>

        <div className={styles.formRow}>
          <label htmlFor="bio">Short Bio</label>
          <input type="text" {...register("bio")} />
        </div>

        <button type="submit">
          Next
        </button>
      </form> */}
    </div>
    
  );
}