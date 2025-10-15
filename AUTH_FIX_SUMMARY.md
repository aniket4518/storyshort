# Google Authentication Setup - Issue Fix Summary

## Issues Fixed:

### 1. ✅ Prisma Schema Updated

- Added NextAuth required tables: `Account`, `Session`, `VerificationToken`
- Updated `User` model with required fields for OAuth: `emailVerified`, `image`
- Added proper relations between models

### 2. ✅ NextAuth Configuration Enhanced

- Added `NEXTAUTH_SECRET` configuration
- Changed session strategy to JWT (more reliable than database sessions)
- Added debug mode for development
- Added proper OAuth callbacks
- Added Google OAuth authorization params for better flow

### 3. ✅ Google Button Fixed

- Connected the button to `handleGoogleSignIn` function
- Now properly calls NextAuth's `signIn("google")` method

### 4. ✅ Error Handling Improved

- Added custom error page redirect to `/login`
- Added signIn callback for better error tracking

## What You Need To Do:

### Step 1: Create .env.local File

Create a file named `.env.local` in the `storyshort` folder with these variables:

```env
# Database
DATABASE_URL="your-postgresql-connection-string"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-a-secret-key"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### Step 2: Generate NEXTAUTH_SECRET

Run this command in terminal:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Copy the output and use it as your `NEXTAUTH_SECRET`

### Step 3: Setup Google OAuth

1. Go to: https://console.cloud.google.com/
2. Create/Select a project
3. Enable Google+ API
4. Go to "Credentials" > "Create Credentials" > "OAuth 2.0 Client ID"
5. **IMPORTANT:** Add these Authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `http://localhost:3001/api/auth/callback/google` (if using port 3001)
6. Copy Client ID and Client Secret to your .env.local

### Step 4: Update Database

Run these commands in order:

```bash
npx prisma generate
npx prisma db push
```

### Step 5: Restart Dev Server

Stop the current server (Ctrl+C) and run:

```bash
npm run dev
```

## Testing:

1. Go to `http://localhost:3000/login`
2. Click "Google" button
3. Should redirect to Google login
4. After login, should redirect to `/room`

## Common Errors & Solutions:

### Error: "OAuthSignin"

- **Cause:** Missing/incorrect Google credentials or redirect URI not configured
- **Fix:** Double-check Google Console redirect URI matches exactly: `http://localhost:3000/api/auth/callback/google`

### Error: "Configuration"

- **Cause:** Missing NEXTAUTH_SECRET
- **Fix:** Add NEXTAUTH_SECRET to .env.local

### Error: "Callback"

- **Cause:** Database not updated with new schema
- **Fix:** Run `npx prisma db push`

## Files Modified:

1. ✅ `prisma/schema.prisma` - Added NextAuth tables
2. ✅ `app/api/auth/[...nextauth]/route.ts` - Enhanced configuration
3. ✅ `app/components/Authpage.tsx` - Fixed Google button
4. ✅ Created `.env.setup-instructions` - Setup guide

## Next Steps After Setup:

- Test Google login
- Add error messages to UI
- Add loading states to buttons
- Add success redirect logic
