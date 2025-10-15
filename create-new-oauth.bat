@echo off
echo.
echo ============================================
echo   CREATE NEW GOOGLE OAUTH CLIENT
echo ============================================
echo.
echo Follow these steps to create a NEW OAuth client:
echo.
echo 1. Go to: https://console.cloud.google.com/apis/credentials
echo.
echo 2. Click: "+ CREATE CREDENTIALS"
echo.
echo 3. Select: "OAuth 2.0 Client ID"
echo.
echo 4. Application type: Web application
echo.
echo 5. Name: StoryShort-Local
echo.
echo 6. Authorized redirect URIs - Add BOTH:
echo    - http://localhost:3000/api/auth/callback/google
echo    - http://localhost:3001/api/auth/callback/google
echo.
echo 7. Click CREATE
echo.
echo 8. Copy the Client ID and Client Secret
echo.
echo 9. Update .env file with new credentials
echo.
echo 10. Restart server: npm run dev
echo.
echo ============================================
echo.
echo Press any key to open Google Console...
pause > nul
start https://console.cloud.google.com/apis/credentials
echo.
echo Console opened in browser!
echo.
pause
