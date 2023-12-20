import StdTable from "./StdTable";
export default function StudentAwards() {
  const data = [
    {
      img: "https://lahore.comsats.edu.pk/cs/slides/14.png",
      Headline: "Lorem ipsum dolor sit amet consectetur",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus consequatur similique assumenda harum. Facere nesciunt vel amet beatae suscipit! Culpa quibusdam, velit esse facere, similique quas incidunt officiis aliquam dicta nisi molestias voluptate suscipit nulla voluptatem, aliquid nihil. Animi.",
    },
    {
      img: "https://lahore.comsats.edu.pk/cs/slides/14.png",
      Headline: "Lorem ipsum dolor sit amet consectetur",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus consequatur similique assumenda harum. Facere nesciunt vel amet beatae suscipit! Culpa quibusdam, velit esse facere, similique quas incidunt officiis aliquam dicta nisi molestias voluptate suscipit nulla voluptatem, aliquid nihil. Animi.",
    },
    {
      img: "https://lahore.comsats.edu.pk/cs/slides/14.png",
      Headline: "Lorem ipsum dolor sit amet consectetur",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus consequatur similique assumenda harum. Facere nesciunt vel amet beatae suscipit! Culpa quibusdam, velit esse facere, similique quas incidunt officiis aliquam dicta nisi molestias voluptate suscipit nulla voluptatem, aliquid nihil. Animi.",
    },
    {
      img: "https://lahore.comsats.edu.pk/cs/slides/14.png",
      Headline: "Lorem ipsum dolor sit amet consectetur",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus consequatur similique assumenda harum. Facere nesciunt vel amet beatae suscipit! Culpa quibusdam, velit esse facere, similique quas incidunt officiis aliquam dicta nisi molestias voluptate suscipit nulla voluptatem, aliquid nihil. Animi.",
    },
    {
      img: "https://lahore.comsats.edu.pk/cs/slides/14.png",
      Headline: "Lorem ipsum dolor sit amet consectetur",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus consequatur similique assumenda harum. Facere nesciunt vel amet beatae suscipit! Culpa quibusdam, velit esse facere, similique quas incidunt officiis aliquam dicta nisi molestias voluptate suscipit nulla voluptatem, aliquid nihil. Animi.",
    },{
        img: "https://lahore.comsats.edu.pk/cs/slides/14.png",
        Headline: "Lorem ipsum dolor sit amet consectetur",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus consequatur similique assumenda harum. Facere nesciunt vel amet beatae suscipit! Culpa quibusdam, velit esse facere, similique quas incidunt officiis aliquam dicta nisi molestias voluptate suscipit nulla voluptatem, aliquid nihil. Animi.",
      },{
        img: "https://lahore.comsats.edu.pk/cs/slides/14.png",
        Headline: "Lorem ipsum dolor sit amet consectetur",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus consequatur similique assumenda harum. Facere nesciunt vel amet beatae suscipit! Culpa quibusdam, velit esse facere, similique quas incidunt officiis aliquam dicta nisi molestias voluptate suscipit nulla voluptatem, aliquid nihil. Animi.",
      },{
        img: "https://lahore.comsats.edu.pk/cs/slides/14.png",
        Headline: "Lorem ipsum dolor sit amet consectetur",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus consequatur similique assumenda harum. Facere nesciunt vel amet beatae suscipit! Culpa quibusdam, velit esse facere, similique quas incidunt officiis aliquam dicta nisi molestias voluptate suscipit nulla voluptatem, aliquid nihil. Animi.",
      }
  ];
  return (
    <center>
      <br />
      <br />
      <div className="div-awards">
      {data.map((item, index)=>{
        return(
        <StdTable key ={index} img = {item.img} Headline = {item.Headline} content = {item.content}/>
      )})}</div>
    </center>
  );
}
