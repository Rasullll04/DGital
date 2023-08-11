const navLinks = [
  { href: "index.html", label: "Home", isActive: true },
  { href: "about.html", label: "About" },
  { href: "service.html", label: "Service" },
  { href: "project.html", label: "Project" },
  {
    href: "#",
    label: "Pages",
    dropdownItems: [
      { href: "team.html", label: "Our Team" },
      { href: "testimonial.html", label: "Testimonial" },
      { href: "404.html", label: "404 Page" },
    ],
  },
  { href: "contact.html", label: "Contact" },
];

const getStartedLink = {
  href: "#",
  label: "Get Started",
  classNames: "btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block",
};

export { navLinks, getStartedLink };
