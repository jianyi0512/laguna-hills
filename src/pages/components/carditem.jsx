const Carditem = (props) => {
//  console.log(props)
    return(
        <>
        {props.data.map((value, index) => 
        <div key={index}>
            <div>{value.title}</div>
            <div>{value.image}</div>
            <div>{value.excerpt}</div>
        </div>
        )}
        
        </>
    )
}

export default Carditem
