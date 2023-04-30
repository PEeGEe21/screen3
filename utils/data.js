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
      image: 'demo.png',
      image_thumbnail: 'demo.png',
      name: 'Blockchain.mp4',
      type: 'mp4',
      date_added: 89,
      tags: ['crypto', 'blockchain'],
    },
    {
      id: 2,
      image: 'demo.png',
      image_thumbnail: 'demo.png',
      name: 'Blockchain2.mp4',
      type: 'mp4',
      date_added: 89,
      tags: ['blockchain', 'piggyfi', 'travels'],

    },
];

export { ScreenData, Tags, coloredArray, colors };
