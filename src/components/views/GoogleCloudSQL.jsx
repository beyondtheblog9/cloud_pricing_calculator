import React from 'react';
//import styled from 'styled-components';

export default () => {
    return(
        <div>
            <h3>Google Cloud SQL</h3>
            <table>
                <tr>
                    <th>Machine type</th>
                    <th>vCPUs</th>
                    <th>Memory</th>
                    <th>Cost<br />(per hour)</th>
                </tr>
                <tr>
                    <td>custom-2</td>
                    <td>2</td>
                    <td>8GB</td>
                    <td>$0.16632</td>
                </tr>
                <tr>
                    <td>custom-4</td>
                    <td>4</td>
                    <td>16GB</td>
                    <td>$0.33264</td>
                </tr>
                <tr>
                    <td>custom-8</td>
                    <td>8</td>
                    <td>32GB</td>
                    <td>$0.66528</td>
                </tr>
            </table>
        </div>
    )
};