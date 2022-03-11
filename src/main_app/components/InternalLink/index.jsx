import Link from 'next/link'

export default function InternalLink (props) {
  const { href, link = {}, ...rest } = props

  return (
    <Link href={href} {...link}>
      <a {...rest}>
        {props.children}
      </a>
    </Link>
  )
}
