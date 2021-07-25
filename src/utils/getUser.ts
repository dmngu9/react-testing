import axios from 'axios'

const getUser = async () => {
  const { data } = await axios.get('https://api.github.com/users/dmngu9')
  return data
}

export { getUser }