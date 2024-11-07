/* eslint-disable react/prop-types */
export default function Tips(props) {
  return (
    <p className="mb-0 fst-italic text-center" style={{ fontSize: '12px' }}>
      {props.children}
    </p>
  );
}
