import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

function Stakes() {
	return (
		<Container>
			<Row>
				<header>
					<section>
						<div className="row">
							<div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
								<h3 className="">
									Polkadot Staking Calculator
								</h3>
								<p>Available staking rewards*</p>
								<span className="span">
									Up to <strong>15% </strong>
									APY
								</span>
							</div>

							{/*  --------------- main header right side--------------  */}
							{/* <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
								<div className="space-staking-currency-price relative box-100">
									<h3 className="displa">
										Polkadot (DOT) Price
									</h3>
									<h1 className="price">$ 29.90</h1>
								</div>
								<br />
							</div> */}
						</div>
					</section>
				</header>
				&nbsp;
				<div className="customCard">
					<div>
						<img src="./dot.png" alt="" />
						&nbsp;
						<span className="font">
							Calculate Polkadot staking reward
						</span>
						<br />
						<a
							href="/"
							title="Earn Rewards"
							className="space-staking-title-button"
						>
							Earn Rewards
						</a>
					</div>
					&nbsp;
					<div className="calculator">
						<div className="form">
							<div className="field_amount">
								<p>
									<label>Starting Polkadot Amount</label>
									&nbsp;
									<br />
									<br />
									<input
										type="number"
										className="amount"
										value="10"
									></input>
								</p>
							</div>
							<p>
								<label> Estimated Interest Rate (% APY):</label>
							</p>
							{/* range */}
							<div className="space_slider">
								<span id="resultrate">13</span>%
							</div>
							<input
								type="range"
								className="rate-sapce"
								main="1"
								max="100"
								stop="0.5"
								value="15"
								id="rangerate"
							></input>
							<br />
							<br />

							<p>
								<label> Length of Time in Months:</label>
							</p>
							{/* range */}
							<div className="space_slider">
								<span id="resultrate">12</span>
							</div>
							<input
								type="range"
								className="rate-sapce"
								main="1"
								max="100"
								stop="0.5"
								value="15"
								id="rangerate"
							></input>
						</div>
						<div className="pragrapgh">
							The calculator only shows an estimated staking
							reward. You can find out the exact value on the
							website of the <br />
							platform or exchange.
						</div>
					</div>
				</div>
			</Row>
			{/* second card */}
			<div className="right">
				<p>
					<label> Current Holdings Value</label>
					<br />
					<strong className="">$26.35</strong>
					<pre>0 KSM</pre>
				</p>
				<br />
				<div>
					<p>
						<label> ToTotal Rewards Value (365d)</label>
						<br />
						<strong className="">$3.94</strong>
						<pre>0.01495 KSM</pre>
					</p>
				</div>
				<br />
				<div>
					<p>
						<label> ToTotal Rewards Rate (365d)</label>
						<br />
						<strong className="">14.95%</strong>
						<pre>or 14.95% annualized</pre>
					</p>
				</div>
				<br />
				<div>
					<h6>
						Reward Frequency:
						<span className="accent"> 1d</span>
					</h6>
					<p>You might expect a reward of 0 KSM every 1 day.</p>
				</div>
				<br />
				<div>
					<h6>
						Network Share:
						<span className="accent"> 0.000001%</span>
					</h6>
					<p>Your share of the total network supply is 0.000001%.</p>
				</div>
				<br />
				<div>
					<h6>
						Adj. Reward:
						<span className="accent"> 8.27%</span>
					</h6>
					<p>
						In 365 days, your network share will change at the rate
						of 8.27% and will be 0%.
					</p>
				</div>
				<hr></hr>
				<section className="results_disclaimer__EqdOH">
					The effective earnings depend on many dynamic variables.
					Even the presented results are based on proprietary
					prediction formulas, we do not guarantee any kind of
					accuracy. Please read our
				</section>
			</div>
		</Container>
	);
}

export default Stakes;
