import { UserOutlined } from '@ant-design/icons'
import { Avatar, Badge, Typography } from 'antd'
import { useQuery } from '@apollo/client'

import { GetUserDocument } from './data/get-user.github.gql.generated'

const { Link, Text } = Typography

const User = () => {
  const { data } = useQuery(GetUserDocument)

  console.log(data?.viewer.login)

  return (
    <Link href='https://github.com/hweeTan' target='_blank'>
      <Text strong>Huy Tran</Text>
      <Badge count={5}>
        <Avatar
          style={{ margin: 0, marginLeft: 16 }}
          shape='square'
          icon={<UserOutlined />}
        />
      </Badge>
    </Link>
  )
}

export default User
