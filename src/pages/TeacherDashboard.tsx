import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Pencil, Trash2, Users } from "lucide-react"

export default function TeacherDashboard() {
  const managedCourses = [
    { id: 1, title: "Introduction à React", students: 124, status: "Publié", lastUpdated: "2024-03-10" },
    { id: 2, title: "Maîtriser Node.js", students: 85, status: "Publié", lastUpdated: "2024-03-15" },
    { id: 3, title: "Algorithmes Avancés", students: 0, status: "Brouillon", lastUpdated: "2024-03-20" },
  ]

  return (
    <div className="p-8 space-y-8 bg-background min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Espace Enseignant</h1>
          <p className="text-muted-foreground">Gérez vos cours et vos étudiants.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nouveau Cours
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Étudiants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">209</div>
          </CardContent>
        </Card>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableCaption>Liste de vos cours créés.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Titre du cours</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Étudiants</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {managedCourses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">{course.title}</TableCell>
                <TableCell>{course.status}</TableCell>
                <TableCell>{course.students}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}