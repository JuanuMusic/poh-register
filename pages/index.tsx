import React, { useState, useEffect } from "react";
import Head from "next/head";

import styles from "../styles/styles.module.scss";
import FormCard from "../components/FormCard";
import NavBar from "../components/NavBar";
import {
	CreateProfile,
	UploadPhoto,
	UploadVideo,
	ReviewProfile,
	SubmitProfile,
} from "../components/Forms";

import FormCompleted from "../components/FormCompleted";
import useWeb3Modal from "../hooks/useWeb3Modal";
import ConnectWallet from "../components/Forms/ConnectWallet";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const App = () => {
	const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
	const [formStep, setFormStep] = useState(0);
	const [account, setAccount] = useState();

	const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

	const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

	useEffect(() => {
		async function fetchAccount() {
			try {
				if (!provider) {
					console.log("NO PROVIDER")
					return;
				}

				console.log("PROVIDER FOUND")

				// Load the user's accounts.
				const accounts = await provider.listAccounts();
				console.log("ACCOUNTS", accounts)

				// If accounts are found, go to the first step.
				if(accounts.length > 0) {
					setAccount(accounts[0]);
					setFormStep(5);
					return;
				}

				// // Resolve the ENS name for the first account.
				// const name = await props.provider.lookupAddress(accounts[0]);

				// // Render either the ENS name or the shortened account address.
				// if (name) {
				// 	setRendered(name);
				// } else {
				// 	setRendered(account.substring(0, 6) + "..." + account.substring(36));
				// }
			} catch (err) {
				// setAccount("");
				// setRendered("");
				// console.error(err);
			}
		}
		fetchAccount();
	}, [provider]);

	return (
		<List>
			<NavBar formStep={formStep}
					nextFormStep={nextFormStep}
					provider={provider}
					loadWeb3Modal={loadWeb3Modal}
					logoutOfWeb3Modal={logoutOfWeb3Modal} />
			<Grid container spacing={1} variant="fullWidth"
			      direction="column" justifyContent="space-around" alignItems="left" style={{marginTop: '4px'}}>
            <Grid item xs={12} md={12} >
              <ListItem className={styles.container}  alignItems="flex-start">
					<FormCard currentStep={formStep} prevFormStep={prevFormStep}>
						{formStep === 0 && (
							<ConnectWallet
								formStep={formStep}
								nextFormStep={nextFormStep}
								provider={provider}
								loadWeb3Modal={loadWeb3Modal}
								logoutOfWeb3Modal={logoutOfWeb3Modal}
							/>
						)}
						{formStep === 1 && (
							<CreateProfile prevFormStep={prevFormStep} formStep={formStep} nextFormStep={nextFormStep} />
						)}
						{formStep === 2 && (
							<UploadPhoto prevFormStep={prevFormStep} formStep={formStep} nextFormStep={nextFormStep} />
						)}
						{formStep === 3 && (
							<UploadVideo prevFormStep={prevFormStep} formStep={formStep} nextFormStep={nextFormStep} />
						)}
						{formStep === 4 && (
							<ReviewProfile prevFormStep={prevFormStep} formStep={formStep} nextFormStep={nextFormStep} />
						)}
						{formStep === 5 && (
							<SubmitProfile prevFormStep={prevFormStep} formStep={formStep} nextFormStep={nextFormStep} />
						)}

						{formStep > 5 && <FormCompleted />}
					</FormCard>
			</ListItem>
    </Grid>
	</Grid>
	</List>	
	);
};

export default App;
