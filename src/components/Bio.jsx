import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import BlankAnchor from "./BlankAnchor";

const Bio = () => {
    const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
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
  const social = data.site.siteMetadata?.social;

    return (
        <div className="bio-wrapper">
            <StaticImage 
                className="bio-avatar"
                layout="fixed"
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
                src="../assets/images/profile-pic.jpeg"
                width={140}
                height={140}
                quality={95}
                alt="youkwhd's profile picture"
            />
            {author?.name && (
                <p>
                    personal web by <strong>
                        <BlankAnchor href={`https://github.com/${social?.github || ``}`}>{author.name}</BlankAnchor>
                    </strong>
                    <br />
                    {author?.summary || null}
                </p>
            )}
        </div>
    );
};

export default Bio;
