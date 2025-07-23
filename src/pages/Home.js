import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { FacebookIcon } from '@heroicons/react/24/outline';
import coverImage from '../main/asset/images/cover.jpg';
import logo from '../main/asset/images/logo.jpg';

const services = [
  {
    name: 'University Application',
    description: 'Complete support for applying to Korean universities, including document preparation and submission.',
    icon: CheckCircleIcon,
  },
  {
    name: 'VISA Processing',
    description: 'Assistance with student visa applications and MOFA document legalization.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Notary Services',
    description: 'Professional notarization services for academic and legal documents.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Air Ticket Booking',
    description: 'Special student discounts on flight tickets to Korea.',
    icon: CheckCircleIcon,
  },
];

const testimonials = [
  {
    content: "Thanks to this agency, my dream of studying in Korea became a reality. They handled everything from university application to my flight booking.",
    author: "Ma Hnin",
    role: "Student at Seoul National University",
  },
  {
    content: "The team made the complex visa process so simple. Their expertise in handling MOFA documents was invaluable.",
    author: "Ko Aung",
    role: "Student at Korea University",
  },
  {
    content: "Professional service from start to finish. They really care about their students' success.",
    author: "Ma Thiri",
    role: "Student at Yonsei University",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side content */}
            <div className="relative z-10 px-6 py-20 sm:py-28 lg:px-8 lg:py-44">
              <div className="mx-auto max-w-2xl lg:mx-0 space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                    "Apply Korea Universities With Dream To Real"
                  </h1>
                  <h1 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">
                  Dream To Real ဖြင့် ကိုရီယားတက္ကသိုလ်များလျှောက်ထားပါ။
                  </h1>
               
                </div>
                
                <p className="text-lg sm:text-xl leading-relaxed text-gray-600 max-w-xl">
                - ကိုရီးယားတွင် ပညာသင်ကြားရန်  တက္ကသိုလ်  ကျောင်းလျှောက်လွှာ ၊ ဗီဇာ၊ ကျောင်းဆောင်၊ လေယာဉ်လက်မှတ်နှင့် အခမဲ့ ဆွေးနွေးတိုင်ပင်မှုများအထိ...
                </p>

                <div className="flex items-center gap-x-4 pt-4">
                  <Link
                    to="/contact"
                    className="rounded-md bg-primary px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition duration-150"
                  >
                    Apply Now
                  </Link>
                  <Link
                    to="/services"
                    className="text-base font-semibold leading-6 text-gray-900 hover:text-primary flex items-center transition duration-150"
                  >
                    Learn more <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                  <a
                    href="https://www.facebook.com/profile.php?id=61556642747393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold leading-6 text-[#1877F2] hover:text-blue-700 flex items-center transition duration-150"
                  >
                    <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Logo */}
            <div className="bg-white lg:h-full flex items-center justify-center p-8">
              <img
                className="w-[500px] h-[500px] object-contain"
                src={logo}
                alt="Dream To Real"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide comprehensive support for students looking to study in Korea, handling everything from applications to arrival.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Student Success Stories
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from our students who successfully made their dream of studying in Korea come true.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200"
            >
              <blockquote className="text-gray-900">
                <p>{`"${testimonial.content}"`}</p>
              </blockquote>
              <div className="mt-6 flex items-center gap-x-4">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-40 mb-16">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Your Journey to Korea?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Contact us today for a free consultation and take the first step towards your dream education.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="text-sm font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 