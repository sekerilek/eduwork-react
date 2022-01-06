const ListAplikasi = (props) =>{
    console.log(props.dataList)
    return(
        <ul>
            {/* <li>Gojek</li>
            <li>Twitter</li>
            <li>Instagram</li> */
            props.dataList.map((list)=>{
                return <li key={list.id} > {list.name} </li>
            })
            }
        </ul>
    )
}

export default ListAplikasi