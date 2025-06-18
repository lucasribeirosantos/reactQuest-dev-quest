const Button = ({label, alertButton}) => {
    return (
        <button onClick={()=>{alertButton(label)}}>
            {label}
        </button>
    )
}

export default Button 