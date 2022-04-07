import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { fetchCartItems } from "../redux/cartSlice"
import { login } from "../redux/userSlice"
// import { login } from "../redux/apiCalls"
import { mobile } from "../styled/responsive"

const Container = styled.div`
  width: 100vw;
  height: 85vh;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({
    height: "60vh",
  })}
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
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

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`

const Error = styled.span`
  color: red;
`

export default function () {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { isFetching, error, currentUser } = useSelector((s) => s.user)
  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(username, password)
    dispatch(login({ username, password }))
  }

  if (currentUser) router.push("/")

  return (
    <Container>
      <Wrapper>
        <Title>登录账号</Title>
        <Form autoComplete="off">
          <Input
            className="username"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            placeholder="输入邮箱或用户名"
          />
          <Input
            className="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            placeholder="密码"
          />
          <Button disabled={isFetching} onClick={handleLogin}>
            登陆
          </Button>
          <span>
            无账号？<Link href={"/register"}>点此注册</Link>
          </span>
          {error ? <Error>{error}</Error> : null}
        </Form>
      </Wrapper>
    </Container>
  )
}
