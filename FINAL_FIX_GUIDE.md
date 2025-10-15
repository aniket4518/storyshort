# ✅ FINAL FIX - Google OAuth redirect_uri_mismatch

## 🎯 The Issues Found:

1. ❌ Your dev server runs on **port 3001** (not 3000)
2. ❌ NEXTAUTH_URL was set to port 3000
3. ❌ Google Console doesn't have the port 3001 redirect URI

## ✅ What I Fixed:

1. Updated `.env` file: `NEXTAUTH_URL="http://localhost:3001"`

## 🔧 What YOU Need to Do:

### Step 1: Add Redirect URI to Google Console

1. Go to: https://console.cloud.google.com/apis/credentials
2. Click on your OAuth 2.0 Client ID
3. Under "Authorized redirect URIs", add BOTH:

```
http://localhost:3001/api/auth/callback/google
http://localhost:3000/api/auth/callback/google
```

(Add both so it works regardless of which port)

### Step 2: Save in Google Console

Click **SAVE** button at the bottom.

⏱️ **Wait 1-2 minutes** for Google to update.

### Step 3: Restart Your Dev Server

Stop the current server (Ctrl+C) and restart:

```bash
npm run dev
```

### Step 4: Test Authentication

1. Open: http://localhost:3001/login
2. Click "Google" button
3. Complete Google login
4. Should redirect to /room successfully!

---

## 📋 Your Complete Google Console Setup:

In Google Cloud Console, your "Authorized redirect URIs" should look like:

```
┌────────────────────────────────────────────────────────────┐
│ http://localhost:3000/api/auth/callback/google            │
│ http://localhost:3001/api/auth/callback/google            │
└────────────────────────────────────────────────────────────┘
```

---

## 🔍 Current Configuration:

Your `.env` file now has:

```env
NEXTAUTH_URL="http://localhost:3001"
GOOGLE_CLIENT_ID="212212506637-kicji0sd227jkntg9bna2v8o4ov4gca5.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="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"
```

Your dev server runs on: **http://localhost:3001**

NextAuth will use redirect URI: **http://localhost:3001/api/auth/callback/google**

---

## ✅ Checklist:

- [ ] Go to Google Cloud Console
- [ ] Add redirect URI: `http://localhost:3001/api/auth/callback/google`
- [ ] Click SAVE in Google Console
- [ ] Wait 1-2 minutes
- [ ] Restart dev server (`npm run dev`)
- [ ] Go to http://localhost:3001/login
- [ ] Click Google button
- [ ] Should work! ✨

---

## 🐛 Still Getting Error?

If you still see `redirect_uri_mismatch`:

1. **Double-check the URI in Google Console:**

   - Must be EXACTLY: `http://localhost:3001/api/auth/callback/google`
   - No trailing slash
   - No typos

2. **Make sure you saved:**

   - Look for green success message in Google Console

3. **Clear browser cache/cookies:**

   - Or try in incognito mode

4. **Check the exact error:**
   - Google's error page shows what URI it received
   - Compare it to what's in your Google Console

---

## 📸 Visual Guide:

When you click "Google" button, your browser will go to:

```
https://accounts.google.com/o/oauth2/v2/auth?
  client_id=212212506637-kicji0sd227jkntg9bna2v8o4ov4gca5.apps.googleusercontent.com
  &redirect_uri=http://localhost:3001/api/auth/callback/google  ← This must match Google Console
```

After you login with Google, it will redirect to:

```
http://localhost:3001/api/auth/callback/google?code=...
```

This URI must be in your "Authorized redirect URIs" list!
