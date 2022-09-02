const Header = ({ course }) => <h1>{course.name}</h1>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ course }) => {
    return (
        <div>
            {
                course.parts.map(part =>
                    <Part key={part.id} part={part} />
                )
            }
        </div>
    )
}

const Total = ({ course }) => {
    const exercises = course.parts.map(part => part.exercises)
    const total = exercises.reduce((prev, curr) => prev + curr, 0)

    return <p>Number of exercises {total}</p>
}

const Course = ({ course }) => {

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course