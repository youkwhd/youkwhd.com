#!/usr/bin/env python

"""
checks for *.js includes within the content of dist/*.html
"""

from typing import LiteralString
import re, os, subprocess

def get_generated_html_files(entry_point: LiteralString, ignore: list[str]) -> list[str]:
    paths = []

    for root, _, files in os.walk(entry_point):
        target_path = os.path.relpath(root, entry_point)
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
        print("no dist build found\nsee: ./build.sh")
        exit(1)

    files = get_generated_html_files(os.path.join("dist"), ignore=["images", "_astro"])

    for file in files:
        contents = open(file, mode="r", encoding="utf-8").read()
        js_occurences = re.findall(r"[\w]*\.js", contents)
        assert len(js_occurences) == 0
        print(f"[tests/no-js-shipment]: file passed! ({file})")
