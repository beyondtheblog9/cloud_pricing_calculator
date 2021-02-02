import React from 'react';
import styled from 'styled-components';

const SelectElement = styled.select`
    font-weight: 300;
    font-size: 20px;
    font-family: Montserrat, Arial, sans-serif;
	
	box-shadow: 0 5px 12px rgba(0,0,0,0.4);
    padding: 1em 4em 1em 1.5em;
    background: #4d5061;
    color: white;

    //appearance: none;
    border: 0;
`;

const CustomSelect = styled.div`
	margin: 15px 0;
	position: relative;
	.custom-arrow {
		position: absolute;
		top: 0;
		right: 0;
		display: block;
		background: #3b3c47;
		height: 100%;
		width: 4em;
		pointer-events: none;
	}
	.custom-arrow::before,
	.custom-arrow::after {
		--size: 0.45em;

		content: '';
		position: absolute;
		width: 0;
		height: 0;

		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.custom-arrow::before {
		border-left: var(--size) solid transparent;
		border-right: var(--size) solid transparent;
		border-bottom: var(--size) solid rgba(255, 255, 255, 0.5);

		top: 40%;
	}

	.custom-arrow::after {
		border-left: var(--size) solid transparent;
		border-right: var(--size) solid transparent;
		border-top: var(--size) solid rgba(255, 255, 255, 0.5);

		top: 60%;
	}
`;


class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			platforms : [],
			services : [],
            selectedPlatform : 'None',
            selectedService : 'None',
		};
        this.changePlatform = this.changePlatform.bind(this);
        this.changeService = this.changeService.bind(this);
	}
  
	componentDidMount() {
		this.setState({
			platforms : [
				{ name: 'Amazon Web Services', services: ['AWS Lambda', 'Amazon EC2', 'AmazonEKS', 'Amazon DynamoDB', 'Amazon Relational Database Service'] },
				{ name: 'Google Cloud Platform', services: ['Google App Engine', 'Google Compute Engine', 'Google Kubernetes Engine', 'Google Cloud Bigtable', 'Google Cloud SQL'] },
				{ name: 'Microsoft Azure', services: ['Azure Web Apps', 'Azure Virtual Machines', 'Azure Kubernetes Service', 'Azure CosmosDB', 'Azure SQL'] }
			]
		});
	}
	changePlatform(event) {
        if(event.target.value !== 'Choose a Platform'){
		this.setState({selectedPlatform: event.target.value});
        this.setState({services : this.state.platforms.find(p => p.name === event.target.value).services});
        }
    }
    
    changeService(event) {
        this.setState({selectedService: event.target.value});
        this.props.method(event.target.value);
	}
    
    
	render() {
		return (
			<div style={{display: `grid`, placeItems: `center`}}>
				<CustomSelect>
					<label style={{fontWeight: `600`, margin: `10px 5px`}} htmlFor="platform">Platform: </label>
					<SelectElement placeholder="Platform" value={this.state.selectedPlatform} onChange={this.changePlatform}>
						<option>Choose a Platform</option>
						{this.state.platforms.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</SelectElement>
					<span className="custom-arrow"></span>
				</CustomSelect>
				
				
				<CustomSelect>
				<label style={{fontWeight: `600`,margin: `10px 5px`}} htmlFor="Service">Service: </label>
					<SelectElement placeholder="Service" value={this.state.selectedService} onChange={this.changeService}>
						<option> Choose a Service </option>
						{this.state.services.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</SelectElement>
					<span className="custom-arrow"></span>
				</CustomSelect>
			</div>
		)
	}
}

export default Dropdown;