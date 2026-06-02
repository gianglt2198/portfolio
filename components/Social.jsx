import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: 'https://github.com/gianglt2198'
    },
    {
        icon: <FaLinkedin />,
        path: 'https://www.linkedin.com/in/giang-le-bb7b391a1/'
    },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => (
                <Link key={index} href={social.path} className={iconStyles}>
                    {social.icon}
                </Link>
            ))}
        </div>
    )
}

export default Social