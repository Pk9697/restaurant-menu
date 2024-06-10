import Section from '@/components/organisms/section/Section'
import featuredRestaurants from '@/data/featuredRestaurants'
import moreRestaurants from '@/data/restaurants'

function App() {
  return (
    <div>
      <Section
        sectionTitle="Delivers In Under 35 minutes"
        restaurants={featuredRestaurants}
      />
      <br />
      <Section sectionTitle="More Restaurants" restaurants={moreRestaurants} />
    </div>
  )
}

export default App
