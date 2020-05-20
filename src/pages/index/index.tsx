import React from "react";
import { Container, Grid } from "@material-ui/core";
import Form from "../../components/form/Form";
import Result from "../../components/result/Result";

import styles from "./index.module.css";

function Index(): JSX.Element {
	return (
		<Container maxWidth="lg">
			<Grid container spacing={3} id={styles["main-container"]}>
				<Grid item sm={12} md={6}>
					<Form />
				</Grid>
				<Grid item sm={12} md={6}>
					<Result />
				</Grid>
			</Grid>
		</Container>
	);
}

export default Index;
