# 🔍 EXACT ERROR DIAGNOSIS

## What's Happening:

When you click "Google" button, NextAuth sends you to Google with a `redirect_uri` parameter.

Google checks: "Is this redirect_uri in their approved list?"

- ✅ YES → Allow login
- ❌ NO → Show error "redirect_uri_mismatch"

## What Google is Receiving:

Based on your .env file (`NEXTAUTH_URL="http://localhost:3000"`), NextAuth is sending:

```
redirect_uri=http://localhost:3000/api/auth/callback/google
```

## What Google Expects:

Your Google Console "Authorized redirect URIs" list must contain **EXACTLY**:

```
http://localhost:3000/api/auth/callback/google
```

## Common Mismatches:

❌ You have: `http://localhost:3000/api/auth/callback`
✅ You need: `http://localhost:3000/api/auth/callback/google`

❌ You have: `http://localhost:3000/api/auth/callback/google/`
✅ You need: `http://localhost:3000/api/auth/callback/google`

❌ You have: `https://localhost:3000/api/auth/callback/google`
✅ You need: `http://localhost:3000/api/auth/callback/google`

❌ You have: `http://127.0.0.1:3000/api/auth/callback/google`
✅ You need: `http://localhost:3000/api/auth/callback/google`

## 🎯 THREE WAYS TO FIX:

### Option 1: Edit Existing OAuth Client (Recommended)

1. Go to: https://console.cloud.google.com/apis/credentials
2. Find your OAuth client (212212506637...)
3. Click on it
4. Add to "Authorized redirect URIs":
   ```
   http://localhost:3000/api/auth/callback/google
   http://localhost:3001/api/auth/callback/google
   ```
5. SAVE (important!)
6. Wait 2 minutes
7. Restart your server

### Option 2: Create New OAuth Client (Easier)

1. Run: `create-new-oauth.bat` (I made this for you)
2. Follow the prompts
3. Update .env with new Client ID and Secret
4. Restart server

### Option 3: Check What Google Actually Sees

1. Click Google button on login page
2. When you see the error, click "see error details"
3. Look for "The redirect URI in the request:"
4. Copy that EXACT URI
5. Add it to Google Console
6. SAVE
7. Wait 2 minutes
8. Try again

## 🔧 Quick Test:

To see what NextAuth is sending:

1. Open browser DevTools (F12)
2. Go to Network tab
3. Click Google button
4. Look at the request to `accounts.google.com/o/oauth2/v2/auth`
5. Check the `redirect_uri` parameter
6. That's what Google expects to see in your console!

## ✅ Final Checklist:

- [ ] Google Console has EXACT redirect URI
- [ ] SAVE button clicked in Google Console
- [ ] Waited 2 minutes after saving
- [ ] Cleared browser cookies for localhost
- [ ] Restarted dev server
- [ ] Trying in incognito mode

## 💡 Pro Tip:

Add BOTH ports to be safe:

```
http://localhost:3000/api/auth/callback/google
http://localhost:3001/api/auth/callback/google
```

This way it works regardless of which port your server uses!
