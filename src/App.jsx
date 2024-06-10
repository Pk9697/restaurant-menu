import SingleRestaurantListing from '@/components/organisms/single-restaurant-listing/SingleRestaurantListing'

function App() {
  return (
    // <SingleRestaurantListing
    //   preOrder
    //   ad="Some Ad"
    //   newRestaurant
    //   restaurantName="Lorem, ipsum."
    //   restaurantDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptate?"
    //   image="https://picsum.photos/200/300"
    //   deliveryDuration="10-15 min"
    // />
    <SingleRestaurantListing
      restaurantName="Lorem, ipsum."
      restaurantDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptate?"
      deliveryDuration="10-15 min"
      closed
    />
  )
}

export default App
