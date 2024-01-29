const getSong = () => {
    fetch("https://cloudflare-music-endpoint.shrapnelnet.workers.dev/")
        .then((res) => res.json())
        .then((res) => {
            const { image, artist, name } = res
            const parent = document.getElementById("lastfm")
            const cover = document.createElement("img")
            const artistElement = document.createElement("h3")
            const nameElement = document.createElement("h2")
            nameElement.innerHTML = name
            artistElement.innerHTML = `by ${artist}`
            cover.src = image
            cover.alt = `album art for ${name} by ${artist}`
            cover.width = 256
            cover.height = 256
            parent.appendChild(cover)
            parent.appendChild(nameElement)
            parent.appendChild(artistElement)
        })
}

getSong();