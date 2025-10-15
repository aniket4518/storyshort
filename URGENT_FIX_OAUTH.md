# ⚠️ CRITICAL FIX REQUIRED - Google OAuth Setup

## Current Issues:

1. ❌ Environment variables were using wrong names (camelCase instead of SCREAMING_SNAKE_CASE)
2. ❌ Missing NEXTAUTH_SECRET
3. ❌ Missing NEXTAUTH_URL

## ✅ FIXED - Updated .env file with correct variable names

## 🔥 IMMEDIATE ACTION REQUIRED:

### Step 1: Update NEXTAUTH_SECRET in .env file

Open `.env` file and replace the NEXTAUTH_SECRET line with a real secret.

Run this command to generate one:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Copy the output and paste it in your `.env` file replacing the current NEXTAUTH_SECRET value.

### Step 2: Verify Google Cloud Console Setup

**CRITICAL:** Your redirect URI in Google Cloud Console MUST be EXACTLY:

```
http://localhost:3000/api/auth/callback/google
```

To verify/fix:

1. Go to: https://console.cloud.google.com/apis/credentials
2. Click on your OAuth 2.0 Client ID
3. Under "Authorized redirect URIs", make sure you have:
   - `http://localhost:3000/api/auth/callback/google`
4. If using port 3001, also add:
   - `http://localhost:3001/api/auth/callback/google`
5. Save changes

### Step 3: Update Database Schema

Run these commands:

```bash
npx prisma generate
npx prisma db push
```

### Step 4: Restart Server

Stop the current dev server (Ctrl+C) and restart:

```bash
npm run dev
```

### Step 5: Check Console Logs

When you click "Google" button, check the terminal for debug logs:

- "Sign in callback triggered"
- "Account: ..."
- "User: ..."

These will show what's happening during authentication.

## 🐛 Debugging Steps:

If still getting errors:

1. **Check the terminal output** - I've enabled debug mode, so you'll see detailed logs
2. **Check browser console** (F12) for any errors
3. **Verify your .env file** has:
   ```
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="<your-generated-secret>"
   GOOGLE_CLIENT_ID="212212506637-kicji0sd227jkntg9bna2v8o4ov4gca5.apps.googleusercontent.com"
   GOOGLE_CLIENT_SECRET="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"
   ```

## Common Errors:

### "OAuthSignin" Error

- **Cause 1:** Wrong redirect URI in Google Console
- **Fix:** Make sure it's exactly `http://localhost:3000/api/auth/callback/google`
- **Cause 2:** Invalid Client ID/Secret
- **Fix:** Regenerate credentials in Google Console

- **Cause 3:** Missing NEXTAUTH_SECRET
- **Fix:** Generate and add to .env

### "Configuration" Error

- **Cause:** Environment variables not loaded
- **Fix:** Restart dev server after editing .env

## Current Configuration Status:

✅ Variable names corrected (GOOGLE_CLIENT_ID not Google_ClientId)
✅ NEXTAUTH_URL added
✅ NEXTAUTH_SECRET added (needs to be regenerated)
✅ Debug mode enabled
✅ Enhanced error logging
✅ Profile mapping added
✅ Scope explicitly defined

## Test Steps:

1. Open: http://localhost:3000/login
2. Click "Google" button
3. Should redirect to Google
4. Login with Google account
5. Should redirect back to /room

## Your Current Credentials:

- Client ID: 212212506637-kicji0sd227jkntg9bna2v8o4ov4gca5.apps.googleusercontent.com
- Database: Neon PostgreSQL (configured)
- Port: 3000 (or 3001)
