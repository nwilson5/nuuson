const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
        <div className="container mx-auto px-4 py-4 text-center">
            © {new Date().getFullYear()} Nicholas Wilson. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer