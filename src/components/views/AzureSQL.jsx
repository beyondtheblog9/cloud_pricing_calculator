import React from 'react';
//import styled from 'styled-components';

export default () => {
    return(
        <div>
            <h3>Azure SQL</h3>
            <table>
                <tr>
                    <th>Machine type</th>
                    <th>vCPUs</th>
                    <th>Memory</th>
                    <th>Cost<br />(per hour)</th>
                </tr>
                <tr>
                    <td>gen5-2</td>
                    <td>2</td>
                    <td>8GB</td>
                    <td>$0.3349</td>
                </tr>
                <tr>
                    <td>gen5-4</td>
                    <td>4</td>
                    <td>16GB</td>
                    <td>$0.6698</td>
                </tr>
                <tr>
                    <td>gen5-8</td>
                    <td>8</td>
                    <td>32GB</td>
                    <td>$1.3396</td>
                </tr>
            </table>
        </div>
    )
};