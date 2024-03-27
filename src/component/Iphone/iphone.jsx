export function Databinding(){
    var products=[{
     title:"Apple iPhone 15 (Black, 128 GB)",
     price:89000,
     image:'../public/images/iphone.png',
     rating: {rate:4.6, ratings:17998, reviews:1223},
     rating: {rate:4.6, ratings:17998, reviews:1223},
            offers: [
                 "Bank Offer10% off on Axis Bank Credit Card Txns, up to ₹750 on orders of ₹5,000 and aboveT&C",
                 "Bank Offer10% off on Axis Bank Credit Card EMI Txns, up to ₹1,000 on orders of ₹5,000 and aboveT&C",
                 "Bank OfferGet ₹25* instant discount for the 1st Flipkart Order using Flipkart UPIT&C",
                 "Special PriceGet extra ₹10901 off (price inclusive of cashback/coupon)T&C"
            ]

    
    },
    {
        title:"Apple iPhone 15 (Black, 128 GB)",
        price:77000,
        image:"./public/images/iphonegreen.png",
        rating: {rate:4.6, ratings:17998, reviews:1223},
        offers: [
             "Bank Offer10% off on Axis Bank Credit Card Txns, up to ₹750 on orders of ₹5,000 and aboveT&C",
             "Bank Offer10% off on Axis Bank Credit Card EMI Txns, up to ₹1,000 on orders of ₹5,000 and aboveT&C",
             "Bank OfferGet ₹25* instant discount for the 1st Flipkart Order using Flipkart UPIT&C",
             "Special PriceGet extra ₹10901 off (price inclusive of cashback/coupon)T&C"
        ]


    }]
    return(
        <div className="container-fluid">
            {
                products.map(product=>
                    <div className="row my-4" key={product.title}>
                    <div className="col-3">
                        <img width="100%" src={product.image} />
                    </div>
                    <div className="col-9">
                        <div className="h4">{product.title}</div>
                        <div className="mt-2">
                            <span className="badge bg-success text-white"> {product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                            <span className="fw-bold text-secondary"> {product.rating.ratings.toLocaleString()} Ratings & {product.rating.reviews.toLocaleString()} </span>
                        </div>
                        <div className="mt-2">
                            <div className="h1"> {product.price.toLocaleString('en-in', {style:'currency', currency:'INR'})} </div>
                            <div> 10% Off <strike>79999</strike> </div>
                        </div>
                        <div className="mt-4">
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer => <li key={offer} className="bi bi-tag-fill text-success my-3"> <span className="text-secondary">{offer}</span> </li>)
                            }
                        </ul>
                        </div>
                    </div>
                    </div>
                    
                    )
            }
        </div>
    )
}




