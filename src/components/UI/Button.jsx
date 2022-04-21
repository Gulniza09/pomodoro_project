const Button = (props) => {
	return (
		<button
			className={props.className}
			onChange={props.onChange}
			type={props.type}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}
export default Button
