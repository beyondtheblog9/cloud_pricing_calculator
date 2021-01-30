import React from 'react';
import styled from 'styled-components';

const SelectElement = styled.select`
    font-weight: 300;
    font-size: 20px;
    font-family: Montserrat, Arial, sans-serif;
    
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
			<div>
				<div style={{margin: `30px 5px`}}>
					<label style={{margin: `10px 5px`}} htmlFor="platform">Platform: </label>
					<SelectElement placeholder="Platform" value={this.state.selectedPlatform} onChange={this.changePlatform}>
						<option>Choose a Platform</option>
						{this.state.platforms.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</SelectElement>
				</div>
				
				<div style={{margin: `30px 5px`}}>
					<label style={{margin: `10px 5px`}} htmlFor="Service">Service: </label>
					<SelectElement placeholder="Service" value={this.state.selectedService} onChange={this.changeService}>
						<option> Choose a Service </option>
						{this.state.services.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</SelectElement>
				</div>
			</div>
		)
	}
}

export default Dropdown;