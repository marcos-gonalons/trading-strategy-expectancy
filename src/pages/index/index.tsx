import React from "react";
import { Container, Grid } from "@material-ui/core";
import Form from "../../components/form/Form";
import Result from "../../components/result/Result";

function Index(): JSX.Element {
	return (
		<Container maxWidth="lg">
			<Grid container spacing={3}>
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
