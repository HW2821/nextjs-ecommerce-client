import { Checkbox } from "@mui/material"
import Link from "next/link"
import styled from "styled-components"
import { mobile } from "../styled/responsive"

const Container = styled.div`
  width: 100vw;
  height: 85vh;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    height: "70vh",
  })}
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  width: 35%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

  ${mobile({
    width: "80%",
  })}
`
const Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  all: unset;

  height: 2rem;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid black;
  &::placeholder {
    color: #616161;
  }

  &:last-of-type {
    margin-bottom: 5px;
  }
`
const Aggrement = styled.span`
  display: flex;
  align-items: center;
  color: grey;
`
const Button = styled.button`
  all: unset;
  text-align: center;
  background-color: teal;
  padding: 5px 0;
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 10px;
`

export default function register() {
  return (
    <Container>
      <Wrapper>
        <Title>注册账号</Title>
        <Form>
          <Input placeholder="用户名" />
          <Input placeholder="邮箱" />
          <Input placeholder="密码" />
          <Input placeholder="确认密码" />
          <Aggrement>
            <Checkbox disableRipple color="grey" />
            我已阅读并同意使用《用户协议》
          </Aggrement>
          <Button>确认</Button>
          <span>
            已有账号？
            <Link href={"/login"}>点此登陆</Link>
          </span>
        </Form>
      </Wrapper>
    </Container>
  )
}
