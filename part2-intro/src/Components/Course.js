import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = (props) => {
    
    const content = props.course.parts.map(part => [part.name, part.exercises, part.id])    

    return (
        <div>
          <Header course={props.course.name} />
          <Content content={content}/>
          <Total parts={props.course.parts}/>
          
        </div>
      )
}

export default Course