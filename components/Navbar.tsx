import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];

  return (
    <nav className="flex items-center justify-between py-4 px-4 border-4 border-gray-900 mb-12 bg-white">
      <Link href="/" className="font-extrabold text-xl tracking-wider hover:opacity-70">
        BENEDICT
      </Link>
      <div className="flex space-x-4 md:space-x-8">
        {navLinks.map((link) => (
          <Link key={link.title} href={link.href} className="text-sm font-semibold hover:underline">
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}