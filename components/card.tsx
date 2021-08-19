type PropsType = {
  title: string;
  children?: any;
};

export default function Card(props: PropsType) {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}
