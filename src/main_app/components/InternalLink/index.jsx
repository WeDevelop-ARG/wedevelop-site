import Link from "next/link"

export default function InternalLink (props) {
  const { href, ...rest } = props

  return (
    <Link href={href}>
      <a {...rest}>
        {props.children}
      </a>
    </Link>
  )
}
