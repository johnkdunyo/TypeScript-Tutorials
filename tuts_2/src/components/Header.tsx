import React from 'react'

export interface Props {
    title: string,
    color?: string
}

export const Header = (props: Props) => {
  return (
    <div style={{color: props.color ? props.color : 'blue'}}>{props.title}</div>
  )
}

