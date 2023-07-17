"""
checks for *.js includes within the content of dist/*.html
"""

from typing import LiteralString
import requests
import subprocess
import os

posixpath = str

def posix_path(path: str) -> str:
    return path.replace('\\', '/')

def get_generated_html_files(entry_point: LiteralString, ignore: list[posixpath]) -> list[str]:
    paths = []

    for root, _, files in os.walk(entry_point):
        target_path = posix_path(os.path.relpath(root, entry_point))
        ignored = False
        
        for ignored_path in ignore:
            if target_path.startswith(ignored_path):
                ignored = True
                break

        if ignored:
            continue

        for file in files:
            if not file.endswith(".html"):
                continue

            paths.append(os.path.join(root, file))

    return paths

if __name__ == "__main__":
    if not os.path.exists(os.path.join("dist")):
        subprocess.call("npx astro build", shell=True)

    files = get_generated_html_files(os.path.join("dist"), ignore=["images", "_astro"])

    for file in files:
        with open(file, mode="r", encoding="utf-8") as f:
            contents = f.read()

            assert ".js" not in contents
            print("[no-js-shipment]: file passed")


