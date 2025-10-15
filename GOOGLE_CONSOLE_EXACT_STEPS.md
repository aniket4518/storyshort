# 🎯 SIMPLE FIX - Copy & Paste This Exact URI to Google Console

## ⚠️ The Problem:

Google is rejecting your login because the redirect URI doesn't match.

## ✅ THE SOLUTION (Copy This EXACT Text):

```
http://localhost:3000/api/auth/callback/google
```

---

## 📝 Step-by-Step Instructions:

### Step 1: Open Google Cloud Console

Click this link: https://console.cloud.google.com/apis/credentials

### Step 2: Find Your OAuth Client

Look for:

- Name: "aiwideo maker" (or similar)
- Type: OAuth 2.0 Client ID
- Client ID: starts with "212212506637"

Click on it.

### Step 3: Find "Authorized redirect URIs" Section

Scroll down until you see a section called:
**"Authorized redirect URIs"**

### Step 4: Click "ADD URI" Button

There should be a button that says "+ ADD URI"

### Step 5: Paste This Exact Text

Copy this (triple-click to select all):

```
http://localhost:3000/api/auth/callback/google
```

Paste it in the new field.

### Step 6: Add Another URI for Port 3001

Click "+ ADD URI" again and paste:

```
http://localhost:3001/api/auth/callback/google
```

### Step 7: SAVE

Scroll to the bottom and click the **SAVE** button.

---

## 🖼️ What You Should See:

After adding, the "Authorized redirect URIs" should look like:

```
Authorized redirect URIs
┌──────────────────────────────────────────────────────────┐
│ 1  http://localhost:3000/api/auth/callback/google       │
│ 2  http://localhost:3001/api/auth/callback/google       │
└──────────────────────────────────────────────────────────┘
```

---

## ⏱️ IMPORTANT - Wait 2 Minutes

After saving, you MUST wait 1-2 minutes for Google to update their systems.

---

## 🔄 Then Restart Your Server

1. Stop the dev server (press Ctrl+C in terminal)
2. Run: `npm run dev`
3. Go to: http://localhost:3000/login (or 3001 depending on port shown)
4. Click Google button
5. Should work! ✨

---

## 🐛 If It Still Doesn't Work:

### Check 1: Did You Actually Save?

- Go back to Google Console
- Check if the URIs are still there
- Sometimes it doesn't save if you don't scroll down and click SAVE

### Check 2: Are You Using the Right Project?

- Make sure you're editing the "aiwideo maker" project
- Check the project name at the top of Google Console

### Check 3: Check What Google Says

When you see the error page, it shows:

- "The redirect URI in the request" - This is what NextAuth sent
- Copy that exact URI and add it to Google Console

### Check 4: Try Incognito Mode

Sometimes old cookies cause issues. Try in a private/incognito browser window.

---

## 📸 Visual Guide - What to Look For:

1. **Google Console Dashboard**

   - Click "APIs & Services" in left menu
   - Click "Credentials"

2. **OAuth 2.0 Client IDs Section**

   - Find your client (212212506637-...)
   - Click on it

3. **Edit OAuth Client**

   - Scroll to "Authorized redirect URIs"
   - Click "+ ADD URI"
   - Paste: `http://localhost:3000/api/auth/callback/google`
   - Click "+ ADD URI" again
   - Paste: `http://localhost:3001/api/auth/callback/google`
   - Scroll to bottom
   - Click "SAVE"

4. **Confirmation**
   - You should see a green success message
   - The URIs should appear in the list

---

## 🚀 Alternative: Create a NEW OAuth Client

If you're still stuck, create a completely new OAuth client:

1. Go to: https://console.cloud.google.com/apis/credentials
2. Click "+ CREATE CREDENTIALS"
3. Choose "OAuth 2.0 Client ID"
4. Application type: "Web application"
5. Name: "StoryShort Local Dev"
6. Authorized redirect URIs:
   - Add: `http://localhost:3000/api/auth/callback/google`
   - Add: `http://localhost:3001/api/auth/callback/google`
7. Click "CREATE"
8. Copy the new Client ID and Client Secret
9. Update your .env file with the new credentials
10. Restart server

This gives you a fresh start with the correct URIs!
