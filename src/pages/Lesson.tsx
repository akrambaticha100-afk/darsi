import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, CheckCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Lesson() {
  const navigate = useNavigate()

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate("/student")} className="pl-0 hover:pl-2 transition-all">
        <ChevronLeft className="mr-2 h-4 w-4" /> Retour au tableau de bord
      </Button>

      {/* Video Section */}
      <div className="aspect-video bg-black rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg">
         {/* Placeholder for a real video */}
         <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=X9y-a3zA5G" 
            title="Video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
         ></iframe>
      </div>

      {/* Lesson Content */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <Badge variant="secondary" className="mb-2">Leçon 1</Badge>
                <CardTitle className="text-2xl">Introduction et Configuration</CardTitle>
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                <CheckCircle className="mr-2 h-4 w-4" /> Marquer comme terminé
              </Button>
            </div>
          </CardHeader>
          <CardContent className="prose dark:prose-invert">
            <p>
              Bienvenue dans cette première leçon ! Aujourd'hui, nous allons voir les bases
              fondamentales pour bien démarrer.
            </p>
            <h3>Dans cette vidéo, vous allez apprendre :</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Comment installer les outils nécessaires.</li>
              <li>Comprendre la structure du projet.</li>
              <li>Écrire votre première ligne de code.</li>
            </ul>
            <p className="mt-4">
              N'oubliez pas de pratiquer en même temps que la vidéo. Si vous avez des questions,
              laissez un commentaire ci-dessous.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}