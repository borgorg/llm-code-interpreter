# Code Interpreter on steroids for ChatGPT (by e2b)

E2B plugin for ChatGPT is like **code interpreter on steroids**.

E2B gives your ChatGPT instance access to a full cloud environment that's sandboxed. That means:
- Access to Ubuntu OS
- Using filesystem (create, list, and delete files and dirs)
- Run processes
- Sandboxed - you can run any code
- Access to the internet

## What can I do with all this power?
Here is a few ideas:
- Run **any** language, not just Python. Currently supported out of the box:
  - Nodejs
  - Go
  - Bash
  - Rust
  - Python3
  - PHP
  - Java
  - Perl
  - .NET
- Run databases
- Start servers
- Run terminal commands
- Create long running processes
- Deploy websites
- Install programs via terminal

## Installation
There are two ways:
1. Wait for OpenAI to approve our plugin in their store
2. Have developer access to ChatGPT plugins and install the plugin by following [this](https://github.com/openai/plugins-quickstart#setup-locally).

## Usage examples
> Install youtube-dl and use it to download this video https://www.youtube.com/watch?v=jNQXAC9IVRw

> Start HTTP server on port 3000

> Clone this repo "https://github.com/e2b-dev/chatgpt-plugin", fix any typos in readme push it

## What is e2b?
E2B is the company behind this plugin. We're building an operating system for AI agents. A set of low-level APIs for building agents (debugging, auth, deploy, monitor, and more) and cloud environments for deploying the agents.