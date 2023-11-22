/*
 * @Author: poro poroone@163.com
 * @Date: 2023-11-21 19:54:45
 * @LastEditors: poro poroone@163.com
 * @LastEditTime: 2023-11-22 13:09:00
 * @FilePath: \react\脚手架\react_\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

class HYTestCpn extends Component {
    render() {
        return <h2>HYTestCpn</h2>
    }
    componentWillUnmount() {
        console.log("HYTestCpn ComponentWillUnmount 卸载")
    }
}

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        console.log("调用了 constructor 方法")
    }
    render() {
        let { counter } = this.state
        console.log("render函数执行")
        return (
            <div>
                <h2>当前计数 :{counter}</h2>
                {this.state.counter <= 5 && <HYTestCpn />}
                <button onClick={e => this.counterAdd()}>+1</button>
            </div>
        )
    }
    counterAdd() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

}