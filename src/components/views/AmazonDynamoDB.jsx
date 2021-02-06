import React from 'react';
//import styled from 'styled-components';

export default () => {
    return(
        <div>
            <h3>Amazon DynamoDB Pricing</h3>
            <table>
                <tr>
                    <th>Write RUs<br />(per million)</th>
                    <th>Read RUs<br />(per million)</th>
                    <th>Storage<br />(per GB/month)</th>
                    <th>Backup<br />(per GB/month)</th>
                </tr>
                <tr>
                    <td>$1.4231</td>
                    <td>$0.285</td>
                    <td>$0.285</td>
                    <td>$0.114</td>
                </tr>
            </table>
        </div>
    )
};