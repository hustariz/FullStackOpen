const Footer = () => {
    const footerStyle = {
        color: 'blue', 
        fontStyle: 'italic',
        fontSize: 16
    }
    return (
        <div style={footerStyle}>
            <br />
            <em>
                Note app created by <a href='https://github.com/hustariz'>hastarus</a>
            </em>
        </div>
    )
}
export default Footer