import { ArrowRight, BookOpen, Users } from "lucide-react"
import { Button } from "./ui/button"
import React from "react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Unlock Your
                <span className="text-emerald-600 block">Academic Potential</span>
              </h1>
              <p className="text-lg text-emerald-700 font-medium italic">
                GREAT Coaching - Galway Regional Education and Tutorial Centre
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join GREAT Coaching Center and excel in Mathematics, Science (Physics & Chemistry), Irish and English with personalized learning,
                comprehensive worksheets, and regular assessments for all age groups.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("register")}
                className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3"
              >
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="text-lg px-8 py-3 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-emerald-600" />
                <span className="text-gray-700 font-medium">Math, English, Science & Irish</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-emerald-600" />
                <span className="text-gray-700 font-medium">All Age Groups</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-3xl">
                <img
                  src="/StudentsLearning.jpg"
                  alt="Students learning together in a classroom setting"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-emerald-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
