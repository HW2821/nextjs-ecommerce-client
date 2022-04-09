import { useRouter } from "next/router"
import { useState } from "react"
import styled from "styled-components"
import Newsletter from "../../components/Newsletter"
import Products from "../../components/Products"
import { mobile } from "../../styled/responsive"

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
  const [filter, setFilter] = useState({ size: "all", color: "all" })
  const [sort, setSort] = useState("new")
  const router = useRouter()
  const category = router.query.category

  const categoryTitle = () => {
    let title = "基本款"
    if (category === "outdoor") title = "户外"
    if (category === "artistic") title = "艺术风"
    return title
  }

  const handleFilterChange = (e) => {
    const val = e.target.value
    const name = e.target.name
    setFilter({ ...filter, [name]: val })
  }

  const handleSortChange = (e) => {
    setSort(e.target.value)
  }

  return (
    <Container>
      <Title>{categoryTitle()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>筛选产品：</FilterText>
          <Select name="size" defaultValue="all" onChange={handleFilterChange}>
            <Option value="S">S码</Option>
            <Option value="M">M码</Option>
            <Option value="L">L码</Option>
            <Option value="all">全部大小</Option>
          </Select>
          <Select name="color" defaultValue="all" onChange={handleFilterChange}>
            <Option value="green">绿色</Option>
            <Option value="orange">橘色</Option>
            <Option value="yellow">黄色</Option>
            <Option value="all">全部颜色</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>排序：</FilterText>
          <Select name="sort" defaultValue="new" onChange={handleSortChange}>
            <Option value="new">最新</Option>
            <Option value="decrease">价格：降序</Option>
            <Option value="increase">价格：升序</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filter={filter} sort={sort} />
      <Newsletter />
    </Container>
  )
}
