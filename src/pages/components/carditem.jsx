const Carditem = (props) => {
//  console.log(props)
    return(
        <>
        {props.data.map((value, index) => 
        <div key={index}>
            <div>{value.frontmatter.title}</div>
            <img src={value.frontmatter.image} />
            <div>{value.frontmatter.excerpt}</div>
        </div>
        )}
        
        </>
    )
}

export default Carditem
