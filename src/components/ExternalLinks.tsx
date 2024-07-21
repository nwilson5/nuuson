import Link from 'next/link'

const ExternalLinks = () => {
    return (
        <div className="flex justify-center space-x-4">
            <Link href="https://www.linkedin.com/in/nwilson5/" className="w-32 bg-blue-600 text-white px-4 py-1 rounded hover:text-white hover:underline transition duration-300 text-center">
                LinkedIn
            </Link>
            <Link href="mailto:nwilson5@gmail.com" className="w-32 bg-gray-600 text-white px-4 py-1 rounded hover:text-white hover:underline transition duration-300 text-center">
                Email
            </Link>
            <Link href="https://github.com/nwilson5" className="w-32 bg-gray-800 text-white px-4 py-1 rounded hover:text-white hover:underline transition duration-300 text-center">
                GitHub
            </Link>
        </div>
    )
}

export default ExternalLinks;
