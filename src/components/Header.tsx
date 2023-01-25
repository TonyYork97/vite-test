import React, { FC } from 'react'

type IProps = {
  title: string
}

const Header: FC<IProps> = ({ title }) => {
  return (
    <div>
      <h3>
        {title}
      </h3>
    </div>
  )
}

export default Header