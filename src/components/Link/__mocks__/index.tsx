import React, { ReactNode } from 'react'

export default function Link(props: { href; children: ReactNode }) {
  return <a href={props.href}>{props.children}</a>
}
