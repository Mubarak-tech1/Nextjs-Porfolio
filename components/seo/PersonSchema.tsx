export default function PersonSchema() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://adiomubarakadebukola.netlify.app/#person",
    name: "Adio Mubarak",
    url: "https://adiomubarakadebukola.netlify.app/",
    jobTitle: "Frontend Developer",
    description:
      "Frontend developer building responsive websites and modern web applications for businesses and individuals.",
    image: "https://adiomubarakadebukola.netlify.app/images/mubarak.png",
    sameAs: [
      "https://www.linkedin.com/in/buildwithmubarak",
      "https://www.x.com/buildwitmubarak",
      "https://github.com/Mubarak-tech1",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person).replace(/</g, "\\u003c"),
      }}
    />
  );
}
