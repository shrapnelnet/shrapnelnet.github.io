const getSong = () => {
    document.body.style.display = "none";
    fetch("https://europe-west2-tyler-dev-env.cloudfunctions.net/lastfm-get-song", {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
        .then((res) => res.json())
        .then((res) => {
            const root = res.recenttracks.track[0];
            const image = root.image[2]["#text"];
            const name = root.name;
            const artist = root.artist["#text"];
            return {
                image: image,
                name: name,
                artist: artist
            }
        })
        .then((song) => {
            let image = document.createElement("img");
            image.src = song.image;
            image.width = 174;
            image.height = 174;
            let name = document.createElement("h3");
            name.innerText = song.name;
            let artist = document.createElement("p");
            artist.innerText = song.artist;
            const metadata = [image, name, artist];
            let listeningTo = document.getElementById("lastfm");
            metadata.forEach((data) => {
                listeningTo.appendChild(data);
            })
            document.body.style.display = "block";
        })
        .catch((err) => {
            console.error(err);
            document.body.style.display = "block";
        });
}

getSong();