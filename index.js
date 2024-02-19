let content = '';
for (let index = 1; index <= 15; index++) {
    content += `
    <div class="video-item" id="${index}">
        <div id="img-${index}" class="thumbnail">
            <img id="thumbnail-${index}"  src="public/image/t-${index}.webp" alt="" onclick="playVideo(${index})">
        </div>
        <div id="video-${index}" class="video" style="display: none;">
            <video controls id="videoPlayer-${index}">
                <source src="public/video/v-${index}.mp4" type="video/mp4">
            </video>
        </div>
    </div>
    `;
}

document.getElementById('wrapper').innerHTML = content;

const playVideo = (index) => {
    const thumbnail = document.getElementById(`thumbnail-${index}`);
    const videoPlayer = document.getElementById(`videoPlayer-${index}`);
    const videoItem = document.getElementById(`video-${index}`);
    const imgItem = document.getElementById(`img-${index}`);


    imgItem.style.display = 'none';
    videoItem.style.display = 'block';
    videoPlayer.play();

    // Xử lý sự kiện kết thúc video
    videoPlayer.addEventListener('ended', () => {
        imgItem.style.display = 'block';
        videoItem.style.display = 'none';
    });
};