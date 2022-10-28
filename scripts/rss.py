import os
import re
import rfeed as rf
import requests as req
import datetime as date
import markdown as md

posts_dir = f'{os.path.split(__file__)[0]}/../src/_posts'
posts_files = os.listdir(posts_dir)
posts_rss = []

url = "https://youkwhd.vercel.app"

# TODO: use git library or similiar
pushed_files = req.get("https://github.com/youkwhd/youkwhd.vercel.app/tree/master/src/_posts")

for post_file in posts_files:
    if post_file not in pushed_files.text:
        continue

    with open(f'{posts_dir}/{post_file}') as f:
        content = f.read()
        r = re.sub(' -\\s', "   ", content)
        r = re.sub(': "', ": ", r)
        r = re.sub('"', "", r)
        content = r


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
        title="youkwhd's blog posts RSS",
        description="an archive consist of articles from youkwhd's blog",
        link=url,
        language = "en-US",
        lastBuildDate = date.datetime.now(),
        items=posts_rss
        )

rss_file = open(f'{os.path.split(__file__)[0]}/../public/rss.xml', "w")
rss_file.write(feed.rss())
