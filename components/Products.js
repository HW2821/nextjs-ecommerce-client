import styled from "styled-components"
import { popularProducts } from "../mock/data"
import ProductItem from "./ProductItem"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default function Products() {
  popularProducts
  return (
    <Container>
      {popularProducts.map((d) => (
        <ProductItem key={d.id} {...d} />
      ))}
    </Container>
  )
}
