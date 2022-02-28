// This is a temporary file to get the CRUD working in my components
// before I move the actual database to firebase

// What i get from firebase will be

let postA = {
  postId: 'Aasdf',
  poster: 'Amy',
  data: 'Do the thing. No, the other thing!',
  likedBy: ['thecat', 'thedog', 'thefish'],
  date: new Date('1995-12-17T03:24:00'),
  postType: 'new',
  refPostId: '',
};
let postB = {
  postId: 'Basdf',
  poster: 'Billy',
  data: 'Hellooooooooooo!',
  likedBy: ['thecat', 'thedog', 'thefish'],
  date: new Date('1995-12-17T03:24:00'),
  postType: 'new',
  refPostId: '',
};
let postC = {
  postId: 'Casdf',
  poster: 'Carly',
  data: "C Stuff, it's a post",
  likedBy: ['thecat', 'thedog', 'thefish'],
  date: new Date('1995-12-17T03:24:00'),
  postType: 'new',
  refPostId: '',
};

let OtherPostA = {
  postId: 'OAasdf',
  poster: 'OAmy',
  data: 'ODo the thing. No, the other thing!',
  likedBy: ['thecat', 'thedog', 'thefish'],
  date: new Date('1995-12-17T03:24:00'),
  postType: 'new',
  refPostId: '',
};
let OtherPostB = {
  postId: 'OBasdf',
  poster: 'OBilly',
  data: 'OHellooooooooooo!',
  likedBy: ['thecat', 'thedog', 'thefish'],
  date: new Date('1995-12-17T03:24:00'),
  postType: 'new',
  refPostId: '',
};
let OtherPostC = {
  postId: 'OCasdf',
  poster: 'OCarly',
  data: "OC Stuff, it's a post",
  likedBy: ['thecat', 'thedog', 'thefish'],
  date: new Date('1995-12-17T03:24:00'),
  postType: 'new',
  refPostId: '',
};

let mydb = {
  posts: [postA, postB, postC],
  feed: [OtherPostA, OtherPostB, OtherPostC],
};

export default mydb;
