async function loadChannels() {
    const response = await fetch('https://gist.githubusercontent.com/tplaylive/4c9dbafd5c0761b623f205a948d33104/raw/3f7ce5382a59bb9ad28baef109c1d573bd13bcf9/main.js');
    const channels = await response.json();
    return channels;
}
