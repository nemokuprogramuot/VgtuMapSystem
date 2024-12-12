const Choice = ({pathChoice}) => {
    return ( 

        <div>
            <button onClick={()=>{pathChoice("T")}}>Timer</button>
            <button onClick={()=>{pathChoice("C")}}>Console</button>

        </div>
     );
}
 
export default Choice;