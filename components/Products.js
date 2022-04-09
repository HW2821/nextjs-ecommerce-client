import CircularProgress from "@mui/material/CircularProgress"
import { textAlign } from "@mui/system"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { publicRequest } from "../utils/requestMethod"
import ProductItem from "./ProductItem"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`

export default function Products({ category, filter, sort = "new" }) {
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [loading, setLoading] = useState(false)

  const getProductlist = async () => {
    let data
    try {
      setLoading(true)
      const res = await publicRequest.get("/products", { params: { category, sort } })
      data = res.data
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
    return data || []
  }

  useEffect(async () => {
    const listdata = await getProductlist()
    setList(listdata)
    setFilteredList(listdata)
  }, [])

  useEffect(() => {
    if (!filter) return
    const newList = list.filter(
      (item) =>
        (filter.size === "all" || item.size.includes(filter.size)) &&
        (filter.color === "all" || item.color.includes(filter.color))
    )
    setFilteredList(newList)
  }, [filter])

  useEffect(() => {
    const sortedList = [...filteredList].sort((a, b) => {
      if (sort === "new") return new Date(a.createdAt) - new Date(b.createdAt)
      else if (sort === "increase") return a.price - b.price
      else if (sort === "decrease") return b.price - a.price
    })

    setFilteredList(sortedList)
  }, [sort])

  return (
    <Container>
      {loading ? <CircularProgress /> : filteredList.map((d) => <ProductItem key={d._id} {...d} />)}
    </Container>
  )
}
