import React from "react";
import { AnimatedMeshGradient } from "@/components/ui/AnimatedMeshGradient";
import { TagBadge } from "@/components/ui/TagBadge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function TestPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-page)] pb-32">
      <div className="max-w-4xl mx-auto px-8 pt-16 space-y-24">
        
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Design System Test</h1>
          <p className="text-[var(--color-text-muted)]">Verifying the 5 reusable pieces for Part 1.</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-[var(--color-border)] pb-2">1. Animated Mesh Gradient</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">Variant: Hero</h3>
              <div className="h-[400px] rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm">
                <AnimatedMeshGradient variant="hero" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">Variant: Footer</h3>
              <div className="h-[400px] rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm">
                <AnimatedMeshGradient variant="footer" />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-[var(--color-border)] pb-2">2 & 3. Accent Blue & Tag/Badge</h2>
          <div className="p-8 bg-white rounded-2xl border border-[var(--color-border)] shadow-sm flex flex-wrap gap-4">
            <TagBadge>React</TagBadge>
            <TagBadge>TypeScript</TagBadge>
            <TagBadge>Next.js</TagBadge>
            <TagBadge>Tailwind CSS</TagBadge>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-[var(--color-border)] pb-2">4. Button System</h2>
          <div className="p-8 bg-white rounded-2xl border border-[var(--color-border)] shadow-sm flex flex-col items-start gap-8">
            <div className="flex gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Outline</Button>
            </div>
            <div>
              <Button variant="link">View details</Button>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-[var(--color-border)] pb-2">5. Card Component</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <Card hoverable className="p-6">
              <div className="space-y-4">
                <TagBadge>Hoverable Card</TagBadge>
                <h3 className="text-xl font-bold">Project Title</h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                  This card has hoverable set to true, making it lift up slightly with an enhanced shadow on hover.
                </p>
                <div className="pt-4 border-t border-[var(--color-border)]">
                  <Button variant="link">View project</Button>
                </div>
              </div>
            </Card>
            
            <Card className="p-0">
              <div className="h-32 w-full relative bg-[var(--color-accent-green-tint)] flex items-center justify-center">
                 <span className="text-[var(--color-accent-green)] font-medium">Image Area</span>
              </div>
              <div className="p-6 space-y-4">
                <TagBadge>Standard Card</TagBadge>
                <h3 className="text-xl font-bold">Static Card</h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                  A clean, rounded-2xl container with a subtle shadow and thin border.
                </p>
              </div>
            </Card>
          </div>
        </section>

      </div>
    </main>
  );
}
