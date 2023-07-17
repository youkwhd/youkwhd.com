"""
python -m http.server -d dist
serve dist/ directory, then run this test
"""

from typing import LiteralString
import requests
import subprocess
import os

posixpath = str

def posix_path(path: str) -> str:
    return path.replace('\\', '/')

def generate_web_paths(url: str, entry_point: LiteralString, ignore: list[posixpath]) -> list[str]:
    paths = []

    for root, _, _ in os.walk(entry_point):
        if root == entry_point:
            continue

        target_path = posix_path(os.path.relpath(root, entry_point))
        ignored = False
        
        for ignored_path in ignore:
            if target_path.startswith(ignored_path):
                ignored = True
                continue

        if not ignored:
            paths.append(url + target_path)

    return paths

if __name__ == "__main__":
    if not os.path.exists(os.path.join("dist")):
        subprocess.call("npx astro build", shell=True)

    web_port = 8000
    web_url = f"http://localhost:{web_port}/"
    web_paths = generate_web_paths(web_url, os.path.join("dist"), ignore=["images", "_astro"])

