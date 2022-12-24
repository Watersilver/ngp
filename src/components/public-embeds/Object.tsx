import globals from "../../globals"

/** can handle both publicly served files in dev server and production server */
export default function Object(
  props: React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement> & {
    src?: string | {src: string}
  }
) {
  return <object
    {...props}
    data={globals.functions.prependPublicPrefix(props.data)}
  />;
}