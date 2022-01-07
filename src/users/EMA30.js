import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import TimeSeries from "./TimeSeries";

function EMA30() {
	return (
		<Container>
			<Row>
				<div className="customCard about">
					<section>
						<div>
							<h3 className="text-center ">EMA 30</h3>
						</div>
						<TimeSeries width={400} height={300} />
					</section>
				</div>
			</Row>
		</Container>
	);
}

export default EMA30;
