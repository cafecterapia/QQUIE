import {
  CodeBracketIcon,
  CubeTransparentIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/24/outline';
import { Container } from '@/components/ui/Container';

const features = [
  {
    name: 'TypeScript First',
    description: 'Built with TypeScript for better development experience and fewer runtime errors.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Modern UI Components',
    description: 'Beautiful, accessible components built with Tailwind CSS and Headless UI.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Mobile Optimized',
    description: 'Fully responsive design that works perfectly on all devices and screen sizes.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'SEO Optimized',
    description: 'Built-in SEO optimization with proper meta tags and structured data.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Secure by Default',
    description: 'Security headers, authentication, and best practices built in from the start.',
    icon: LockClosedIcon,
  },
  {
    name: 'Production Ready',
    description: 'Optimized for production with caching, compression, and performance monitoring.',
    icon: ServerIcon,
  },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build modern web apps
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our Next.js template comes with all the essential features and best practices
            you need to build scalable, production-ready applications.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}