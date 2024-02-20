let content = '';
for (let index = 1; index <= 15; index++) {
    content += `
    <div class="video-item" id="${index}">
        <div id="img-${index}" class="thumbnail">
            <img id="thumbnail-${index}"  src="public/image/t-${index}.webp" alt="" onclick="playVideo(${index})">
        </div>
        <div id="video-${index}" class="video" style="display: none">
            <div style="position: relative;">
                <img id="close-${index}" src="public/x_close.png" class="close" onclick="closeVideo(${index})"/>

                    <video controls id="videoPlayer-${index}">
                        <source src="public/video/v-${index}.mp4" type="video/mp4">
                    </video>

            </div>
        </div>
    </div>
    `;
}

document.getElementById('wrapper').innerHTML = content;

const playVideo = (index) => {
    const videoPlayer = document.getElementById(`videoPlayer-${index}`);
    const videoItem = document.getElementById(`video-${index}`);
    const layoutHidden = document.getElementById(`layout-hidden`);


    videoItem.style.display = 'block';
    layoutHidden.style.display = 'block'
    videoPlayer.play();

    // Xử lý sự kiện kết thúc video
    videoPlayer.addEventListener('ended', () => {
        videoItem.style.display = 'none';
        layoutHidden.style.display = 'none';
        console.log(1);
    });
};
const closeVideo = (index)=>{
    const videoItem = document.getElementById(`video-${index}`);
    const videoPlayer = document.getElementById(`videoPlayer-${index}`);
    const layoutHidden = document.getElementById(`layout-hidden`);
    videoItem.style.display = 'none';
    layoutHidden.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}