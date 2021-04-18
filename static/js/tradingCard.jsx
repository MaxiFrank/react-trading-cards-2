var tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  }
];

function TradingCard(props) {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <img src={props.imgUrl} />
      <p>Skill: {props.skill} </p>
    </div>
  );
}

function TradingCardContainer() {

  // const floatCard = {
  //   name: 'Float',
  //   skill: 'baking pretzels',
  //   imgUrl: '/static/img/float.jpg'
  // };

  const [cards, updateCards] = React.useState([]);
  console.log(cards)

    React.useEffect(() => {
      fetch('/cards.json') // python returns a json string
      .then((response) => response.json()) // to convert json and deserialize it into an object
      .then((data) => {
        // console.log(data);
        updateCards(data.cards);
      })
    }, [])
  
  const tradingCards = [];
  
  let key = 0;
  for (const currentCard of cards) {
    tradingCards.push(
      <TradingCard
        key={key++}
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  }

  return (
    <div>{tradingCards}</div>
  );
}

ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);
