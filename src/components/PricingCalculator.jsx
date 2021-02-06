import React ,{ useState }from 'react';
import styled from 'styled-components';

import Dropdown from './Dropdown';
import PricingView from './views/PricingView'


const ScreenHeight = styled.div`
    height: 100%;
`;
const Heading1 = styled.p`
    left: 400px;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 32px; 
    line-height:32px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #000000;
`;
const PriceScreen = styled.div`
    margin: 0 0 20px 30px;
    table{
        margin: 0 0 0 10px;
        border-spacing: 0.6rem;
        td{
            padding: 0.7rem;
        }
    }
`;
const MainContainer = styled.div`
    min-height: 40em;
    font-family: Montserrat;
    margin: 10px 80px;
    display: flex; 
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    background: #FFFFFF;
    border-radius: 30px;
`;
const ContainerLeft = styled.div`
    width: 45%; 
`;
const ContainerRight = styled.div`
    flex-grow: 1;
`;
const ImageBox = styled.div`
    margin: 10px 0 0 250px;
`;

const Amazon = ['Amazon EC2', 'Amazon EKS', 'Amazon DynamoDB', 'Amazon Relational Database Service'];
const Google = ['Google Compute Engine', 'Google Kubernetes Engine', 'Google Cloud Bigtable', 'Google Cloud SQL'];
const Azure = ['Azure Virtual Machines', 'Azure Kubernetes Service', 'Azure CosmosDB', 'Azure SQL'];



export default () => {
    const [selectedService, setselectedService] = useState();
    const [option1, setOption1] = useState();
    const [option2, setOption2] = useState();
    const getService = (selectedService) => {
        setselectedService(selectedService);
        const platform = selectedService.split(" ")[0];
        if(platform === "Amazon"){
            const index = Amazon.indexOf(selectedService);
            setOption1(Google[index]);
            setOption2(Azure[index]);
        }
        else if(platform === "Google"){
            const index = Google.indexOf(selectedService);
            setOption1(Amazon[index]);
            setOption2(Azure[index]);
        }
        else if(platform === "Azure"){
            const index = Azure.indexOf(selectedService);
            setOption1(Amazon[index]);
            setOption2(Google[index]);
        }
    }
    return(
            <ScreenHeight>
                <div style={{ width: `100%`}}>
                    <Heading1>Pricing Calculator</Heading1>
                    <MainContainer>
                        <ContainerLeft>
                            <p style={{fontWeight: `400`, fontSize: `28px`, textAlign: `center`}}>Cloud Service Search</p>
                            <div style={{ margin: `60px 60px`}}>
                                <Dropdown  method={getService}/>
                            </div>
                            <p style={{fontWeight: `400`, fontSize: `28px`, textAlign: `center`}}>Alternative options</p>
                            <ImageBox>
                                <p>{option1}</p>
                                <p>{option2}</p>
                            </ImageBox>
                        </ContainerLeft>
                        <ContainerRight style={{ borderLeft: `solid 4px #E5E5E5` }}>
                            <p style={{fontWeight: `400`, fontSize: `28px`, textAlign: `center`}}>Pricing</p>
                            <PriceScreen>
                                <PricingView selectedService= {selectedService} option1= {option1} option2= {option2}/>
                            </PriceScreen>
                        </ContainerRight>
                    </MainContainer>
                </div> 
            </ScreenHeight>
        )
};