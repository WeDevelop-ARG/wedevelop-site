import Link from 'next/link'

export default function InternalLink (props) {
  const { href, smooth, link = {}, ...rest } = props

  return (
    <Link href={href} {...link}>
      <a smooth={smooth ? 'true' : undefined} {...rest}>
        {props.children}
      </a>
    </Link>
  )
}
