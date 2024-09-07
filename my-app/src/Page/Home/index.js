import {useState} from 'react'

import Edit from "./Components/Edit"
import List from "./Components/List"
import Item from "./Components/Item"
import './index.css'

const Home = () =>{

    const [data, setData] = useState([])
    return <div className="app">
        <Edit add={setData}/>
        <List listData={data}/>
    </div>
}

export default Home