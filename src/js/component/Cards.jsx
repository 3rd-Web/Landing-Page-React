import React from 'react'

const properties = [
    {
      image:
        "https://i.pinimg.com/originals/51/d3/51/51d351ec87b82d3f4a736dd69667386a.jpg",
      cardTitle: "Rise Up",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi lectus, ultrices eleifend interdum sit amet, tempus non lectus. Suspendisse ornare tellus nibh, eu scelerisque est cursus eget.",
      button: {
        url: "#",
        label: "Find Out More!",
      },
    },
    {
      image:
         "https://ipfs.pixura.io/ipfs/Qmeoz4phwXARGrcJc39sZotTUdSngf1DqzcGQDqnPuWUxQ/AHOL_Eyes_Color.gif",
      cardTitle: "Third Eye",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi lectus, ultrices eleifend interdum sit amet, tempus non lectus. Suspendisse ornare tellus nibh, eu scelerisque est cursus eget.",
      button: {
        url: "#",
        label: "Find Out More!",
      },
    },
    {
      image:
        "https://i.imgflip.com/5r8r9i.png",
      cardTitle: "King Ape",
      cardDescription:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi lectus, ultrices eleifend interdum sit amet, tempus non lectus. Suspendisse ornare tellus nibh, eu scelerisque est cursus eget.",
      button: {
        url: "#",
        label: "Find Out More!",
      },
    },
    {
      image:
         "https://media2.giphy.com/avatars/BillieVonMunster/Pj5urwIvVryi.gif",
      cardTitle: "Mocha",
      cardDescription:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi lectus, ultrices eleifend interdum sit amet, tempus non lectus. Suspendisse ornare tellus nibh, eu scelerisque est cursus eget.",
      button: {
        url: "#",
        label: "Find Out More!",
      },
    },
  ];
  
  const cardProperties = properties.map((card, i) => {
    return (
      <div key={i} className="col-md-3 pb-3">
        <div className="card">
          <img src={card.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="text-center">
              <h3 className="card-title"><strong>"{card.cardTitle}"</strong></h3>
            </div>
            <p className="card-text text-center">{card.cardDescription}</p>
            <div className="text-center">
              <a className="btn btn-secondary btn-md" href={card.url} role="button">
                {card.button.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  
  const Cards = () => {
    return (
        <div className="row row-cols-md-4 m-3">{cardProperties}</div>
    );
  };

export default Cards;