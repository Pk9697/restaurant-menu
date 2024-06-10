import './styles.css'
import Text from '@/components/atoms/text/Text'
import RestaurantImage from '@/components/molecules/restaurant-image/RestaurantImage'

function SingleRestaurantListing({
  newRestaurant,
  ad,
  preOrder,
  deliveryDuration,
  restaurantName,
  restaurantDescription,
  image,
  closed,
}) {
  const rightLabels = []
  const leftLabels = []
  if (ad) rightLabels.push(ad)
  if (newRestaurant) rightLabels.push('New')
  if (preOrder) leftLabels.push('Pre-Order')

  return (
    <div className="single-restaurant-listing padder">
      <RestaurantImage
        closed={closed}
        image={image}
        deliveryDuration={deliveryDuration}
        rightLabels={rightLabels}
        leftLabels={leftLabels}
      />
      <Text variant="subheading" gutterBottom>
        {restaurantName}
      </Text>
      <Text variant="paragraph">{restaurantDescription}</Text>
    </div>
  )
}

export default SingleRestaurantListing
