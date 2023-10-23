// let url = 'https://youtu.be/BnJWi0E3Mv0';
// let url = 'https://www.youtube.com/watch?v=nGhKIC_7Mkk&t=357s&ab_channel=ApnaCollege';
let url = 'https://www.youtube.com/watch?v=BBkFLEN2G6A&ab_channel=TanayPratap';

let VID_REGEX =/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

console.log(url.match(VID_REGEX)[1]);
