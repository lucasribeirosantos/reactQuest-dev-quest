import './paragraph.css'

const Paragraph = ({children ,textColor}) => {
    return (
        <p className="text" style={{color: textColor}}>
            {children}
        </p>
    )
}

export default Paragraph