# 🔴 URGENT: Fix redirect_uri_mismatch Error

## The Problem:

Google is rejecting the login because the redirect URI doesn't match what's registered in Google Cloud Console.

## The Solution (5 minutes):

### Step 1: Go to Google Cloud Console

1. Open: https://console.cloud.google.com/apis/credentials
2. Find your OAuth 2.0 Client ID (the one with ID: 212212506637-kicji0sd227jkntg9bna2v8o4ov4gca5)
3. Click on it to edit

### Step 2: Add the Correct Redirect URI

In the "Authorized redirect URIs" section, you need to add EXACTLY:

```
http://localhost:3000/api/auth/callback/google
```

**IMPORTANT:**

- No trailing slash
- Lowercase "localhost"
- Port 3000 (or 3001 if your dev server runs on 3001)
- Exact path: `/api/auth/callback/google`

### Step 3: If You're Using Port 3001

If your terminal shows the dev server is running on port 3001, add:

```
http://localhost:3001/api/auth/callback/google
```

### Step 4: Save Changes

Click "SAVE" at the bottom of the page in Google Console.

⚠️ **WAIT 1-2 MINUTES** after saving for Google to propagate the changes.

### Step 5: Test Again

1. Go to: http://localhost:3000/login (or 3001)
2. Click "Google" button
3. Should work now!

---

## Current Configuration (From Debug Log):

NextAuth is trying to use:

```
redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle
```

Which decodes to:

```
http://localhost:3000/api/auth/callback/google
```

This MUST match exactly what's in your Google Console.

---

## Screenshot Guide:

In Google Cloud Console, you should see something like:

```
Authorized redirect URIs
┌────────────────────────────────────────────────────────────┐
│ http://localhost:3000/api/auth/callback/google            │  ← Add this
│ http://localhost:3001/api/auth/callback/google            │  ← And this (if using 3001)
└────────────────────────────────────────────────────────────┘
```

---

## Common Mistakes to Avoid:

❌ `http://localhost:3000/api/auth/callback/google/` (trailing slash)
❌ `http://localhost:3000/api/auth/callback` (missing /google)
❌ `https://localhost:3000/api/auth/callback/google` (using https)
❌ `http://127.0.0.1:3000/api/auth/callback/google` (using 127.0.0.1 instead of localhost)

✅ `http://localhost:3000/api/auth/callback/google` (correct)

---

## After Adding the URI:

1. Click "SAVE" in Google Console
2. Wait 1-2 minutes for propagation
3. Clear your browser cookies for localhost (optional but recommended)
4. Try logging in again

---

## Still Not Working?

If you still get the error after adding the correct URI:

1. **Check which port your dev server is using:**
   - Look at the terminal output
   - It should say "Local: http://localhost:3000" or "3001"
2. **Make sure you saved in Google Console:**
   - The page should show a green success message
3. **Try incognito/private browsing:**

   - Sometimes cookies cause issues

4. **Double-check the URI:**
   - Copy the exact URI from this file
   - Paste it into Google Console
   - No extra spaces or characters
