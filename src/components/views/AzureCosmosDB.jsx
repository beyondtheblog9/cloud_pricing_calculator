import React from 'react';
//import styled from 'styled-components';

export default () => {
    return(
        <div>
            <h3>Azure CosmosDB</h3>
            <table>
                <tr>
                    <th>Request Units<br />(per 100RUs/sec)</th>
                    <th>Storage<br />(per GB/month)</th>
                    <th>Backup<br />(per GB/month)</th>
                </tr>
                <tr>
                    <td>$0.0091</td>
                    <td>$0.285</td>
                    <td>$0.114</td>
                </tr>
            </table>
        </div>
    )
};