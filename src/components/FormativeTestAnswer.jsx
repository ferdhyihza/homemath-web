/* eslint-disable react/prop-types */
export default function FormativeTestAnswer(props) {
  return (
    <div className="mb-2">
      <input type="radio" className="btn-check" name={props.name} id={props.id} autoComplete="off" onChange={props.onChange} checked={props.checked} />
      <label className={`btn text-start d-flex ${props.className}`} htmlFor={props.id}>
        {props.option}.<div className="ms-2">{props.children}</div>
      </label>
    </div>
  );
}
