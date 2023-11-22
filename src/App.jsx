import './App.css'
import ButtonCard from "./assets/components/ButtonCard.jsx";
import ProductCard from "./assets/components/ProductCard.jsx";
import Tile from "./assets/components/Tile.jsx";


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


          <nav>
              <ButtonCard onClick={toTheCollection}
                          buttonText="to the collection"/>

              <ButtonCard onClick={shopAllBags}
                          buttonText="shop all bags"/>

              <ButtonCard onClick={preOrders}
                          disabled={true}
                          buttonText="pre-orders"/>
      </nav>



              <main>

    <ProductCard
    BestSeller={"Best seller"}
    imgSrc={"src/assets/bag_1.png"}
    imgAlt={"The handy bag"}
    productTitle={"The handy bag"}
    productPrice={"€400,-"}
/>

    <ProductCard
        BestSeller={"Best seller"}
        imgSrc={"src/assets/bag_2.png"}
        imgAlt={"The stylish bag"}
        productTitle={"The stylish bag"}
        productPrice={"€250,-"}
    />

      <ProductCard
          BestSeller={"Best seller"}
          imgSrc={"src/assets/bag_3.png"}
          imgAlt={"The The simple bag"}
          productTitle={"The The simple bag"}
          productPrice={"€300,-"}
      />

        <ProductCard
            BestSeller={"Best seller"}
            imgSrc={"src/assets/bag_4.png"}
            imgAlt={"The trendy bag"}
            productTitle={"The trendy bag"}
            productPrice={"€150,-"}
        />
        </main>



          <footer>
              <Tile
                  title="The brand"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores, assumenda blanditiis consectetur dignissimos distinctio dolores enim facilis fuga illum maiores maxime molestiae officia praesentium repellat reprehenderit suscipit veritatis voluptatibus!"
              />

              <Tile
                  imageUrl="src/assets/brand.png"
                  imgAlt="Brand picture"
              />

              <Tile
                  imageUrl="src/assets/our_story.png"
                  imgAlt="Our story image"
              />

              <Tile
                  title="Our Story"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores, assumenda blanditiis consectetur dignissimos distinctio dolores enim facilis fuga illum maiores maxime molestiae officia praesentium repellat reprehenderit suscipit veritatis voluptatibus!"
              />
          </footer>





              {/*<section>*/}
              {/*    <h2>The Brand</h2>*/}
              {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores, assumenda*/}
              {/*        blanditiis consectetur dignissimos distinctio dolores enim facilis fuga illum maiores maxime*/}
              {/*        molestiae officia praesentium repellat reprehenderit suscipit veritatis voluptatibus!</p>*/}
              {/*</section>*/}



              {/*<section>*/}
              {/*    <img src={"src/assets/brand.png"}/>*/}
              {/*</section>*/}
              {/*<section>*/}
              {/*    <img src={"src/assets/our_story.png"}/>*/}

              {/*</section>*/}
              {/*<section>*/}
              {/*    <h2>our story</h2>*/}
              {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores, assumenda*/}
              {/*        blanditiis consectetur dignissimos distinctio dolores enim facilis fuga illum maiores maxime*/}
              {/*        molestiae officia praesentium repellat reprehenderit suscipit veritatis voluptatibus!</p>*/}
              {/*</section>*/}





        </>
  );
}

export default App
