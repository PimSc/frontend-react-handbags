import './App.css'
import ButtonCard from "./ButtonCard.jsx";


const toTheCollection = () => {
  console.log('Naar de collectie geklikt');
};

const shopAllBags = () => {
  console.log('shop all bags geklikt');
};

const preOrders = () => {
  console.log('pre orders geklikt');
};

function App() {
  return (
      <>


          <h1>Handbags & Purses</h1>



              <ButtonCard onClick={toTheCollection}
                          buttonText="to the collection"/>

              <ButtonCard onClick={shopAllBags}
                          buttonText="shop all bags"/>

              <ButtonCard onClick={preOrders}
                          disabled={true}
                          buttonText="pre-orders"/>

              <main>




          <img src="src/assets/bag_1.png" alt=""/>
          <img src="src/assets/bag_2.png" alt=""/>
          <img src="src/assets/bag_3.png" alt=""/>
          <img src="src/assets/bag_4.png" alt=""/>



        </main>
        </>
  );
};

export default App
