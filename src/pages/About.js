const team = [
  {
    name: 'U Aung Ko Ko',
    role: 'Founder & CEO',
    imageUrl: '/team/ceo.jpg',
    bio: '15+ years of experience in international education consulting. Former education advisor at the Korean Embassy.',
  },
  {
    name: 'Daw Myint Myint',
    role: 'Senior Education Consultant',
    imageUrl: '/team/consultant1.jpg',
    bio: 'Specialized in Korean university admissions with 8 years of experience helping students achieve their dreams.',
  },
  {
    name: 'Ko Thet Pine',
    role: 'VISA Specialist',
    imageUrl: '/team/visa-specialist.jpg',
    bio: 'Expert in student visa processing and document legalization. Former immigration consultant.',
  },
  {
    name: 'Ma Su Su',
    role: 'Student Support Coordinator',
    imageUrl: '/team/coordinator.jpg',
    bio: 'Helps students with accommodation, cultural adjustment, and day-to-day support in Korea.',
  },
];

const stats = [
  { label: 'Students Placed', value: '500+' },
  { label: 'Partner Universities', value: '50+' },
  { label: 'Years of Experience', value: '15+' },
  { label: 'Success Rate', value: '98%' },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Your trusted partner in achieving your dream of studying in Korea. We've been helping students navigate their educational journey since 2009.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                To empower Myanmar students with the opportunity to pursue quality education in Korea by providing comprehensive support and guidance throughout their academic journey.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Vision</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                To be the leading education consultancy bridging Myanmar and Korean educational institutions, fostering cultural exchange and academic excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            By the numbers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our track record speaks for itself. We've helped hundreds of students achieve their dreams of studying in Korea.
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
              <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
            </div>
          ))}
        </div>
      </div>

      {/* Team section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet our experienced team of education consultants dedicated to helping you achieve your study abroad goals.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {team.map((person) => (
            <li key={person.name}>
              <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-primary">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 mb-16">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Us?</h2>
          <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600">
            <div>
              <strong className="font-semibold text-gray-900">Expertise & Experience:</strong>
              <p className="mt-1">
                Our team has over 15 years of experience in Korean education consulting and maintains strong relationships with top universities.
              </p>
            </div>
            <div>
              <strong className="font-semibold text-gray-900">Comprehensive Support:</strong>
              <p className="mt-1">
                From university selection to arrival in Korea, we provide end-to-end support including visa processing, accommodation arrangements, and cultural orientation.
              </p>
            </div>
            <div>
              <strong className="font-semibold text-gray-900">Proven Track Record:</strong>
              <p className="mt-1">
                98% success rate in university placements and visa approvals, with hundreds of satisfied students studying at top Korean universities.
              </p>
            </div>
            <div>
              <strong className="font-semibold text-gray-900">Personalized Guidance:</strong>
              <p className="mt-1">
                We understand each student's unique needs and provide tailored advice to help them choose the best academic path.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 