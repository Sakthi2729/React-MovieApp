import { useState } from "react";
import { Badge, IconButton } from "@mui/material";


export function Counter(){
    let [Like , setLike] = useState(10)
    let [Dislike, setDislike] = useState(10)

    const incrementLike = ()=> setLike(Like+1)
    const incrementDislike = ()=>setDislike(Dislike+1)

    return(
      <div className="counter">
        <IconButton onClick={incrementLike} color="primary">
          <Badge badgeContent={Like} color="primary">👍</Badge>
        </IconButton>
        <IconButton onClick={incrementDislike} color="error">
          <Badge badgeContent={Dislike} color="error">👎</Badge>
        </IconButton>
      </div>
    )
}