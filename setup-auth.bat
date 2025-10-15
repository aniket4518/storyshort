@echo off
echo ============================================
echo StoryShort - Google Auth Setup Helper
echo ============================================
echo.

echo Step 1: Generating NEXTAUTH_SECRET...
node -e "console.log('NEXTAUTH_SECRET=\"' + require('crypto').randomBytes(32).toString('base64') + '\"')"
echo.
echo Copy the above secret and add it to your .env.local file
echo.

echo Step 2: Checking for .env.local file...
if exist .env.local (
    echo ✓ .env.local exists
) else (
    echo ✗ .env.local not found
    echo Creating .env.local from template...
    echo # Database > .env.local
    echo DATABASE_URL="postgresql://user:password@localhost:5432/storyshort" >> .env.local
    echo. >> .env.local
    echo # NextAuth >> .env.local
    echo NEXTAUTH_URL="http://localhost:3000" >> .env.local
    echo NEXTAUTH_SECRET="REPLACE-WITH-SECRET-FROM-ABOVE" >> .env.local
    echo. >> .env.local
    echo # Google OAuth >> .env.local
    echo GOOGLE_CLIENT_ID="your-google-client-id" >> .env.local
    echo GOOGLE_CLIENT_SECRET="your-google-client-secret" >> .env.local
    echo.
    echo ✓ Created .env.local - Please edit it with your credentials
)
echo.

echo Step 3: Running Prisma commands...
echo Running: npx prisma generate
call npx prisma generate
echo.

echo Running: npx prisma db push
call npx prisma db push
echo.

echo ============================================
echo Setup Complete!
echo ============================================
echo.
echo IMPORTANT REMINDERS:
echo 1. Edit .env.local with your actual credentials
echo 2. Add Google OAuth redirect URI: http://localhost:3000/api/auth/callback/google
echo 3. Run: npm run dev
echo 4. Test at: http://localhost:3000/login
echo.
pause
