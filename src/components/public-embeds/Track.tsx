import globals from "../../globals"

/** can handle both publicly served files in dev server and production server */
export default function Track(
  props: React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement> & {
    src?: string | {src: string}
  }) {

  return <track
    {...props}
    src={globals.functions.prependPublicPrefix(props.src)}
  />
}