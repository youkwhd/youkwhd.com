import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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
                src="../assets/images/youkwhd.jpeg"
                width={80}
                height={80}
                quality={95}
                alt="youkwhd's profile picture"
            />
            {author?.name && (
                <p>
                    written by <strong>
                        <a href={`https://github.com/${social?.github || ``}`} target="_blank" rel="noopener noreferrer">{author.name}</a>
                    </strong>
                    <br />
                    {author?.summary || null}
                </p>
            )}
        </div>
    );
};

export default Bio;