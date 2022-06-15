import Post from "./dataType";

//Данные с сервера
let postsData: Post[] = [
  {
    id: 0,
    image: "https://miro.medium.com/max/1200/0*95pljiM8DQD6NqK-.png",
    text: "React makes it painless to create interactive UIs.",
    date: "2022-06-10",
    lesson_num: 12,
    title: "Declarative",
    author: 2,
  },
  {
    id: 1,
    image:
      "https://tutorkeren.com/sites/default/files/sampul/react-js-cover.jpg",
    text: "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
    date: "2022-06-11",
    lesson_num: 12,
    title: "Component-Based",
    author: 3,
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/originals/9b/03/78/9b037851285c9a783b5896392e397321.png",
    text: "We don’t make assumptions about the rest of your technology stack",
    date: "2022-06-12",
    lesson_num: 12,
    title: "Learn Once, Write Anywhere",
    author: 4,
  },
  {
    id: 3,
    image: "https://i.kym-cdn.com/photos/images/facebook/000/249/013/4a6.png",
    text: "React components implement a render() method that takes input data and returns what to display. ",
    date: "2022-06-13",
    lesson_num: 12,
    title: "A Simple Component",
    author: 5,
  },
];

export default postsData;
