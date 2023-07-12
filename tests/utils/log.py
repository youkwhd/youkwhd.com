from colorama import Fore

def log_success(*arg):
    print(f"{Fore.GREEN}[*]: Passed:", *arg)

def log_warning(*arg):
    print(f"{Fore.YELLOW}[*]: Warning:", *arg)

def log_failure(*arg):
    print(f"{Fore.RED}[*]: Failed:", *arg)

def log_reset():
    print(Fore.RESET, end="")