import ListAplikasi from "../List/ListAplikasi";
import '../style.css';

const Aplikasi = () =>{
    const listApp = [
        {id: 1, name: 'instagram'},
        {id: 2, name: 'tokopedia'},
        {id: 3, name: 'gojek'},
        {id: 4, name: 'twitter'}
    ]
    return(
        <div className="App">
            <h3>
                Aplikasi yang saya gunakan sehari-hari
            </h3>
            <ListAplikasi dataList={listApp}/>
        </div>
    )
}

export default Aplikasi;