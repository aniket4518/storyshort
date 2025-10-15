@echo off
echo ========================================
echo Google OAuth Quick Fix
echo ========================================
echo.

echo Generating NEXTAUTH_SECRET...
echo.
FOR /F "tokens=*" %%i IN ('node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"') DO SET SECRET=%%i

echo Your new NEXTAUTH_SECRET:
echo %SECRET%
echo.

echo COPY THIS and paste it in your .env file!
echo.
echo Open .env file and replace:
echo   NEXTAUTH_SECRET="jZe8cH3v..."
echo.
echo With:
echo   NEXTAUTH_SECRET="%SECRET%"
echo.

pause
echo.

echo Running Prisma commands...
call npx prisma generate
echo.
call npx prisma db push
echo.

echo ========================================
echo Next Steps:
echo ========================================
echo 1. Update NEXTAUTH_SECRET in .env (shown above)
echo 2. Verify Google Console redirect URI:
echo    http://localhost:3000/api/auth/callback/google
echo 3. Restart dev server: npm run dev
echo 4. Test at: http://localhost:3000/login
echo.
pause
