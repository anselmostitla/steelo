import Link from "next/link"



const HelpCenter = () => {
  const HelpCenter = [
    {
      name: "About",
      link: "about"
    },
    {
      name: "Contact Us",
      link: "contact-us"
    },
    {
      name: "Sign Up",
      link: "sign-up"
    },
    {
      name: "Sign In",
      link: "sign-in"
    },
    {
      name: "Subscription",
      link: "subscription"
    }
  ]
  return(
    <div className="absolute border rounded-lg shadow-2xl bg-gray-100 px-5 py-3 mt-6 space-y-2 z-20">
      {HelpCenter.map((el,i) => (
        <div key={i}>
          <Link href={`/${el.link}`}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default HelpCenter