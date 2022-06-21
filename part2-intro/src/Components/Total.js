export default function Total(props) {
  const total = props.parts.reduce((s, p) => s + p.exercises, 0);

  return (
    
    <p><b>Total of {total} exercises</b></p>
  );
}
