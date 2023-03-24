import React from "react";
import userImage from "../assets/img/user-img.png"

function Users() {
    return (
        <div className="text-center my-3">
            <img src={userImage} className="my-img my-2"></img>
            <p className="p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    )
}

export default Users