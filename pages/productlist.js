import styled from "styled-components"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import { mobile } from "../styled/responsive"

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 25px;

  ${mobile({
    flexDirection: "column",
  })}
`
const Filter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 0px;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
`

const Select = styled.select`
  all: unset;
  margin: 0 20px;
  padding: 10px;
  border: 1px solid black;
  text-align: center;
  cursor: pointer;
`

const Option = styled.option`
  all: unset;
`

export default function Productlist() {
  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>筛选产品：</FilterText>
          <Select defaultValue="全部大小">
            <Option>S码</Option>
            <Option>M码</Option>
            <Option>L码</Option>
            <Option>全部大小</Option>
          </Select>
          <Select defaultValue="全部颜色">
            <Option>绿色</Option>
            <Option>橘色</Option>
            <Option>棕色</Option>
            <Option>全部颜色</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>排序：</FilterText>
          <Select>
            <Option>最新</Option>
            <Option>价格：降序</Option>
            <Option>价格：升序</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
    </Container>
  )
}
