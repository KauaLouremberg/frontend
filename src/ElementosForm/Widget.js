
const Widget = ({children, style}) => {

    return (
        <fieldset style={{
            display: "inline-block",
            width: '400px',
            minInlineSize: "auto",
            height: 'fit-content', 
            minHeight: "300px",
            borderRadius: "18px", 
            border: "solid black 1px", 
            backgroundColor: '#F0EFE7', 
            margin: "2px",
            padding: "8px 0px 0px 0px",
            ...style
            
            }}>
                <div style={{ marginTop: "8px", marginLeft: "8px" ,marginRight: "8px" }}> {children}</div> 
        </fieldset>
    )
}

export default Widget;