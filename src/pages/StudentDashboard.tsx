import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"
import { useNavigate } from "react-router-dom" // <--- IMPORT THIS

export default function StudentDashboard() {
  const navigate = useNavigate() // <--- ACTIVATE NAVIGATION

  const myCourses = [
    { id: 1, title: "Introduction à React", progress: 0, totalLessons: 1, completedLessons: 0 },
    { id: 2, title: "Maîtriser Node.js", progress: 0, totalLessons: 1, completedLessons: 0 },
    { id: 3, title: "Les bases de TypeScript", progress: 0, totalLessons: 1, completedLessons: 0 },
  ]

  return (
    <div className="p-8 space-y-8 bg-background min-h-screen">
      <div>
        <h1 className="text-3xl font-bold">Mon Apprentissage</h1>
        <p className="text-muted-foreground">Retrouvez vos cours et votre progression.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myCourses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <Badge variant="outline">Non commencé</Badge>
              </div>
              <CardDescription>
                {course.completedLessons} / {course.totalLessons} leçons terminées
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progression</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              {/* ADD ONCLICK HERE */}
              <Button 
                className="w-full gap-2" 
                onClick={() => navigate("/lesson")}
              >
                <BookOpen className="h-4 w-4" />
                Commencer
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}