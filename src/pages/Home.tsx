import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section (Built-in) */}
      <section className="py-20 text-center space-y-6 bg-gradient-to-b from-background to-muted/50">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Bienvenue sur Darsi
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          La plateforme d'apprentissage collaborative pour étudiants et enseignants.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" onClick={() => navigate("/courses")}>
            Voir les Cours
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate("/student")}>
            Mon Tableau de Bord
          </Button>
        </div>
      </section>
      
      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-8 p-10 bg-background">
        <div className="text-center space-y-4 p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold">Pour les Étudiants</h2>
          <p className="text-muted-foreground">Suivez vos cours et progressez.</p>
          <Button className="w-full" onClick={() => navigate("/student")}>
            Espace Étudiant
          </Button>
        </div>

        <div className="text-center space-y-4 p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold">Pour les Enseignants</h2>
          <p className="text-muted-foreground">Créez et gérez vos contenus.</p>
          <Button className="w-full" variant="outline" onClick={() => navigate("/teacher")}>
            Espace Enseignant
          </Button>
        </div>
      </div>
    </div>
  )
}