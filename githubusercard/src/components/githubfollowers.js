import React from "react";
import axios from "axios";

function GitHubFollows(props){
    {props.data.forEach(user => {
        console.log(user.login)
        axios.get(`https://api.github.com/users/${user.login}`).then(response => {
            
        })
    })
}
    return(
        <div className="followers">
            
        </div>
    )
}

export default GitHubFollows;