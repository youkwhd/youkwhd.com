---
title: "the making of my flask app"
date: "2022-05-17t17:00:00.000z" 
tags:
  - software development 
  - web development
excerpt: "this was actually my first time attempting to make a web app using flask as a technology interest. it also implies with the programming language, python. i will demonstrate on how this app was made, what steps i took, also some regrets i made while making this app."
---

> featuring [https://youkwhd.herokuapp.com](https://youkwhd.herokuapp.com)

this was actually my *first time* attempting to make a web app using flask as a technology interest. it also implies with the programming language, python. i will demonstrate on how this app was made, what steps i took, also some regrets i made while making this app.

## table of contents

## a brief of python

### where does this section of code belong to?

after some tweakings with flask, parsing htmls, some one-line shorthands, i now can state that *i don't like python*. that is because of it's **syntax**. actually, some part of the syntax, for example there is no curly brackets, or `end`-like syntax to keep track of the code inside the block. an example of this can be found in various languages.

in ruby, the syntax could be something like this:

```ruby
def gimme_bacon
	puts "bacon plz."
end
```

whereas in python:

```python
def hello_world():
	print("hello world")
```

well, this were compared with a fairly minimal code, i'm pretty sure that most of developers loves the python one? sure. but it's getting worse if you have something big inside the block, plus if it's nested. what i mean is that, you will be easily lost where you are on the block. take a look at this piece of code:

```python
from . import blueprints
from flask import render_template
from bs4 import beautifulsoup, comment

from pygments import highlight, lexers
from pygments.formatters.html import htmlformatter

@blueprints["posts"].route("/posts/<slug>/")
def post(slug):
	post = get_post(slug)
	soup = beautifulsoup(post.html, "html.parser")

	codes = soup.find_all("code")
	code_formatter = htmlformatter()

	for code_tag in codes:
		language = ""

		# current code_tag is a one line <code />
		if not "\n" in code_tag.string:
			continue

		for char in code_tag.string:
			if (char == "\n"):
				break

			language += char

		code_lexer = lexers.get_lexer_by_name(language)
		highlighted_code = highlight(code_tag.string[len(language):len(code_tag.string)], code_lexer, code_formatter)
		highlighted_code = beautifulsoup(highlighted_code, "html.parser")
		code_tag.parent.replace_with(highlighted_code.pre)

	post.html = str(soup)
	return render_template("posts/slug.html", post=post)
```

possible value of the variable i for every codes:

```python
code_tag = """
<code>python
def hello_world():
	print("hello world")
</code>
"""
```

there, i was trying to implement the code highlighting feature for this webpage.

> ignore the fact that i'm trying to implement the feature by myself instead of using markdown extension.

when compared on a text editor, it's hard to keep track of what chunk of code belongs to which block (for loop, functions), for example, the line `post.html = str(soup)` is hard to be known if it belongs to the `for code_tags in codes` or the function itself. if only i had the ability to use `end`-like keyword, it would be easier to see.

### when there is the end keyword

this is an example if python has some kind of `end`-like keyword to seperate blocks.

```python
codes = soup.find_all("code")
code_formatter = htmlformatter()

for code_tag in codes:
	language = ""

	if not "\n" in code_tag.string:
		continue
	end # wow!

	for char in code_tag.string:
		if (char == "\n"):
			break

		language += char
	end # wow!

	code_lexer = lexers.get_lexer_by_name(language)
	highlighted_code = highlight(code_tag.string[len(language):len(code_tag.string)], code_lexer, code_formatter)
	highlighted_code = beautifulsoup(highlighted_code, "html.parser")
	code_tag.parent.replace_with(highlighted_code.pre)
end # wow!

post.html = str(soup) # clearly belongs to the function, not the for loop
```

now it's a easier to find where it belongs to. that is why i don't like python for it's syntax. i had to navigate from top to bottom to process this code's behaviour.

### will i use python in the future?

**yes**. *absolutely*. i will continue to code in python, but not as my primary go-to language, of course as a **scripting** language. a language that is easy to use, a language that will always be there when i need, it comes with all over the gnu/linux-based systems, mostly there will be python ready to use.

also **no**, for anything unrelated to scripting, never gonna use it for something like this again. if i would build something like this, i might just jump to wasm, it's been attracting me lately. maybe using a fresh language like rust or go.

apart from that, i'm more interested to bash as a scripting language, so..

## project layout

this is how the project layout looks as for now. or you can navigate to this app's [repository](https://github.com/youkwhd/youkwhd.herokuapp.com) to find out.

```text
~/flask_app
├── app
│   ├── __init__.py
│   ├── _posts
│   │   ├── migrating-to-flask-while-saying-hello-again-to-python.md
│   │   └── the-making-of-this-flask-app.md
│   ├── static
│   │   ├── css
│   │   │   ├── code_highlighter.css
│   │   │   └── global.css
│   │   └── lolywk.pubkey.asc
│   ├── templates
│   │   ├── 404.html
│   │   ├── base.html
│   │   ├── home
│   │   │   └── index.html
│   │   └── posts
│   │       ├── index.html
│   │       └── slug.html
│   └── views
│       ├── home.py
│       ├── __init__.py
│       └── posts.py
├── license
├── procfile
├── readme.md
├── requirements.txt
└── run.py
```

the core of this application is mostly at the `app/views/*` and `app/__init__.py`. this is more likely a "functional" layout. a more common layout is the "divisional splitting", that's what they said. an example of divisional splitting can be found on [this repository](https://gitlab.com/patkennedy79/flask-recipe-app).

as a someone who is coming from node.js, i like my current layout better than any. the reason is simple, every directory is self-explanatory.

## parsing blog posts

on this day, i'm using a pre-configured extension for the library markdown. before, i wasn't using it, instead, i use beautifulsoup4. there is a reason behind this.

1. i didn't know there was extensions, i thought there was nothing as such.
2. why would i solve leetcode-like problems if i don't even practice it on the real world?

and so, i began to build up the necessary features for my needs.

* the ability to have table of contents
* code highlighting
* nothing else.

that is it. everything i need. the essentials for a standart blog.

### generating table of contents

starting with the ability to have table of contents, i first need to attach ids for each headings / titles. here's a code snippet showing how i accomplish it:

```python
@blueprints["posts"].route("/posts/<slug>/")
def post(slug):
	post = get_post(slug)
	soup = beautifulsoup(post.html, "html.parser")

	for heading_tag in soup.find_all(re.compile('^h[1-6]$')):
		# replace all non-alphanumeric characters
		heading_tag_id = re.sub(r'[\w]+', "-", heading_tag.string).lower()

		# clean ups, don't mind this while loop
		while heading_tag_id[-1] == "-":
				heading_tag_id = heading_tag_id[0:len(heading_tag_id) - 1]

		# append the generated id
		heading_tag['id'] = heading_tag_id

	post.html = str(soup)
	return render_template("posts/slug.html", post=post)
```

now i can implement table of contents. turns out, it's hard to accomplish. i mean, it's easy enough to generate the table of contents. what's hard is to maintain the best structure. i had hard times deciding on what to check if the headings actually need to open a new ul tag or just appending it on, also, it's hard to have the correct "pointer" to the desired tag to append with.

it's just hard. the thing is, i did it. but didn't made it as great as the pre-configured extension (we'll come back to this later). my table of contents's structure is a mess.

### attempting for code highlighting

the extension codehilite follows the john gruber's [markdown syntax](https://daringfireball.net/projects/markdown/syntax), with a little tweakings done.

> "to produce a code block in markdown, simply indent every line of the block by at least 4 spaces or 1 tab."

i used 4 spaces + colons for any code i wrote in markdown following john gruber's syntax. the complete syntax can be found at the [codehilite extension docs](https://daringfireball.net/projects/markdown/syntax).

#### before knowing extensions is a thing

i tried to parse the code myself then highlight it using pygments. without realizing the syntax is wrong. the code snippet when i tried to parse it myself:

```python
from . import blueprints
from flask import render_template
from bs4 import beautifulsoup, comment

from pygments import highlight, lexers
from pygments.formatters.html import htmlformatter

@blueprints["posts"].route("/posts/<slug>/")
def post(slug):
	post = get_post(slug)
	soup = beautifulsoup(post.html, "html.parser")

	codes = soup.find_all("code")
	code_formatter = htmlformatter()

	for code_tag in codes:
		language = ""

		# current code_tag is a one line <code />
		if not "\n" in code_tag.string:
			continue

		for char in code_tag.string:
			if (char == "\n"):
				break

			language += char

		code_lexer = lexers.get_lexer_by_name(language)
		highlighted_code = highlight(code_tag.string[len(language):len(code_tag.string)], code_lexer, code_formatter)
		highlighted_code = beautifulsoup(highlighted_code, "html.parser")
		code_tag.parent.replace_with(highlighted_code.pre)

	post.html = str(soup)
	return render_template("posts/slug.html", post=post)
```

i was using the three backticks instead of colons.

after trying to write c code, things starting to break, from there. i checked the [flask-flatpages docs](https://flask-flatpages.readthedocs.io/en/latest/index.html#configuration), and realized that there is extensions for highlighting code. wasted time.

#### oh, there is extensions for the markdown library

now i ditched flask-flatpages (flask-flatpages is relying on markdown lib), and started to use the markdown library by itself.

from there, i refactored my code to use the codehilite extension. i don't want to waste my time implementing a feature that is already implemented.

### regenerating table of contents

as i said before, my version of table of contents's **structure** is not that great.

when compared to the extension's, the **visual effect** is just the same.

here is a comparison of the structure between mine and extension's:

```html
<ul>
	<li>
		<ul>
			<li>...</li>
			<li>...</li>
			<li>...</li>
		</ul>
		<ul>
			<li>...</li>
			<li>...</li>
			<li>...</li>
		</ul>
	</li>
</ul>
```

the extension could generate a more cleaner structure:

```html
<ul>
	<li>
		<ul>
			<li>...</li>
			<li>...</li>
			<li>...</li>
			<li>...</li>
			<li>...</li>
			<li>...</li>
		</ul>
	</li>
</ul>
```

this is due to the limited data i have. the markdown library should have something better than parsing using a list of beautifulsoup4 objects. if i put more effort and time to this, i'm sure i would be able to have the same output.

thus i chose what just works. i had my experience making my own, so it's ok for me to just throw my code apart.

## styling the flask app

the styling should be as minimal. it should look like a plain html document. i don't know why i'm more attracted to these kind of sites that is just plain but informative. rather than fancy looking personal websites.

## rss feeds

while writing this article, i'm working on the rss feed. soon enough i will include rss feed for this website.
