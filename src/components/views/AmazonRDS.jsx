import React from 'react';
//import styled from 'styled-components';

export default () => {
    return(
        <div>
            <h3>Amazon Relational Database Service</h3>
            <table>
                <tr>
                    <th>Machine type</th>
                    <th>vCPUs</th>
                    <th>Memory</th>
                    <th>Cost<br />(per hour)</th>
                </tr>
                <tr>
                    <td>db.t3.large</td>
                    <td>2</td>
                    <td>8GB</td>
                    <td>$0.212</td>
                </tr>
                <tr>
                    <td>db.t3.xlarge</td>
                    <td>4</td>
                    <td>16GB</td>
                    <td>$0.424</td>
                </tr>
                <tr>
                    <td>db.t3.2xlarge</td>
                    <td>8</td>
                    <td>32GB</td>
                    <td>$0.848</td>
                </tr>
            </table>
        </div>
    )
};