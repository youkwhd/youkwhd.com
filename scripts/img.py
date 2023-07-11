#!/usr/bin/env python

"""
Checks for image attributes
"""

from bs4 import BeautifulSoup, Tag, ResultSet
import requests

__WEBPAGE_URL__ = "http://localhost:3000"

# Currently, /articles/* is not capable of specifying <img /> width and height attributes
webpage_paths = [
    "/",
    "/articles",
    "/art",
    "/photos",
    "/collections",
    "/pgp-public-key",
]

def main():
    for path in webpage_paths:
        res: requests.Response = requests.get(__WEBPAGE_URL__ + path)
        soup = BeautifulSoup(res.text, "html.parser")

        img_tags: ResultSet[Tag] = soup.find_all("img")
        for img in img_tags:
            print(img, img.get("height"))

    pass

if __name__ == "__main__":
    main()