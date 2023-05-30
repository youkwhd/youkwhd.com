#!/usr/bin/python3

import os
import re
from sys import platform
import rfeed as rf
import requests as req
import datetime as date
import markdown as md

""" WIP
convert path
"""
def path_os_relative(path: str) -> str:
    if platform == "linux" or platform == "linux2":
        path = path.replace('\\', os.sep)
    elif platform == "win32" or platform == "cygwin":
        path = path.replace('/', os.sep)
    elif platform == "darwin":
        pass

    return path

posts_dir = path_os_relative(f'{os.path.split(__file__)[0]}/../assets/posts')
posts_files = list(filter(lambda x: x.endswith(".md"), os.listdir(posts_dir)))
posts_rss = []

domain = "youkwhd.com"
url = f"https://{domain}"

# TODO: use git library or similiar
pushed_files = req.get(f"https://github.com/youkwhd/{domain}/tree/master/assets/_posts")
posts_files = [post_file for post_file in posts_files if post_file not in pushed_files.text]

for post_file in posts_files:
    with open(path_os_relative(f'{posts_dir}/{post_file}'), encoding='utf-8') as f:
        content = f.read()
        content = re.sub(' -\\s', "   ", content)
        content = re.sub(': "', ": ", content)
        content = re.sub('"', "", content)

        md_conv = md.Markdown(extensions=["meta"])
        html = md_conv.convert(content)

        metadata = md_conv.Meta

        post_slug = os.path.splitext(post_file)[0]
        post_url = f'{url}/posts/{post_slug}'
        post_date_split = metadata["date"][0].split("-")
        post_date = date.datetime(int(post_date_split[0]), int(post_date_split[1]), int(post_date_split[2].split("T")[0]))

        rss_item = rf.Item(
                title=metadata["title"][0],
                link=post_url,
                description=metadata["excerpt"][0],
                guid=rf.Guid(post_url),
                pubDate=post_date
                )

        posts_rss.append(rss_item)

feed = rf.Feed(
        title="youkwhd's blog posts rss",
        description="an archive consist of articles from youkwhd's blog",
        link=url,
        language = "en-US",
        lastBuildDate = date.datetime.now(),
        items=posts_rss
        )

rss_file = open(path_os_relative(f'{os.path.split(__file__)[0]}/../public/rss.xml'), "w")
# rss_file.write(feed.rss())
