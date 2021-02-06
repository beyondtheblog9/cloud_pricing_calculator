import React from 'react';

import AmazonDynamoDB from './AmazonDynamoDB';
import AmazonEC2 from './AmazonEC2';
import AmazonEKS from './AmazonEKS';
import AmazonRDS from './AmazonRDS';
import AzureCosmosDB from './AzureCosmosDB';
import AzureVM from './AzureVM';
import AzureKubernetes from './AzureKubernetes';
import AzureSQL from './AzureSQL';
import GoogleCloudBigtable from './GoogleCloudBigtable';
import GoogleCloudSQL from './GoogleCloudSQL';
import GoogleComputeEngine from './GoogleComputeEngine';
import GoogleKubernetesEngine from './GoogleKubernetesEngine';

export default ({ selectedService, option1, option2 }) => {
    let screenToShow = [];
    screenToShow.push(selectedService);
    screenToShow.push("break");
    screenToShow.push("alternate");
    screenToShow.push("break");
    screenToShow.push(option1);
    screenToShow.push("break");
    screenToShow.push(option2);
    const screenToShowList = screenToShow.map((viewToShow) => {
        switch (viewToShow) {
            case 'Amazon EC2':
                return <AmazonEC2 />;
            case 'Amazon EKS':
                return <AmazonEKS />;
            case 'Amazon DynamoDB':
                return <AmazonDynamoDB />;
            case 'Amazon Relational Database Service':
                return <AmazonRDS />;
            case 'Google Compute Engine':
                return <GoogleComputeEngine />;
            case 'Google Kubernetes Engine':
                return <GoogleKubernetesEngine />;
            case 'Google Cloud Bigtable':
                return <GoogleCloudBigtable />; 
            case 'Google Cloud SQL':
                return <GoogleCloudSQL />;
            case 'Azure Virtual Machines':
                return <AzureVM />;
            case 'Azure Kubernetes Service':
                return <AzureKubernetes />;
            case 'Azure CosmosDB':
                return <AzureCosmosDB />;
            case 'Azure SQL':
                return <AzureSQL />;
            case 'alternate':
                return <h2 style={{ margin: `0 0 0 30%`}}>Alternate Options</h2>;
            case 'break':
                return <br />;
            default:
                return (
                    <div />
                );
        }
    });

    return <div>{screenToShowList}</div>;
};