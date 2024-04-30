
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8TyJ4j8Xriw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Calendar } from "@/components/ui/calendar"

export default function Component() {
  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Classmates</h1>
        <nav className="flex gap-4">
          <Link className="hover:underline" href="#">
            Home
          </Link>
          <Link className="hover:underline" href="#">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Classmates
          </Link>
          <Link className="hover:underline" href="#">
            Events
          </Link>
        </nav>
      </header>
      <main>
        <section className="bg-gray-100 py-12 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8">
            <div>
              <img
                alt="Teacher"
                className="rounded-full"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Meet the Teacher</h2>
              <p className="mb-4">
                Our teacher, Ms. Johnson, has been educating students for over 15 years. She is passionate about helping
                her students succeed and always goes the extra mile to ensure they understand the material.
              </p>
              <div className="flex gap-4">
                <div>
                  <h3 className="font-bold">Contact</h3>
                  <p>
                    Email:
                    <a className="underline" href="#">
                      teacher@classmates.com
                    </a>
                  </p>
                  <p>
                    Phone:
                    <a className="underline" href="#">
                      +1 (234) 567-890
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Office Hours</h3>
                  <p>Monday - Friday, 9am - 5pm</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Classmates</h2>
          <div className="grid grid-cols-3 gap-6">
            <img
              alt="Classmate 1"
              className="rounded-full"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width={300}
            />
            <img
              alt="Classmate 2"
              className="rounded-full"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width={300}
            />
            <img
              alt="Classmate 3"
              className="rounded-full"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width={300}
            />
            <img
              alt="Classmate 4"
              className="rounded-full"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width={300}
            />
            <img
              alt="Classmate 5"
              className="rounded-full"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width={300}
            />
            <img
              alt="Classmate 6"
              className="rounded-full"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width={300}
            />
          </div>
        </section>
        <section className="bg-gray-100 py-12 px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Class Field Trip</h3>
              <p className="mb-4">
                Join us for a field trip to the local museum on May 15th. We'll explore the exhibits and learn about the
                history of our community.
              </p>
              <div className="flex gap-4">
                <div>
                  <h4 className="font-bold">Date</h4>
                  <p>May 15, 2023</p>
                </div>
                <div>
                  <h4 className="font-bold">Time</h4>
                  <p>9:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Class Picnic</h3>
              <p className="mb-4">
                Let's celebrate the end of the school year with a class picnic on June 10th. Bring your favorite dishes
                and let's enjoy the outdoors together.
              </p>
              <div className="flex gap-4">
                <div>
                  <h4 className="font-bold">Date</h4>
                  <p>June 10, 2023</p>
                </div>
                <div>
                  <h4 className="font-bold">Time</h4>
                  <p>12:00 PM - 4:00 PM</p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <Calendar className="w-full" />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-4 px-6 text-center">
        <p>© 2023 Classmates. All rights reserved.</p>
      </footer>
    </>
  )
}

