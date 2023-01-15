import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillTags } from 'react-icons/ai';
import { MdOutlinePostAdd } from 'react-icons/md';
import { AiOutlineFileText } from 'react-icons/ai';
import { TiSocialLinkedin } from 'react-icons/ti';
import clsx from 'clsx';

const Nav = () => {
  const baseNavLinkStyles =
    'flex cursor-pointer gap-2 rounded-sm px-4 py-2 text-sm font-semibold hover:bg-temp-700';

  const activeNavLinkStyles =
    'decoration-primary-500 decoration-2 underline underline-offset-8';

  const iconStyles = 'text-xl text-primary-500';

  return (
    <nav className="flex items-center justify-center bg-temp-800 py-2 text-gray-300">
      <ul className="flex gap-4 font-title">
        <li>
          <NavLink
            className={({ isActive }) =>
              clsx(baseNavLinkStyles, isActive && activeNavLinkStyles)
            }
            to="/"
          >
            <TiSocialLinkedin className={iconStyles} />
            SCRAPE LINKEDIN
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              clsx(baseNavLinkStyles, isActive && activeNavLinkStyles)
            }
            to="/postings"
          >
            <AiOutlineFileText className={iconStyles} />
            POSTINGS
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              clsx(baseNavLinkStyles, isActive && activeNavLinkStyles)
            }
            to="/add-posting"
          >
            <MdOutlinePostAdd className={iconStyles} />
            ADD POSTING
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              clsx(baseNavLinkStyles, isActive && activeNavLinkStyles)
            }
            to="/tags"
          >
            <AiFillTags className={iconStyles} />
            TAGS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
