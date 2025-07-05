import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function CTA() {
  return (
    <section className="bg-primary-600 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
            Join thousands of developers who are building amazing applications with our
            Next.js template. Start your project today and ship faster than ever.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button variant="secondary" size="lg">
              Get Started Now
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-600">
              View Documentation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}