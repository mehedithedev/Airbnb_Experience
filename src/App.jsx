import React from "react";
import Card from "./Components/Card";

const App=()=>{
    return(
        <div>
           <h1>My Contacts</h1>
           <Card name='Blue Doraemon' 
           img='https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png'
           email='blueDora@yahoo.com'
           phone='+8446544564'
            />
           <Card
            name='Red Doraemon'
            img='https://i.pinimg.com/originals/48/df/e5/48dfe5cc7740cd2ba81e6f3e31ff2d28.jpg'
            email='redDora@icloud.com'
            phone='+94654464'

           />
           <Card
            name='Green Doraemon'
            img='https://i.pinimg.com/550x/1f/53/4e/1f534ef919fa315b00ad12ac04353d9d.jpg'
            email='greenDora@gmail.com'
            phone="+84554544"
           />
        </div>
    )
}
export default App