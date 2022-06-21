import Part from "./Part";

export default function Content(props) {
    const content = props.content
    
  return (
    <div>
    
    
      {content.map(c => <Part part={c[0]} exercises={c[1]} key={c[2]}/>)}
    
    </div>
  )
}
