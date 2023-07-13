#!/usr/bin/env python

import os 
import pathlib
from utils.log import *

__PAGE_CONFIG__ = "export const config: PageConfig = { unstable_runtimeJS: false }"
__STARTING_DIR__ = os.path.join(os.path.dirname(os.path.realpath(__file__)), "..", "src", "pages")

exit_code = 0

def main():
    dir = pathlib.Path(__STARTING_DIR__)
    files = [entry for entry in dir.resolve().glob(os.path.join("**", "*")) if entry.is_file()]

    for file in files:
        if str(file.stem).startswith("_"):
            continue

        if __PAGE_CONFIG__ in open(file, mode="r", encoding="utf-8").read():
            log_success("OK", file)
        else:
            global exit_code
            exit_code = 1
            log_failure("Missing PageConfig", file)

    log_reset()

if __name__ == "__main__":
    main()
    exit(exit_code)