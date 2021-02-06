import React from 'react';
//import styled from 'styled-components';

export default () => {
    return(
        <div>
            <h3>Amazon EC2</h3>
            <table>
                <tr>
                    <th>Machine type</th>
                    <th>vCPUs</th>
                    <th>Memory</th>
                    <th>Cost<br />(per hour)</th>
                </tr>
                <tr>
                    <td>t4g.large</td>
                    <td>2</td>
                    <td>8GB</td>
                    <td>$0.0448</td>
                </tr>
                <tr>
                    <td>t4g.xlarge</td>
                    <td>4</td>
                    <td>16GB</td>
                    <td>$0.0896</td>
                </tr>
                <tr>
                    <td>t4g.2xlarge</td>
                    <td>8</td>
                    <td>32GB</td>
                    <td>$0.1792</td>
                </tr>
            </table>
        </div>
    )
};