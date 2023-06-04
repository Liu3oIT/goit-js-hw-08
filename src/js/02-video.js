import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveTimeToStorage = throttle(function (currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  saveTimeToStorage(currentTime);
});

player.ready().then(function () {
  const storedTime = localStorage.getItem('videoplayer-current-time');
  if (storedTime) {
    player.setCurrentTime(storedTime).catch(function (error) {
      console.error('Failed to set video time:', error);
    });
  }
});
