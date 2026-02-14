# Cooking Discord Bot — Threat Model

## 1. System Overview
The Cooking Discord Bot is a Node.js application that interacts with users through the Discord API using slash commands. The bot lets users select a recipe and receive allergen-safe alternatives.

Users interact with the bot using:

- `/recipes` — view recipe list
- `/pick` — select a recipe
- `/allergen` — ask for a substitution based on an allergen

The bot stores temporary session data in memory using a JavaScript `Map` keyed by the Discord user ID.


## 2. Assets to Protect

| Asset | Importance |
|------|------|
| Discord Bot Token | Allows full control of the bot |
| Server safety | Prevents spam or malicious behavior |
| Bot availability | Bot must respond accuratly to the commands |
| User session state | Prevents mixing up user recipe selections |
| Repository secrets (.env) | Prevents private keys leakage |


## 3. Trust Boundaries

The system has these three trust zones:

### Untrusted Zone
- Discord users sending any commands

### Semi-trusted Zone
- Discord API (forwards user input but still contains user-controlled data)

### Trusted Zone
- The bot application

The main trust boundary happens when user input passes from Discord into our application.


## 4. Entry Points for Attacks

Attackers can interact with the system througgh these ways:

- `/pick` command 
- `/allergen` command
- Any input that's given by users
- GitHub repository commits
- Environment variables


## 5. Threat Analysis (STRIDE)

### Spoofing
**Threat:** A user tries to change another user’s recipe selection.

**Risk:** If recipe state was stored as global, users could overwrite each other’s data when multiple users are using the bot.

**Prevention:**
The bot stores session state using the Discord user ID.  
So, Each user session is seperate and can't be accessed by other users.


### Tampering
**Threat:** A user sends harmful or malformed input.

Examples:
- Spam the channel
- Long input strings
- Invalid allergen names

**Prevention:**
- Only allow allergens: `egg`, `dairy`, `gluten`, `soy`
- Dismiss all invalid inputs


### Repudiation
**Threat:** A user spams commands and doesn't accept their fault.

**Prevention:**
The bot can log certain things such as user ID and command, and discard anything else.

### Information Disclosure

#### Token Leak
If the `.env` file is uploaded to GitHub, an attacker will have full control of the bot.

**Prevention:**
- Put `.env` in `.gitignore`
- `.env-sample` only has placeholders

#### User Data
The bot temporarily stores discord user ID and recipe number

This data will be erased when the bot starts again.

### Denial of Service
**Threat:** A user keeps sending commands which makes the bot stop responding.

**Prevention:**
- Make sure commands send a respond within 3 seconds

### Elevation of Privilege
**Threat:** If the bot token is leaked and the bot has administrator permissions, an attacker could control the server.

**Prevention:**
Do not give the bot administrator premissions and only give it the minimum permissions required to run the bot.
