#!/bin/bash

# Production deployment script
echo "Building WordGen Pro for production..."

# Install dependencies
npm install

# Build the project
npm run build

# Create deployment package
echo "Creating deployment package..."
tar -czf wordgen-pro-build.tar.gz dist/

echo "Deployment package created: wordgen-pro-build.tar.gz"
echo "Upload this file to your server and extract it to your web directory"

# Instructions for server setup
cat << 'EOF'

Server Setup Instructions:
1. Upload wordgen-pro-build.tar.gz to your server
2. Extract: tar -xzf wordgen-pro-build.tar.gz
3. Move contents of dist/ to your web root (e.g., /var/www/html/)
4. Configure your web server (Apache/Nginx) to serve the files
5. Set up SSL certificate for HTTPS

For Apache, add this to your .htaccess:
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

For Nginx, add this to your server block:
location / {
    try_files $uri $uri/ /index.html;
}
EOF