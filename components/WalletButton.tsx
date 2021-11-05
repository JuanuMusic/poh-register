import React, { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { Button } from "@material-ui/core";

export default function WalletButton(props: {
	provider?: Web3Provider;
	loadWeb3Modal?: any;
	logoutOfWeb3Modal?: any;
}) {
	const [account, setAccount] = useState("");
	const [rendered, setRendered] = useState("");

	useEffect(() => {
		async function fetchAccount() {
			try {
				if (!props.provider) {
					return;
				}

				// Load the user's accounts.
				const accounts = await props.provider.listAccounts();
				setAccount(accounts[0]);

				// Resolve the ENS name for the first account.
				const name = await props.provider.lookupAddress(accounts[0]);

				// Render either the ENS name or the shortened account address.
				if (name) {
					setRendered(name);
				} else {
					setRendered(account.substring(0, 6) + "..." + account.substring(36));
				}
			} catch (err) {
				setAccount("");
				setRendered("");
				console.error(err);
			}
		}
		fetchAccount();
	}, [props.provider]);

	return (
		<Button
			onClick={() => {
				if (!props.provider) {
					props.loadWeb3Modal();
				} else {
					props.logoutOfWeb3Modal();
				}
			}}
		>
			{rendered === "" && "Connect Wallet"}
			{rendered !== "" && rendered}
		</Button>
	);
}