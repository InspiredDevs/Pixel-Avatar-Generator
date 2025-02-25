import { useState } from "react";

const AvatarGenerator = () => {
    const [avatarUrl, setAvatarUrl] = useState("");

    // Function to generate a random avatar
    const generateAvatar = () => {
        const seed = Math.random().toString(36).substring(7); // Random text
        const url = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`;
        setAvatarUrl(url);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Random Avatar Generator</h2>
            {avatarUrl && <img src={avatarUrl} alt="Avatar" width="150" />}
            <br />
            <button onClick={generateAvatar} style={{ marginTop: "10px" }}>
                Generate New Avatar
            </button>
        </div>
    );
};

export default AvatarGenerator;
