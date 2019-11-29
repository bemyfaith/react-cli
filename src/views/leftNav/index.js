import React from 'react';
import { Button } from 'antd'
class LeftNav extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div >
				固定展示组件
				<Button type='primary'>antd主按钮</Button>
			</div>
		)
	}

}
export default LeftNav
