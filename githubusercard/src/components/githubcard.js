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
            <div className="followers">
                <h4>My Followers</h4>
                {props.followers.map((item, i) => (
                    <>
                    <img width="150px" src={item.avatar_url} alt={item.login}/>
                    <h3>{item.login}</h3>
                    </>
                ))}
            </div>

        </div>
    )
}

export default GitHubCard;