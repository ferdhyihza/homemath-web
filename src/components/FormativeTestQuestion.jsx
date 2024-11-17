/* eslint-disable react/prop-types */
export default function FormativeTestQuestion(props) {
  return (
    <li className="list-group-item d-flex pb-3">
      <div className="ms-2 w-100">{props.children}</div>
    </li>
  );
}
