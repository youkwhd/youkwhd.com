#!/usr/bin/env python

"""
Checks for image attributes
"""

from bs4 import BeautifulSoup, Tag, ResultSet
from colorama import Fore
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

def log_success(*arg):
    print(f"{Fore.GREEN}[*]:", *arg)

def log_warning(*arg):
    print(f"{Fore.YELLOW}[*]:", *arg)

def log_failure(*arg):
    print(f"{Fore.RED}[*]:", *arg)

def main():
    for path in webpage_paths:
        res: requests.Response = requests.get(__WEBPAGE_URL__ + path)
        soup = BeautifulSoup(res.text, "html.parser")

        img_tags: ResultSet[Tag] = soup.find_all("img")
        for img in img_tags:
            failed = False
            warning = False

            if img.get("height") is None:
                log_failure(f"Failed: No height attribute found: \"{__WEBPAGE_URL__ + path}\" @ \"{img.get('src')}\"")
                failed = True
            if img.get("width") is None:
                log_failure(f"Failed: No width attribute found: \"{__WEBPAGE_URL__ + path}\" @ \"{img.get('src')}\"")
                failed = True
            if img.get("loading") != "lazy":
                log_warning(f"Warning: loading attribute should be set as \"lazy\": \"{__WEBPAGE_URL__ + path}\" @ \"{img.get('src')}\"")
                warning = True
            
            if failed or warning:
                continue
                
            log_success(f"Passed: \"{__WEBPAGE_URL__ + path}\" @ \"{img.get('src')}\"")

if __name__ == "__main__":
    main()