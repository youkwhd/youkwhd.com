import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// import BlankAnchor from "./BlankAnchor";

const Bio = ({ location }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            nickname
            summary
          }
          social {
            github
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;
  // const social = data.site.siteMetadata?.social;

  const rootPath = `${__PATH_PREFIX__}/`; 
  const paths = [ rootPath, `${rootPath}blog/`, `${rootPath}contact/` ];
  let isMainPath, includesPath, authorTitle;

  for (let i = 0; i < paths.length; i++) {
      if (location.pathname === paths[i]) {
        isMainPath = true;
      }

      if (location.pathname.includes(paths[i])) {
        includesPath = paths[i];
      }
  }

  if(isMainPath) {
    authorTitle = (
        <>
          <h1 className="bio__author-nickname"><Link to="/">{author.nickname}</Link></h1>
        </>
    );
  } else {
      if (includesPath) {
        authorTitle = (
            <>
              <h1 className="bio__author-nickname"><Link to={includesPath}>{author.nickname}</Link></h1>
            </>
        );
      }
  }

  return (
    <div className="bio-wrapper">
        <StaticImage 
            className="bio__author-avatar"
            layout="fixed"
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            src="../../assets/images/profile-pic.jpeg"
            width={80}
            height={80}
            quality={95}
            alt="youkwhd's profile picture"
        />
        {authorTitle}
        <p className="bio__author-summary">{author.summary}</p>
    </div>
  );
};

export default Bio;
