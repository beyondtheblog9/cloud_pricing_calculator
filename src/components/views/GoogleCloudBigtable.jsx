import React from 'react';
//import styled from 'styled-components';

export default () => {
    return(
        <div>
            <h3>Google Cloud Bigtable</h3>
            <table>
                <tr>
                    <th>Node cost<br />(per node/hour)</th>
                    <th>Storage<br />(per GB/month)</th>
                    <th>Backup<br />(per GB/month)</th>
                </tr>
                <tr>
                    <td>$0.748</td>
                    <td>$0.030</td>
                    <td>$0.030</td>
                </tr>
            </table>
        </div>
    )
};