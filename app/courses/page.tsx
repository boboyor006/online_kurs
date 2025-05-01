"use client";

import Link from "next/link";
import Image from "next/image";
import ImgeReact from "../../img/react.jpg"

const courses = [
  {
    id: "1",
    title: "React Asoslari",
    description: "Komponentlar, props, state, va hooklar bilan React asoslarini o‘rganing.",
    image: ImgeReact,
  },
  {
    id: "2",
    title: "Tailwind CSS Mastery",
    description: "Tailwind bilan professional, responsiv va chiroyli dizaynlar yarating.",
    image: "https://images.unsplash.com/photo-1610484824535-67a4b2b2a68e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Next.js Bilan Fullstack",
    description: "Next.js yordamida SEO, SSR va API endpointlar bilan to‘liq stack loyihalar qiling.",
    image: "https://images.unsplash.com/photo-1523475496153-3d6ccf8fbc56?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CoursesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      {/* Header dizayni */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          🎓 Barcha Kurslar
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Eng yaxshi dasturlash kurslarini o‘rganing va o‘z malakangizni oshiring!
        </p>
      </header>

      {/* Kurslar ro‘yxati */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={800}
              height={400}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <Link
                href={`/courses/${course.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Kursni ko‘rish →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
