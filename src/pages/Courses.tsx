import { type Course, courses } from "@/lib/course"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs px-2 py-1 rounded-full border ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-700 border-green-200' :
            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
            'bg-red-100 text-red-700 border-red-200'
          }`}>
            {course.level}
          </span>
          <span className="text-xs text-muted-foreground ml-auto">
            {course.durationHours}h
          </span>
        </div>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription className="line-clamp-2">{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto">
        <span className="text-xs text-muted-foreground">
          {new Date(course.creationDate).toLocaleDateString()}
        </span>
        <Button size="sm">Voir le cours</Button>
      </CardFooter>
    </Card>
  )
}

export default function Courses() {
  return (
    <section className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Nos Cours</h1>
        <p className="text-muted-foreground max-w-2xl">
          Une sélection de cours clairs et intuitifs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </section>
  )
}