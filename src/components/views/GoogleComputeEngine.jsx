import React from 'react';
//import styled from 'styled-components';

export default () => {
    return(
        <div>
            <h3>Google Compute Engine</h3>
            <table>
                <tr>
                    <th>Machine type</th>
                    <th>vCPUs</th>
                    <th>Memory</th>
                    <th>Cost<br />(per hour)</th>
                </tr>
                <tr>
                    <td>e2-standard-2</td>
                    <td>2</td>
                    <td>8GB</td>
                    <td>$0.080486</td>
                </tr>
                <tr>
                    <td>e2-standard-4</td>
                    <td>4</td>
                    <td>16GB</td>
                    <td>$0.160972</td>
                </tr>
                <tr>
                    <td>e2-standard-8</td>
                    <td>8</td>
                    <td>32GB</td>
                    <td>$0.321944</td>
                </tr>
            </table>
        </div>
    )
};