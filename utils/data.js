const Tags = [ 'crypto', 'blockchain', 'piggyfi', 'travels'];
const array = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const colors = ['#E92005', '#0545E9', '#40B517', '#B59217'];

const coloredArray = array.map((element, index) => ({
  name: element,
  color: colors[index % colors.length]
}));

// console.log(coloredArray);

const ScreenData = [
    {
      id: 1,
      video_url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      image_thumbnail: 'demo.png',
      thumb : "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      name: 'Blockchain',
      type: 'video/mp4',
      ext: '.mp4',
      date_added: 89,
      tags: ['crypto', 'blockchain'],
      description: 'Lorem sit sed eleifend semper quisque. Arcu et et etiam ac consectetur habitant a. Tincidunt dolor nunc mattis vulputate lorem. Mi nisi viverra eu mattis nunc eu vitae sodales. Nunc massa aenean ipsum nibh ultrices fames.',
    },
    {
      id: 2,
      video_url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      image_thumbnail: 'demo.png',
      thumb : "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      name: 'Blockchain2',
      type: 'video/mp4',
      ext: '.mp4',
      date_added: 89,
      tags: ['blockchain', 'piggyfi', 'travels'],
      description: 'Lorem sit sed eleifend semper quisque. Arcu et et etiam ac consectetur habitant a. Tincidunt dolor nunc mattis vulputate lorem. Mi nisi viverra eu mattis nunc eu vitae sodales. Nunc massa aenean ipsum nibh ultrices fames.',

    },
];

export { ScreenData, Tags, coloredArray, colors };
