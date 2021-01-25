import React from 'react'
import { Grid } from '@material-ui/core'
// import styled from 'styled-components'

const MainStatus: React.FC = () => {
  return (
    <Grid item xs={3}>
      <p>ステータス</p>
      <table>
        <tbody>
          <tr>
            <td>HP</td>
            <td>10</td>
          </tr>
          <tr>
            <td>MP</td>
            <td>10</td>
          </tr>
          <tr>
            <td>移動</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ダメージ修正</td>
            <td>8</td>
          </tr>
          <tr>
            <td>命中修正</td>
            <td>12</td>
          </tr>
          <tr>
            <td>魔力</td>
            <td>10</td>
          </tr>
          <tr>
            <td>詠唱修正</td>
            <td>9</td>
          </tr>
          <tr>
            <td>装甲</td>
            <td>4</td>
          </tr>
          <tr>
            <td>魔法防御</td>
            <td>2</td>
          </tr>
          <tr>
            <td>ブロック</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </Grid>
  )
}

export default MainStatus

// const MainStatusWrap = styled.div`
//   background-color: #9595ff;
//   table {
//     table-layout: fixed;
//     border-collapse: collapse;
//     border: 1px solid;
//   }
// `
