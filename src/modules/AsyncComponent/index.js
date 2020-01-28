import { React } from 'zola'


export default class extends React.Component{
	componentWillMount(){
		const comFn = this.props.comFn
		comFn.then((Component) =>{
			this.renderComponent = Component.default ? Component.default:Component
			console.log(this.renderComponent)
			this.forceUpdate()
		})
	}
	componentWillUnmount() {
		this.renderComponent = null
	}
	render(){
		// if(!this.renderComponent){
		// 	return null
		// }
		const renderComponent = this.renderComponent || 'div'
		return React.createElement(renderComponent, {}, [])
	}
}