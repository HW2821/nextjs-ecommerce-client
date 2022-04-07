import Categories from "../components/Categories"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import Slider from "../components/Slider"

export default function Home() {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </>
  )
}
