import { Link } from 'react-router-dom';
import {
  AcademicCapIcon,
  DocumentCheckIcon,
  DocumentTextIcon,
  PaperAirplaneIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Korean University Application Support',
    description: 'Complete assistance with university applications, from choosing the right program to submission.',
    icon: AcademicCapIcon,
    features: [
      'University selection guidance',
      'Document preparation and translation',
      'Application form filling',
      'Personal statement review',
      'Interview preparation',
      'Scholarship application assistance',
    ],
  },
  {
    name: 'VISA and MOFA Document Legalization',
    description: 'Expert assistance with visa processing and document legalization for studying in Korea.',
    icon: DocumentCheckIcon,
    features: [
      'Student visa application support',
      'MOFA document legalization',
      'Document translation services',
      'Immigration guidance',
      'Visa interview preparation',
      'Status tracking and updates',
    ],
  },
  {
    name: 'Notary Services',
    description: 'Professional notarization services for academic and legal documents required for your application.',
    icon: DocumentTextIcon,
    features: [
      'Academic document notarization',
      'Legal document authentication',
      'Certified translations',
      'Document verification',
      'Express processing available',
      'International certification',
    ],
  },
  {
    name: 'Air Ticket Booking',
    description: 'Special student discounts on flight tickets to Korea and travel arrangement assistance.',
    icon: PaperAirplaneIcon,
    features: [
      'Student discount fares',
      'Flexible booking options',
      'Baggage allowance advice',
      'Airport pickup arrangement',
      'Travel insurance options',
      'Flight schedule consultation',
    ],
  },
  {
    name: 'Study Abroad Consultation',
    description: 'Personalized guidance to help you plan your education journey in Korea.',
    icon: UserGroupIcon,
    features: [
      'One-on-one counseling',
      'Course selection advice',
      'Budget planning',
      'Cultural orientation',
      'Accommodation guidance',
      'Post-arrival support',
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Services</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Comprehensive support services to make your dream of studying in Korea a reality.
            </p>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Study in Korea
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From university applications to your arrival in Korea, we provide comprehensive support at every step of your journey.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col rounded-2xl bg-white p-8 ring-1 ring-gray-200">
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">{service.name}</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">{service.description}</p>
                <ul role="list" className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 text-sm leading-6 text-gray-600">
                      <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Contact us today for a free consultation and let us help you achieve your dream of studying in Korea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 