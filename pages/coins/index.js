import Axios from 'axios';

const CoinList = ({ coinData }) => {
  return (
    <div>
      {coinData.coins.map((coin) => {
        return (
          <div>
            <h1> {coin.name}</h1>
            <img src={coin.icon} />
            <p> {coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://api.coinstats.app/public/v1/coins?skip=0');
  const data = await res.json();

  return {
    props: {
      coinData: data,
    },
    revalidate: 10,
  };
};

export default CoinList;
