/* eslint-disable react/prop-types */
export default function Tips(props) {
  return (
    <p className="mb-0 fst-italic text-center text-muted" style={{ fontSize: '12px' }}>
      {props.children}
    </p>
  );
}
