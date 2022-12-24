import globals from "../../globals"

/** can handle both publicly served files in dev server and production server */
export default function Source(
  props: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement> & {
    src?: string | {src: string}
  }) {

  return <source
    {...props}
    src={globals.functions.prependPublicPrefix(props.src)}
  />
}