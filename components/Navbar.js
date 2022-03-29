import React from "react"
import styled from "styled-components"
import SearchIcon from "@mui/icons-material/Search"
import Badge from "@mui/material/Badge"
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined"
import { mobile } from "../styled/responsive"
import { useRouter } from "next/router"
import Link from "next/link"

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`

const SearchInput = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`

const Logo = styled.h1`
  font-weight: bold;
  margin: 0;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${mobile({ padding: "0px 5px" })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  white-space: nowrap;
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;

  &:last-of-type {
    margin-right: 0;
    ${mobile({ marginRight: "15px" })}
  }
`

export default function Navbar() {
  const router = useRouter()

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>CN</Language>
          <SearchContainer>
            <SearchInput placeholder="搜索" />
            <SearchIcon style={{ color: "grey", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={() => router.push("/")}>HW's</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link href={"/register"}>注册</Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/login"}>登陆</Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}
