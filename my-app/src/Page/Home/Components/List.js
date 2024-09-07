import Item from "./Item"



const List = ({listData}) =>{
    //to do detail
    console.log('listData',listData)
    console.log("ABC")
    console.log("CDE")
    console.log("EDF")
    return <div className="list">
       {
           listData.map(item => {
               const {note, date, time} =item
               return <Item note={note} date={date} time={time}/>
           })
       }

        
    </div>
}

export default List