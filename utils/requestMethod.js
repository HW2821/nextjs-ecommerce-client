import axios from "axios"

const BASE_URL = "http://localhost:5000/api"
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDJmYzQ0MWU3NGY5ZWM3MzIyNTFhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODU1NzU0OCwiZXhwIjoxNjQ4ODE2NzQ4fQ.UAe2NJEAvKNX5s9b7FUj4STBf8LwvTrq5MMBHYyoWDw"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${TOKEN}` },
})
