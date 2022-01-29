---
title: "Remote: Support for Password Authentication was Removed on August 13, 2021"
date: "2021-10-04"
tags:
  - git
excerpt: 'as the error said "remote: support for password authentication was removed on August 13, 2021. solved" github does not support nor accept account password when authenticating git operations, now you have to use github personal access tokens.' 
---

as the error said "remote: support for password authentication was removed on August 13, 2021. solved" github does not support nor accept account password when authenticating git operations, now you have to use github personal access tokens. which is an alternative for password auth.

## Creating a token
head to github main page [https://github.com](https://github.com)

after entering your github profile, please head to the settings  
or you can open [this link](https://github.com/settings/profile) on new tab.

![github-settings-screenshot](./github-settings.png)

now you can head to the developer settings
or you can open [this link](https://github.com/settings/tokens) on new tab.

![github-dev-settings-screenshot](./github-dev-settings.png)

then you can create your own token.

![github-token-screenshot](./github-token.png)

you should get this success message from github. **DO NOT SHARE** your own personal access token. except if it's meant for others.

![github-token-success-screenshot](./github-token-success.png)

now you have successfully created your own PATs, you should be able to work with git remotely.

for more information, please see [this article](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) from github.

## Using the token

now you should be able to use the token. you should change your origin remote to:

`https://<token>@github.com/<username>/<repo>.git`

## Github CLI tool

try this github cli to authenticate automatically:  
please head to the [official instruction](https://cli.github.com/manual/installation) to install.

installation for **debian based**:  
```bash
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo gpg --dearmor -o /usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh
```

**Note**: If you get the error *"gpg: failed to start the dirmngr '/usr/bin/dirmngr': No such file or directory"*, try installing the `dirmngr` package: `sudo apt install dirmngr`.

to login, follow this code:
```bash
gh auth login
```

then gh will ask some question, you can directly use password or PATs to authenticate.

## Conclusion

now you've installed `gh` github cli tool. And made your first personal access token (PATs) for github. I hope it solved your problem. thank you for reading this article, happi hacking.
