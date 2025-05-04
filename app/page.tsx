

import Link from "next/link";


export default function Home() {
  return (
    <>

      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-blue-100 to-white">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Onlayn Kurslar Platformasiga Xush Kelibsiz!
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          Eng yaxshi darslar, zamonaviy bilimlar, oson va interaktiv ta’lim.
        </p>
        <Link
          href="/courses"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          Kurslarni Ko‘rish
        </Link>
      </section>

    </>
  );
}
