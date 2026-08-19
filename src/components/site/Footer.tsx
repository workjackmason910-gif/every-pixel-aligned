export function Footer() {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-heading text-primary-foreground text-sm">
          Dr. Pat&rsquo;s Pathways to Healing
        </p>
        <p className="text-primary-foreground/60 text-xs mt-2">
          &copy; {new Date().getFullYear()} Dr. Pat Pernicano, Psy.D. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
