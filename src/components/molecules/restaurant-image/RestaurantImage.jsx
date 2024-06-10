import { v4 as uuid } from 'uuid'
import './styles.css'
import Text from '@/components/atoms/text/Text'

function RestaurantImage({
  image = 'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg',
  deliveryDuration,
  rightLabels = [],
  leftLabels = [],
  closed,
}) {
  return (
    <div className="restaurantImage container">
      <img src={image} alt="restaurant" />

      <div className="deliveryDuration">
        <Text variant="subheading">{deliveryDuration}</Text>
      </div>

      <div className="rightLabelsGroup">
        {rightLabels.map((label) => (
          <div key={uuid()} className="rightLabel">
            {label}
          </div>
        ))}
      </div>

      <div className="leftLabelsGroup">
        {leftLabels.map((label) => (
          <div key={uuid()} className="leftLabel">
            {label}
          </div>
        ))}
      </div>

      {closed && <button type="button">Closed</button>}
    </div>
  )
}

export default RestaurantImage
