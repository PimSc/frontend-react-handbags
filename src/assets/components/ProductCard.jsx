function ProductCard({productTitle, productPrice, imgSrc, imgAlt, BestSeller}) {
    return (

            <article>
                <span>{BestSeller}</span>
            <img src={imgSrc} alt={imgAlt}/>
            <p>{productTitle}</p>
            <h4>{productPrice}</h4>

            </article>

    );
}

export default ProductCard;