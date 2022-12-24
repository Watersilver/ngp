import globals from "../../globals"

/** can handle both publicly served files in dev server and production server */
export default function Link(
  props: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> & {
    href?: string | {src: string}
  }) {

  return <link
    {...props}
    href={globals.functions.prependPublicPrefix(props.href)}
  />
}