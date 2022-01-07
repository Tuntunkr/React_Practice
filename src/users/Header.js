import React from "react";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<>
			<Navbar expand="lg">
				<Container>
					<Navbar.Brand href="/" className="logo">
						{/* Dot calculator */}
						<img src="./polkacal-logo.svg" width="150" alt=" " />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						id="basic-navbar-nav"
						className="customNav"
					>
						<Nav className="">
							<NavLink to="/EMA30">EMA30</NavLink>
							<NavLink to="/Stakes">Staking</NavLink>
							<NavLink to="/About">About</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
