import React from "react";
import { Container, Paper } from "@material-ui/core";

import styles from "./index.module.css";

function Index(): JSX.Element {
	return (
		<Container maxWidth="sm">
			<Paper id={styles["main-card"]} elevation={24}>
				abc
			</Paper>
		</Container>
	);
}

export default Index;