import { v4 as uuid } from 'uuid'
import Text from '@/components/atoms/text/Text'
import Flex from '@/components/atoms/flex/Flex'
import SingleRestaurantListing from '@/components/organisms/single-restaurant-listing/SingleRestaurantListing'

function Section({ sectionTitle, restaurants = [] }) {
  return (
    <div>
      <Text variant="heading" gutterBottom>
        {sectionTitle}
      </Text>

      <Flex>
        {restaurants.map((restaurant) => (
          <Flex.FlexItem key={uuid()}>
            <SingleRestaurantListing {...restaurant} />
          </Flex.FlexItem>
        ))}
      </Flex>
    </div>
  )
}

export default Section
