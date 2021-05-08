import React, { Component } from 'react'
import { Spring, animated } from 'react-spring'
import styled from 'styled-components'

export class Component2 extends Component {
    render() {
        return (
            <Spring 
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 1000, duration: 1000 }}>
                    { props => (
                <div style={props}>
                <div style={c2Style}>
                    <h1>Продажа2 и изготовление расширительных баков</h1>
                    <p>Завод2 производство. Доставка по России</p>
                </div>
                </div>
                )}
            </Spring>
        )
    }
}

const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}


export default Component2

