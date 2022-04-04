import styled from "styled-components"
import { categoryData } from "../mock/data"
import { mobile } from "../styled/responsive"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;

  ${mobile({
    padding: "0px",
  })}
`

export default function Categories() {
  return (
    <Container>
      {categoryData.map((d) => {
        const { id, ...others } = d
        return <CategoryItem key={id} {...others} />
      })}
    </Container>
  )
}
