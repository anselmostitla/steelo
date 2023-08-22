import Link from 'next/link'



const Discover = () => {
  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    },
  ]
  return(
    <div className="absolute border rounded-lg shadow-2xl bg-gray-100 px-5 py-3 mt-6 space-y-2 z-20">
      {discover.map((el,i) => (
        <div key={i}>
          <Link href={`/${el.link}`}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Discover