import React from 'react'
import { Container, Table } from 'react-bootstrap'
import Link from 'gatsby-link'
import styled from 'styled-components'



function TableZilmet() {
    return (
        <div>
            <TableSetting>
               <Container>
                  <Table responsive striped bordered>
                      <thead>
                        <tr>
                          <th>Model / Объем, л</th>
                          <th>Мембрана</th>
                          <th>Давление, бар</th>
                          <th>Диаметр, мм</th>
                          <th>Высота, мм</th>
                          <th>Подкл. дюйм</th>
                          <th>Вес, кг</th>
                          <th>Цена (руб.)</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>Zilmet Ultra 200</td>
                          <td>Сменная(Италия)</td>
                          <td>10</td>
                          <td>780</td>
                          <td>1720</td>
                          <td>2</td>
                          <td>145</td>
                          <td><b>66270 руб.</b></td>
                        </tr>
                        <tr>
                          <td>Zilmet Ultra  300</td>
                          <td>Сменная(Италия)</td>
                          <td>10</td>
                          <td>780</td>
                          <td>1720</td>
                          <td>2</td>
                          <td>145</td>
                          <td><b>66270 руб.</b></td>
                        </tr>
                        <tr>
                          <td>Zilmet Ultra  500</td>
                          <td>Сменная(Италия)</td>
                          <td>10</td>
                          <td>780</td>
                          <td>1720</td>
                          <td>2</td>
                          <td>145</td>
                          <td><b>66270 руб.</b></td>
                        </tr>
                        <tr>
                          <br></br>
                        </tr>
                        <tr>
                          <td>Zilmet Ultra  750</td>
                          <td>Сменная(Италия)</td>
                          <td>10</td>
                          <td>780</td>
                          <td>1720</td>
                          <td>2</td>
                          <td>145</td>
                          <td><b>66270 руб.</b></td>
                        </tr>
                        <tr>
                          <td>Zilmet Ultra  1000</td>
                          <td>Сменная(Италия)</td>
                          <td>10</td>
                          <td>780</td>
                          <td>2200</td>
                          <td>2</td>
                          <td>165</td>
                          <td><b>89350 руб.</b></td>
                        </tr>
                        <tr>
                          <td>Zilmet Ultra  1500</td>
                          <td>Сменная(Италия)</td>
                          <td>10</td>
                          <td>960</td>
                          <td>2350</td>
                          <td>2</td>
                          <td>244</td>
                          <td><b>238000 руб.</b></td> 
                        </tr>
                        <tr>
                          <td>Zilmet Ultra 2000</td>
                          <td>Сменная(Италия)</td>
                          <td>10</td>
                          <td>1100</td>
                          <td>2450</td>
                          <td>2</td>
                          <td>375</td>
                          <td><b>355780 руб.</b></td> 
                        </tr>
                        <tr>
                          <td>Zilmet Ultra 2500</td>
                          <td>Сменная(Италия)</td>
                          <td>10</td>
                          <td>1200</td>
                          <td>2800</td>
                          <td>2</td>
                          <td>307</td>
                          <td><b>395174 руб.</b></td> 
                        </tr>
                        <tr>
                          <td>Zilmet Ultra 3000</td>
                          <td>Сменная(Италия)</td>
                          <td>10</td>
                          <td>1250</td>
                          <td>2700</td>
                          <td>2 1/2</td>
                          <td>550</td>
                          <td><b>425650 руб.</b></td> 
                        </tr>
                        <tr>
                          <td>Zilmet Ultra 5000</td>
                          <td>Сменная(Италия)</td>
                          <td>10</td>
                          <td>1500</td>
                          <td>3100</td>
                          <td>3</td>
                          <td>655</td>
                          <td><b>685100 руб.</b></td> 
                        </tr>
                        <tr>
                          <td>Zilmet Ultra 10 000</td>
                          <td>Сменная(Италия)</td>
                          <td>10</td>
                          <td>1600</td>
                          <td>5750</td>
                          <td>4</td>
                          <td>1920</td>
                          <td><b>1750500 руб.</b></td> 
                        </tr>
                      </tbody>
                  </Table>
                </Container>
            </TableSetting>
            
        </div>
    )
}

export default TableZilmet


const TableSetting = styled.div`
    white-space: nowrap;
    
`



