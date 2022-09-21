---
title: "The making of my Flask app"
date: "2022-05-17T17:00:00.000Z" 
tags:
  - software development 
  - web development
excerpt: "This was actually my first time attempting to make a web app using Flask as a technology interest. It also implies with the programming language, python. I will demonstrate on how this app was made, what steps i took, also some regrets i made while making this app."
sidenote: ""
---

> featuring [https://youkwhd.herokuapp.com](https://youkwhd.herokuapp.com)

This was actually my *first time* attempting to make a web app using Flask as a technology interest. It also implies with the programming language, python. I will demonstrate on how this app was made, what steps i took, also some regrets i made while making this app.

## Table of contents

## A brief of python

### Where does this section of code belong to?

After some tweakings with Flask, parsing HTMLs, some one-line shorthands, i now can state that *i don't like python*. That is because of it's **syntax**. Actually, some part of the syntax, for example there is no curly brackets, or `end`-like syntax to keep track of the code inside the block. An example of this can be found in various languages.

In ruby, the syntax could be something like this:

```ruby
def gimme_bacon
	puts "Bacon plz."
end
```

Whereas in python:

```python
def hello_world():
	print("hello world")
```

Well, this were compared with a fairly minimal code, i'm pretty sure that most of developers loves the python one? sure. But it's getting worse if you have something big inside the block, plus if it's nested. What i mean is that, you will be easily lost where you are on the block. Take a look at this piece of code:

```python
from . import blueprints
from flask import render_template
from bs4 import BeautifulSoup, Comment

from pygments import highlight, lexers
from pygments.formatters.html import HtmlFormatter

@blueprints["posts"].route("/posts/<slug>/")
def post(slug):
	post = get_post(slug)
	soup = BeautifulSoup(post.html, "html.parser")

	codes = soup.find_all("code")
	code_formatter = HtmlFormatter()

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
		highlighted_code = BeautifulSoup(highlighted_code, "html.parser")
		code_tag.parent.replace_with(highlighted_code.pre)

	post.html = str(soup)
	return render_template("posts/slug.html", post=post)
```

Possible value of the variable i for every codes:

```python
code_tag = """
<code>python
def hello_world():
	print("hello world")
</code>
"""
```

There, i was trying to implement the code highlighting feature for this webpage.

> Ignore the fact that i'm trying to implement the feature by myself instead of using markdown extension.

When compared on a text editor, it's hard to keep track of what chunk of code belongs to which block (for loop, functions), for example, the line `post.html = str(soup)` is hard to be known if it belongs to the `for code_tags in codes` or the function itself. If only i had the ability to use `end`-like keyword, it would be easier to see.

### When there is the end keyword

This is an example if python has some kind of `end`-like keyword to seperate blocks.

```python
codes = soup.find_all("code")
code_formatter = HtmlFormatter()

for code_tag in codes:
	language = ""

	if not "\n" in code_tag.string:
		continue
	end # WOW!

	for char in code_tag.string:
		if (char == "\n"):
			break

		language += char
	end # WOW!

	code_lexer = lexers.get_lexer_by_name(language)
	highlighted_code = highlight(code_tag.string[len(language):len(code_tag.string)], code_lexer, code_formatter)
	highlighted_code = BeautifulSoup(highlighted_code, "html.parser")
	code_tag.parent.replace_with(highlighted_code.pre)
end # WOW!

post.html = str(soup) # clearly belongs to the function, not the for loop
```

Now it's a easier to find where it belongs to. That is why i don't like python for it's syntax. I had to navigate from top to bottom to process this code's behaviour.

### Will i use python in the future?

**YES**. *Absolutely*. I will continue to code in python, but not as my primary go-to language, of course as a **scripting** language. A language that is easy to use, a language that will always be there when i need, it comes with all over the GNU/Linux-based systems, mostly there will be python ready to use.

Also **NO**, for anything unrelated to scripting, never gonna use it for something like this again. If i would build something like this, i might just jump to WASM, it's been attracting me lately. Maybe using a fresh language like Rust or Go.

Apart from that, i'm more interested to bash as a scripting language, so..

## Project layout

This is how the project layout looks as for now. Or you can navigate to this app's [repository](https://github.com/youkwhd/youkwhd.herokuapp.com) to find out.

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
├── LICENSE
├── Procfile
├── README.md
├── requirements.txt
└── run.py
```

The core of this application is mostly at the `app/views/*` and `app/__init__.py`. This is more likely a "functional" layout. A more common layout is the "divisional splitting", that's what they said. An example of divisional splitting can be found on [this repository](https://gitlab.com/patkennedy79/flask-recipe-app).

As a someone who is coming from Node.js, i like my current layout better than any. The reason is simple, every directory is self-explanatory.

## Parsing blog posts

On this day, i'm using a pre-configured extension for the library Markdown. Before, i wasn't using it, instead, i use BeautifulSoup4. There is a reason behind this.

1. I didn't know there was extensions, i thought there was nothing as such.
2. Why would i solve leetcode-like problems if i don't even practice it on the real world?

And so, i began to build up the necessary features for my needs.

* The ability to have Table of contents
* Code highlighting
* Nothing else.

That is it. Everything i need. The essentials for a standart blog.

### Generating Table of contents

Starting with the ability to have Table of contents, i first need to attach IDs for each headings / titles. Here's a code snippet showing how i accomplish it:

```python
@blueprints["posts"].route("/posts/<slug>/")
def post(slug):
	post = get_post(slug)
	soup = BeautifulSoup(post.html, "html.parser")

	for heading_tag in soup.find_all(re.compile('^h[1-6]$')):
		# replace all non-alphanumeric characters
		heading_tag_id = re.sub(r'[\W]+', "-", heading_tag.string).lower()

		# clean ups, don't mind this while loop
		while heading_tag_id[-1] == "-":
				heading_tag_id = heading_tag_id[0:len(heading_tag_id) - 1]

		# append the generated id
		heading_tag['id'] = heading_tag_id

	post.html = str(soup)
	return render_template("posts/slug.html", post=post)
```

Now i can implement Table of contents. Turns out, it's hard to accomplish. I mean, it's easy enough to generate the Table of contents. What's hard is to maintain the best structure. I had hard times deciding on what to check if the headings actually need to open a new ul tag or just appending it on, also, it's hard to have the correct "pointer" to the desired tag to append with.

It's just hard. The thing is, i did it. But didn't made it as great as the pre-configured extension (we'll come back to this later). My Table of contents's structure is a mess.

### Attempting for code highlighting

The extension CodeHilite follows the John Gruber's [markdown syntax](https://daringfireball.net/projects/markdown/syntax), with a little tweakings done.

> "To produce a code block in Markdown, simply indent every line of the block by at least 4 spaces or 1 tab."

I used 4 spaces + colons for any code i wrote in markdown following John Gruber's syntax. The complete syntax can be found at the [CodeHilite extension docs](https://daringfireball.net/projects/markdown/syntax).

#### Before knowing extensions is a thing

I tried to parse the code myself then highlight it using Pygments. Without realizing the syntax is wrong. The code snippet when i tried to parse it myself:

```python
from . import blueprints
from flask import render_template
from bs4 import BeautifulSoup, Comment

from pygments import highlight, lexers
from pygments.formatters.html import HtmlFormatter

@blueprints["posts"].route("/posts/<slug>/")
def post(slug):
	post = get_post(slug)
	soup = BeautifulSoup(post.html, "html.parser")

	codes = soup.find_all("code")
	code_formatter = HtmlFormatter()

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
		highlighted_code = BeautifulSoup(highlighted_code, "html.parser")
		code_tag.parent.replace_with(highlighted_code.pre)

	post.html = str(soup)
	return render_template("posts/slug.html", post=post)
```

I was using the three backticks instead of colons.

After trying to write C code, things starting to break, from there. I checked the [Flask-FlatPages docs](https://flask-flatpages.readthedocs.io/en/latest/index.html#configuration), and realized that there is extensions for highlighting code. Wasted time.

#### Oh, there is extensions for the Markdown library

Now i ditched Flask-FlatPages (Flask-FlatPages is relying on Markdown lib), and started to use the Markdown library by itself.

From there, i refactored my code to use the CodeHilite extension. I don't want to waste my time implementing a feature that is already implemented.

### Regenerating Table of contents

As i said before, my version of Table of contents's **structure** is not that great.

When compared to the extension's, the **visual effect** is just the same.

Here is a comparison of the structure between mine and extension's:

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

The extension could generate a more cleaner structure:

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

This is due to the limited data i have. The Markdown library should have something better than parsing using a list of BeautifulSoup4 objects. If i put more effort and time to this, i'm sure i would be able to have the same output.

Thus i chose what just works. I had my experience making my own, so it's ok for me to just throw my code apart.

## Styling the Flask app

The styling should be as minimal. It should look like a plain HTML Document. I don't know why i'm more attracted to these kind of sites that is just plain but informative. Rather than fancy looking personal websites.

## RSS feeds

While writing this article, i'm working on the RSS feed. Soon enough i will include RSS feed for this website.
