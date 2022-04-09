import { Checkbox, CircularProgress } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import styled from "styled-components"
import { register } from "../redux/apiCalls"
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

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`

const Warn = styled.span`
  color: red;
`

export default function () {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [checkbox, setCheckbox] = useState(false)
  const [warning, setWarning] = useState("")
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleClick = async (e) => {
    setWarning("")
    e.preventDefault()
    if (!username) return setWarning("未输入用户名")
    if (!email) return setWarning("未输入邮箱")
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
      return setWarning("邮箱格式不正确")
    if (!password) return setWarning("未输入密码")
    if (!confirm) return setWarning("未确认密码")
    if (password !== confirm) return setWarning("请输入相同密码")
    if (!checkbox) return setWarning("未确认协议")
    setLoading(true)
    const data = await register({ username, email, password })
    setLoading(false)
    if (data._id) {
      alert("注册成功,前往登录")
      router.push("/login")
    } else {
      alert("注册失败： " + data)
    }
    setLoading(false)
  }

  return (
    <Container>
      <Wrapper>
        <Title>注册账号</Title>
        {warning ? <Warn>{warning}</Warn> : null}
        <Form autoComplete="off">
          <Input
            placeholder="用户名"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <Input
            placeholder="邮箱"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <Input
            placeholder="密码"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <Input
            placeholder="确认密码"
            onChange={(e) => {
              setConfirm(e.target.value)
            }}
          />
          <Aggrement>
            <Checkbox
              checked={checkbox}
              disableRipple
              color="grey"
              onChange={() => {
                setCheckbox(!checkbox)
              }}
            />
            我已阅读并同意使用《用户协议》
          </Aggrement>
          <Button onClick={handleClick} disabled={loading}>
            确认 <CircularProgress size={20} color="inherit" sx={loading ? {} : { display: "none" }} />
          </Button>
          <span>
            已有账号？
            <Link href={"/login"}>点此登陆</Link>
          </span>
        </Form>
      </Wrapper>
    </Container>
  )
}
