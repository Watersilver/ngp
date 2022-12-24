import globals from "../../globals"

/** can handle both publicly served files in dev server and production server */
export default function Embed(
  props: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement> & {
    src?: string | {src: string}
  }) {

  return <embed
    {...props}
    src={globals.functions.prependPublicPrefix(props.src)}
  />
};