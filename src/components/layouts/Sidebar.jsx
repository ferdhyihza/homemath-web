export default function Sidebar(props) {
  return (
    <div className="row p-0 m-0">
      <div className="col-2 bg-darkblue p-5">{props.quotes}</div>
      <div className="col-10 p-5">{props.children}</div>
    </div>
  );
}
