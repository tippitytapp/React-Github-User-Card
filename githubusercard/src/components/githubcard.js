import React from "react";


function GitHubCard(props){

    return(
        <div className="githubcard">
            <img src={props.data.avatar_url} />
            <h3>{props.data.name}</h3>
            <h4>{props.data.login}</h4>
            <p>Location: {props.data.location}</p>
            <p>Profile: <a href={props.data.html_url}>{props.data.html_url}</a></p>
            <p>Followers: {props.data.followers}</p>
            <p>Following: {props.data.following}</p>
            <p>Bio: {props.data.bio}</p>
        </div>
    )
}

export default GitHubCard;