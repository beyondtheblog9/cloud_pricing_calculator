import React from 'react';
//import styled from 'styled-components';

export default () => {
    return(
        <div>
            <h3>Azure Virtual Machines</h3>
            <table>
                <tr>
                    <th>Machine type</th>
                    <th>vCPUs</th>
                    <th>Memory</th>
                    <th>Cost<br />(per hour)</th>
                </tr>
                <tr>
                    <td>B2S</td>
                    <td>2</td>
                    <td>4GB</td>
                    <td>$0.059</td>
                </tr>
                <tr>
                    <td>B4MS</td>
                    <td>4</td>
                    <td>16GB</td>
                    <td>$0.238</td>
                </tr>
                <tr>
                    <td>B8MS</td>
                    <td>8</td>
                    <td>32GB</td>
                    <td>$0.476</td>
                </tr>
                
            </table>
        </div>
    )
};